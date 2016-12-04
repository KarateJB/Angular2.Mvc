using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Service.Factory;
using Xunit;

namespace Angular2.Mvc.UnitTest
{
    public class UnitTestMapper
    {

        [Fact]
        public void TestCustomerMapping()
        {
            var cust = new Angular2.Mvc.DAL.Models.DAO.Customer()
            {
                Id = 10,
                Age = 35,
                Description = "Hello!!",
                Name = "JB",
                Phone = "0933XXXXXXX"
            };
            var actual = DtoFactory.Create<Angular2.Mvc.DAL.Models.DAO.Customer, Angular2.Mvc.Core.Models.DTO.DtoCustomer>(cust);

            Assert.True(cust.Id.Equals(actual.Id), $"Expected:{cust.Id}, Actual:{actual.Id}");
            Assert.True(cust.Name.Equals(actual.Name), $"Expected:{cust.Name}, Actual:{actual.Name}");
            Assert.True(cust.Phone.Equals(actual.Phone), $"Expected:{cust.Phone}, Actual:{actual.Phone}");
            Assert.True(cust.Age.Equals(actual.Age), $"Expected:{cust.Age}, Actual:{actual.Age}");
            Assert.True(cust.Description.Equals(actual.Description), $"Expected:{cust.Description}, Actual:{actual.Description}");
        }
    }

}
