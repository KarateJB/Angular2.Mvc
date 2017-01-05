using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2.Mvc.Website.Areas.Basic.Controllers
{
    [Area("Basic")]
    [Route("Basic/[controller]/[action]")]
    public class CustomerVcController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Sample from returning ViewComponent from Control
        /// </summary>
        /// <returns></returns>
        public IActionResult IndexVc()
        {
            return ViewComponent("CustomerVc", new { name = "JB" });
        }

        [HttpGet]
        //[Route("Basic/[controller]/GetView")]
        public IActionResult GetView([FromQuery] string name)
        {
            return ViewComponent("CustomerVc", new { name = "JB" });
        }
    }
}
