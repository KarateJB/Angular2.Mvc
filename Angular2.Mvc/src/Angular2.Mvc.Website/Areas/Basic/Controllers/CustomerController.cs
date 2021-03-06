﻿using System;
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

namespace Angular2.Mvc.Website.Areas.Basic.Controllers
{

    [Area("Basic")]
    [Route("Basic/[controller]")]

    public class CustomerController : BaseController
    {

        [Route("[action]")]
        public IActionResult Index()
        {
            //Show how to log with NLog
            //base._logger.Debug($"Areas:Basic,Controller:Customer,Action:Index");
            //base._logger.Error($"Areas:Basic,Controller:Customer,Action:Index");

#if NET452
            base._logger.Info("This log is for .NET framework 4.5.2 only!");
#endif

            return View();
        }


        [Route("[action]")]
        public IActionResult Edit()
        {
            return View();
        }
    }
}
