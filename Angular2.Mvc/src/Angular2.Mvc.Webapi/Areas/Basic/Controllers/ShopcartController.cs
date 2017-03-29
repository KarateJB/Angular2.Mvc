using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Models.DTO;
using Angular2.Mvc.DAL.Factory;
using Angular2.Mvc.DAL.Service;
using Angular2.Mvc.Service.Factory;
using Angular2.Mvc.Webapi.Controllers;
using Angular2.Mvc.Webapi.Utility;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NLog;

namespace Angular2.Mvc.Webapi.Areas.Basic.Controllers
{
    //[EnableCors("AllowSpecificOrigin")]
    [Route("api/Basic/[controller]")]
    public class ShopcartController : BaseController
    {
        // GET: api/values
        [HttpPost("GetDiscount")]
        [CustomExceptionFilter]
        [ProducesResponseType(typeof(DtoError), 500)] //Define the extra HttpStatusCode for Swagger
        public async Task<DtoShopItem> GetDiscount(DtoShopItem shopItem)
        {
            try
            {
                _logger.Debug($"{shopItem.Id}. {shopItem.Title}({shopItem.Count}) is added to Shopcart!");

                return shopItem;
            }
            catch (Exception ex)
            {
                var err = new DtoError
                {
                    StatusCode = 500,
                    ServerError = ex.Message,
                    ClientMsg = "Please try again..."
                };

                var errJson = JsonConvert.SerializeObject(err);
                byte[] data = System.Text.Encoding.UTF8.GetBytes(errJson);
                Response.ContentType = "application/json";
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                await Response.Body.WriteAsync(data, 0, data.Length);
                throw;
            }

        }
  
        // GET api/values/5
        [HttpGet("Get/{id}.{format?}")]
        [FormatFilter]
        [CustomExceptionFilter]
        public DtoCustomer Get(int id)
        {
            Angular2.Mvc.Core.Models.DTO.DtoCustomer rtn = null;
            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var cust = custService.Get(x => x.Id.Equals(id)).FirstOrDefault();
                if (cust != null)
                {
                    return DtoFactory.Create<Angular2.Mvc.DAL.Models.DAO.Customer, Angular2.Mvc.Core.Models.DTO.DtoCustomer>(cust);
                }
                else
                {
                    throw new Exception($"The customers with Id:{id.ToString()} is not exist!");
                }

            }
        }

        /// <summary>
        /// Create
        /// </summary>
        /// <param name="cust"></param>
        /// <returns></returns>
        [HttpPost("Create")]
        [CustomExceptionFilter]
        public async Task<HttpResponseMessage> Create([FromBody]DtoCustomer cust)
        {
            _logger.Debug("Web api : creating customer!");
            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var entity = DaoFactory.Create<Angular2.Mvc.Core.Models.DTO.DtoCustomer, Angular2.Mvc.DAL.Models.DAO.Customer>(cust);
                custService.Add(entity);
            }

            return new HttpResponseMessage(HttpStatusCode.Created);

        }

        /// <summary>
        /// Update
        /// </summary>
        /// <param name="cust"></param>
        /// <returns></returns>
        [HttpPut("Update")]
        [CustomExceptionFilter]
        public async Task<HttpResponseMessage> Update([FromBody]DtoCustomer cust)
        {
            using (var custService = new CustomerService(DbContextFactory.Create()))
            { 
                var entity = custService.Get(x => x.Id.Equals(cust.Id)).FirstOrDefault();
                if (entity != null)
                {
                    entity.Name = cust.Name;
                    entity.Age = cust.Age;
                    entity.Phone = cust.Phone;
                    entity.Description = cust.Description;
                    custService.Update(entity);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }

            return new HttpResponseMessage(HttpStatusCode.OK);

        }

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="cust"></param>
        /// <returns></returns>
        [HttpDelete("Remove/{id}")]
        [CustomExceptionFilter]
        public async Task<HttpResponseMessage> Remove(int id)
        {
            using (var custService = new CustomerService(DbContextFactory.Create()))
            {
                var entity = custService.Get(x => x.Id.Equals(id)).FirstOrDefault();
                if (entity != null)
                {
                    custService.Remove(entity);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }

            return new HttpResponseMessage(HttpStatusCode.OK);

        }
    }
}
