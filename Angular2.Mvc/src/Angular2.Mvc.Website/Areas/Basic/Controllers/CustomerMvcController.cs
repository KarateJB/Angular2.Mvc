using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Models.ViewModel;
using Angular2.Mvc.DAL.Factory;
using Angular2.Mvc.DAL.Service;
using Angular2.Mvc.Service.Factory;
using Angular2.Mvc.Website.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NLog;

namespace Angular2.Mvc.Website.Areas.Basic.Controllers {

    [Area("Basic")]
    [Route("Basic/[controller]")]

    public class CustomerMvcController : BaseController
    {
        public CustomerMvcController(ILogger<BaseController> logger) : base(logger)
        {

        }

        [Route("[action]")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("[action]")]
        public IActionResult List()
        {
            var viewModel = new List<VmCustomer>();

            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var custs = custService.GetAll().ToList();
                foreach (var cust in custs)
                {
                    var custVm = ViewModelFactory.Create<Angular2.Mvc.DAL.Models.DAO.Customer, VmCustomer>(cust);
                    viewModel.Add(custVm);
                }
            }
            return View(viewModel);
        }


        [Route("[action]")]
        public IActionResult Create()
        {
            ViewBag.Title = "Customer - Create";
            var viewModel = new VmCustomer();
            return View(viewModel);
        }

        [Route("[action]")]
        [HttpPost]
        public IActionResult Create([FromForm]VmCustomer viewModel)
        {
            ViewBag.Title = "Customer - Create";

            if (!ModelState.IsValid)
            {
                return View(viewModel);
            }

            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var entity = DaoFactory.Create<VmCustomer, Angular2.Mvc.DAL.Models.DAO.Customer>(viewModel);
                custService.Add(entity);
            }
            return RedirectToAction("Index", controllerName: "CustomerMvc");

        }

        [Route("[action]/{id?}")]
        public IActionResult Edit([FromRoute]int? id)
        {
            base._logger.Debug($"Edit Id = {id.ToString()}");

            ViewBag.Title = "Customer - Edit";
            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var entity = custService.Get(x => x.Id.Equals(id)).FirstOrDefault();
                if (entity != null)
                {
                    var viewModel = ViewModelFactory.Create<Angular2.Mvc.DAL.Models.DAO.Customer, VmCustomer>(entity);
                    return View(viewModel);
                }
                else
                {
                    return View(new VmCustomer());
                    //return RedirectToAction("Index", controllerName: "CustomerMvc");
                }
            }
        }

        [Route("[action]")]
        [HttpPost]
        public IActionResult Edit([FromForm]VmCustomer viewModel)
        {
            ViewBag.Title = "Customer - Create";

            if (!ModelState.IsValid)
            {
                return View(viewModel);
            }

            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var entity = custService.Get(x => x.Id.Equals(viewModel.Id)).FirstOrDefault();
                if (entity != null)
                {
                    entity.Name = viewModel.Name;
                    entity.Phone = viewModel.Phone;
                    entity.Description = viewModel.Description;
                    custService.Update(entity);
                }
                else {
                    throw new Exception($"The customer (id: {viewModel.Id}) is not exist!");
                }
            }

            return RedirectToAction("Index", controllerName: "CustomerMvc");

        }



        [HttpGet]
        [Route("[action]")]
        public ActionResult QueryCreateView()
        {
            var viewModel = new VmCustomer();
            return PartialView("~/Areas/Basic/Views/CustomerMvc/_CreateView.cshtml", viewModel);
            //return PartialView("~/Areas/Basic/Views/CustomerMvc/_CreateViewTh.cshtml", viewModel); //Use Tag helper page
        }
    }
}
