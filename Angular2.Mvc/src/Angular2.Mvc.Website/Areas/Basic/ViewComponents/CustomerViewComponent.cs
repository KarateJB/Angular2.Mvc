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

        public async Task<IViewComponentResult> InvokeAsync(int? id, string name)
        {
            var items = await this.getCustomersAsync(id, name);
            return View(items);
        }


        private async Task<List<VmCustomer>> getCustomersAsync(int? id, string name)
        {
            var custVms = new List<VmCustomer>();

            try
            {
                using (var custService = new CustomerService(DbContextFactory.Create()))
                {
                    var custs = custService.Get(
                        x => (id != null ? x.Id == id.Value : true) &&
                        (string.IsNullOrEmpty(name) ? true : x.Name.IndexOf(name) >= 0)).ToList();

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
