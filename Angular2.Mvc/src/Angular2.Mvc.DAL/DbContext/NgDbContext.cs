﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.DAL.Models.DAO;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace Angular2.Mvc.DAL
{
    /// <summary>
    /// DbContext for entity framework
    /// </summary>
    public class NgDbContext : IdentityDbContext<ApplicationUser>
    {
        public NgDbContext(DbContextOptions options) : base(options) 
        {

        }

        public NgDbContext(DbContextOptions<NgDbContext> options)
            : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

    }
}
