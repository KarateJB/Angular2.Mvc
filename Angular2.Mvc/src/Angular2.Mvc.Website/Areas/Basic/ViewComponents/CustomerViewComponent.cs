using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Models.ViewModel;
using Angular2.Mvc.DAL;
using Angular2.Mvc.DAL.Factory;
using Angular2.Mvc.DAL.Models.DAO;
using Angular2.Mvc.DAL.Service;
using Angular2.Mvc.Service.Factory;
using LinqKit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NLog;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2.Mvc.Website.Areas.Basic.ViewComponents
{
    [ViewComponent(Name = "CustomerVc")]
    public class CustomerViewComponent : ViewComponent
    {
        private Logger _logger = LogManager.GetCurrentClassLogger();

        public CustomerViewComponent()
        {
        }


        /// <summary>
        /// 1st version
        /// </summary>
        /// <param name="id"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        //public async Task<IViewComponentResult> InvokeAsync(int? id, string name)
        //{
        //    var items = await this.getCustomersAsync(id, name);
        //    ViewBag.Description = "this view is from ViewComponent.";

        //    return View(items); //Return Default.cshtml
        //}

        /// <summary>
        /// 2nd version
        /// </summary>
        /// <param name="id"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public async Task<IViewComponentResult> InvokeAsync(string display, int? id, string name)
        {
            var items = await this.getCustomersAsync(id, name);
            ViewBag.Description = "this view is from ViewComponent.";

            if (!string.IsNullOrEmpty(display) && display.ToLower().Equals("card"))
                return View("Card", items);
            else
                return View("Default", items);
        }


        private async Task<List<VmCustomer>> getCustomersAsync(int? id, string name)
        {
            var custVms = new List<VmCustomer>();

            try
            {
                var predicateRole = PredicateBuilder.New<Customer>();
                if (id.HasValue)
                {
                    predicateRole = predicateRole.And(x => x.Id == id.Value);
                }
                if (!string.IsNullOrEmpty(name))
                {
                    predicateRole = predicateRole.And(x => x.Name.IndexOf(name) >= 0);
                }

                using (var custService = new CustomerService(DbContextFactory.Create()))
                {
                    var custs = custService.GetAll().AsExpandable().Where(predicateRole).ToList();
                    custs.ForEach(x => custVms.Add(ViewModelFactory.Create<Customer, VmCustomer>(x)));
                    return custVms;
                }
            }
            catch (Exception ex)
            {
                this._logger.Error(ex.Message);
                throw;
            }

        }
    }
}
