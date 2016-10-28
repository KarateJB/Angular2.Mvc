#define Seed
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.DAL.Factory;
using Angular2.Mvc.DAL.Models.DAO;
using Microsoft.Extensions.Configuration;
using NLog;

namespace Angular2.Mvc.DAL.Migrations
{
    public class Configuration
    {
        //Connection string for code first
        public static string DEFAULT_CONNECT_STR = "Server=.;Database=JB;Trusted_Connection=True;MultipleActiveResultSets=true";

        public void Seed()
        {
            var dbContext = DbContextFactory.Create(DEFAULT_CONNECT_STR);

#if (Seed)
            this.initCustomers(dbContext);
#endif
        }

        private void initCustomers(NgDbContext dbContext)
        {
            dbContext.Customers.Add(new Customer { Name = "JB Lin",  Phone = "0933XXXXXX", Age = 35, Description = "JB is a good programmer :)" });
            dbContext.Customers.Add(new Customer { Name = "Lily Yang", Phone = "0910YYYYYY", Age = 18, Description = "Lily is a mother." });
            dbContext.Customers.Add(new Customer { Name = "Leia Lin",Phone = "-", Age = 3, Description = "A cute girl!" });
            dbContext.SaveChanges();
        }
    }
}
