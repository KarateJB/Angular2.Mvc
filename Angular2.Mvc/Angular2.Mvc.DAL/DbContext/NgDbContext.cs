using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.DAL.Models.DAO;
using Microsoft.EntityFrameworkCore;

namespace Angular2.Mvc.DAL
{
    /// <summary>
    /// DbContext for entity framework
    /// </summary>
    public class NgDbContext : DbContext
    {
        public NgDbContext(DbContextOptions options) : base(options) 
        {

        }
        public DbSet<Customer> Customers { get; set; }
    }
}
