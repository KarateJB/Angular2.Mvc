using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Website.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2.Mvc.Website.Areas.Basic.Controllers
{
    [Area("Basic")]
    [Route("Basic/[controller]")]

    public class CustomerDynamicController : BaseController
    {
        public CustomerDynamicController(ILogger<BaseController> logger) : base(logger)
        {

        }


        [Route("[action]")]
        public IActionResult Index()
        {
            return View();
        }

    }
}
