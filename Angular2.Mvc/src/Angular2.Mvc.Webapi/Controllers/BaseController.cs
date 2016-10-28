using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NLog;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2.Mvc.Webapi.Controllers
{
    [Route("api/[controller]")]
    public class BaseController : Controller
    {
        /// <summary>
        /// Logger
        /// </summary>
        //protected ILogger<BaseController> _logger;
        protected static Logger _logger = LogManager.GetCurrentClassLogger();
    }
}
