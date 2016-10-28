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
    public static class Configuration
    {
        private static Logger _logger = LogManager.GetCurrentClassLogger();
        private static  IConfigurationRoot _configuration = null;

        static Configuration()
        {
            _configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json").Build();
        }

        public static void Seed()
        {
            var connectionStr = _configuration["Data:DefaultConnection:ConnectionString"];
            _logger.Debug($"連線字串={connectionStr}");
            connectionStr = "Server=.;Database=JB;Trusted_Connection=True;MultipleActiveResultSets=true";
            var dbContext = DbContextFactory.Create(connectionStr);

#if (Seed)
            initCustomers(dbContext);
#endif
        }

        private static void initCustomers(NgDbContext dbContext)
        {
            dbContext.Customers.Add(new Customer { Name = "JB Lin", NameEn= "JB", Phone = "0933XXXXXX", Age = 35, Description = "JB is a good programmer :)" });
            dbContext.Customers.Add(new Customer { Name = "Lily Yang",NameEn="Lily", Phone = "0910YYYYYY", Age = 18, Description = "Lily is a mother." });
            dbContext.Customers.Add(new Customer { Name = "Leia Lin",NameEn="Leia",Phone = "-", Age = 3, Description = "A cute girl!" });
            dbContext.SaveChanges();
        }
    }
}
