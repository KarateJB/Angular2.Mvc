using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NLog;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2.Mvc.Website.Controllers
{
    public class BaseController: Controller
    {
        /// <summary>
        /// Logger
        /// </summary>
        //protected ILogger<BaseController> _logger;
        protected Logger _logger = LogManager.GetCurrentClassLogger();

        protected bool validateModel(object model)
        {
            var context = new ValidationContext(model, serviceProvider: null, items: null);
            var validationResults = new List<ValidationResult>();

            bool isValid = Validator.TryValidateObject(model, context, validationResults, true);

            if (ModelState.Values.Count() > 0)
            {
                foreach (var errorMsg in ModelState.Values)
                {
                    if (errorMsg != null && errorMsg.Errors != null && errorMsg.Errors.Count > 0)
                    {

                        this._logger.Error(
                            $"Model Validation Error : {errorMsg.Errors.FirstOrDefault().ErrorMessage}");
                    }
                }
            }

            return isValid;
        }
    } 
}
