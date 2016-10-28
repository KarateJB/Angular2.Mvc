using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Angular2.Mvc.DAL.Factory
{
    /// <summary>
    /// DbContext factory
    /// </summary>
    public static class DbContextFactory //: IDbContextFactory<DefaultDbContext>
    {
        public static string ConnectionString { get; set; }

        public static void SetConnectionString(string connStr)
        {
            ConnectionString = connStr;
        }

        public static NgDbContext Create(string newConnectionStr = "")
        {
            var finalConnStr = string.Empty;
            if (string.IsNullOrEmpty(newConnectionStr))
                finalConnStr = ConnectionString;
            else
                finalConnStr = newConnectionStr;

            if (!string.IsNullOrEmpty(finalConnStr))
            {
                var optionsBuilder = new DbContextOptionsBuilder<NgDbContext>();
                optionsBuilder.UseSqlServer(finalConnStr);
                return new NgDbContext(optionsBuilder.Options);
            }
            else
            {
                throw new ArgumentNullException("ConnectionString");
            }
        }
    }
}
