using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.DAL.Models.DAO;
using Angular2.Mvc.Service.Service;
using Angular2.Mvc.Website.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2.Mvc.Website.Areas.Auth.Controllers
{
    public class AccountController : BaseController
    {
        

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Register()
        {
            return View();
        }
        
    }
}
