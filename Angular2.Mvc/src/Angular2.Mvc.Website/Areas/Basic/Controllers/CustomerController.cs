using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angular2.Mvc.Website.Areas.Basic.Controllers
{
    [Area("Basic")]
    [Route("Basic/[controller]")]

    public class CustomerController : Controller
    {
        [Route("[action]")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("[action]")]
        public IActionResult Edit()
        {
            return View();
        }
    }
}
