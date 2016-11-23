﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Models.ViewModel;
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
        public CustomerController(ILogger<BaseController> logger) : base(logger)
        {

        }

        [Route("[action]")]
        public IActionResult Index()
        {
            base._logger.Debug($"Areas:Basic,Controller:Customer,Action:Index");
            base._logger.Error($"Areas:Basic,Controller:Customer,Action:Index");

            return View();
        }

        [Route("[action]")]
        public IActionResult Create()
        {
            var viewModel = new VmCustomer();
            return View(viewModel);
        }

        [Route("[action]")]
        [HttpPost]
        public IActionResult Create(VmCustomer viewModel)
        {
            return View(viewModel);
        }


        [Route("[action]")]
        public IActionResult Edit()
        {
            return View();
        }
    }
}
