using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Models.DTO;
using Angular2.Mvc.DAL.Models.DAO;
using Angular2.Mvc.Service.Service;
using Angular2.Mvc.Webapi.Controllers;
using Angular2.Mvc.Webapi.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2.Mvc.Webapi.Areas.Auth.Controllers
{
    [Route("api/Identity/[controller]")]
    public class AccountController : BaseController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ISmsSender _smsSender;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="userManager"></param>
        /// <param name="signInManager"></param>
        /// <param name="emailSender"></param>
        /// <param name="smsSender"></param>
        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender,
            ISmsSender smsSender)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._emailSender = emailSender;
            this._smsSender = smsSender;
        }

        [HttpPost]
        [AllowAnonymous]
        [CustomExceptionFilterAttribute]
        public async Task<HttpResponseMessage> Register(DtoRegister reg)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = reg.Name, Email = reg.Email };
                var result = await _userManager.CreateAsync(user, reg.Password);
                if (result.Succeeded)
                {
                    // Send an email with this link
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                    await _emailSender.SendEmailAsync(reg.Email, "Confirm your account",
                        $"Please confirm your account by clicking this link: <a href='{callbackUrl}'>link</a>");
                    await _signInManager.SignInAsync(user, isPersistent: false);
                }
            }

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
