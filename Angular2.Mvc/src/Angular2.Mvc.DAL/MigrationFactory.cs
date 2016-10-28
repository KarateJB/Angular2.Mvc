using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.DAL.Migrations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Angular2.Mvc.DAL
{
    /// <summary>
    /// DbContext factory
    /// </summary>
    public class MigrationFactory : IDbContextFactory<NgDbContext>
    {
        public NgDbContext Create()
        {
            var builder = new DbContextOptionsBuilder<NgDbContext>();
            //builder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=pinchdb;Trusted_Connection=True;MultipleActiveResultSets=true");
            builder.UseSqlServer(Configuration.DEFAULT_CONNECT_STR);
            return new NgDbContext(builder.Options);
        }

        public NgDbContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<NgDbContext>();
            builder.UseSqlServer(Configuration.DEFAULT_CONNECT_STR);
            return new NgDbContext(builder.Options);
        }
    }
}
