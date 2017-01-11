using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Class;
using Angular2.Mvc.Service.Factory;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NLog;

namespace Angular2.Mvc.Website.Controllers
{
    public class HomeController : BaseController
    {
        private ConfigManager _configManager = null;

        public HomeController(IOptions<ConfigManager> options)
        {
            IOptions<ConfigManager> cfgMangerOptions = options;
            this._configManager = cfgMangerOptions.Value;
        }

        public IActionResult Spa()
        {
            return View();
        }


        public IActionResult Index()
        {
            //Method 1. Use injection
            //ViewBag.Title = this._configManager.SiteName;
            //ViewBag.Owner = this._configManager.SiteOwner;
            //Method 2. Use Static factory
            ViewBag.Title = ConfigProvider.SiteName;
            ViewBag.Owner = ConfigProvider.SiteOwner;

            return View();
        }
    }
}

