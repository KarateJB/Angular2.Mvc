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

namespace Angular2.Mvc.Website.Areas.Karma.Controllers
{

    [Area("Karma")]
    [Route("Karma/[controller]")]
    public class DemoController : BaseController
    {

        [Route("[action]")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
