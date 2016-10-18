using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Angular2.Mvc.Webapi.Areas.Basic.Controllers
{
    [Route("api/Basic/[controller]")]
    public class CustomerController : Controller
    {
        private List<Customer> _customers = null;
        public CustomerController()
        {
            string json = @"
    [{ 'Id': 1,   'Name': '<b>JB</b>', 'Phone': '0933XXXXXX', 'Age': 35 },
        { 'Id': 2,'Name': '<b>Lily</b>', 'Phone': '0910XXXXXX', 'Age': 18 },
        { 'Id': 3,'Name': '<b>Leia</b>', 'Phone': 'N/A', 'Age': 3 },
        { 'Id': 4,'Name': '<b>Darth vader</b>', 'Phone': '02-1234567', 'Age': 28 },
        { 'Id': 5,'Name': '<b>Hachi</b>', 'Phone': 'N/A', 'Age': 6 },
        { 'Id': 6,'Name': '<b>Luke Skywalker</b>', 'Phone': '02-5678901', 'Age': 10 },
        { 'Id': 7,'Name': '<b>Anakin Skywalker</b>', 'Phone': '0988ZZZZZZ', 'Age': 13 },
        { 'Id': 8,'Name': '<b>Obi wan</b>', 'Phone': '0912YYYYYY', 'Age': 65 }]";


            this._customers = JsonConvert.DeserializeObject<List<Customer>>(json);
        }


        // GET: api/values
        [HttpGet("GetAll")]
        public IQueryable<Customer> GetAll()
        {
            return this._customers.AsQueryable();
        }

        // GET api/values/5
        [HttpGet("Get/{id}")]
        public Customer Get(int id)
        {
            return this._customers.Where(x => x.Id.Equals(id)).FirstOrDefault();
        }

        /// <summary>
        /// Create
        /// </summary>
        /// <param name="cust"></param>
        /// <returns></returns>
        [HttpPost("Create")]
        public async Task<HttpResponseMessage> Create(Customer cust)
        {
            this._customers.Add(cust);
            return new HttpResponseMessage(HttpStatusCode.Created);

        }

        /// <summary>
        /// Update
        /// </summary>
        /// <param name="cust"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<HttpResponseMessage> Put(Customer cust)
        {
            var entity = this._customers.Where(x => x.Id.Equals(cust.Id)).FirstOrDefault();
            if (entity != null)
            {
                entity.Name = cust.Name;
                entity.Age = cust.Age;
                entity.Phone = cust.Phone;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return new HttpResponseMessage(HttpStatusCode.Accepted);
            }

        }

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="cust"></param>
        /// <returns></returns>
        [HttpDelete("Delete")]
        public async Task<HttpResponseMessage> Delete(Customer cust)
        {
            var entity = this._customers.Where(x => x.Id.Equals(cust.Id)).FirstOrDefault();
            if (entity != null)
            {
                this._customers.Remove(entity);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
    }
}
