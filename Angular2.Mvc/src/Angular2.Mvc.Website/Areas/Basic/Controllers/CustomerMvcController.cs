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
        public IActionResult Create()
        {
            var viewModel = new VmCustomer();
            return View(viewModel);
        }

        [Route("[action]")]
        [HttpPost]
        public IActionResult Create([FromForm]VmCustomer viewModel)
        {
            if (!ModelState.IsValid)
            {
                return View(viewModel);
            }

            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var entity = DaoFactory.Create<VmCustomer, Angular2.Mvc.DAL.Models.DAO.Customer>(viewModel);
                custService.Add(entity);
            }
            return RedirectToAction("Index", controllerName: "Customer");

        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult QueryCreateView()
        {
            var viewModel = new VmCustomer();
            return PartialView("~/Areas/Basic/Views/CustomerMvc/_CreateView.cshtml", viewModel);
        }
    }
}
