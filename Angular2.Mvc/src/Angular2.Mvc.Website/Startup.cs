using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Core.Class;
using Angular2.Mvc.DAL;
using Angular2.Mvc.DAL.Factory;
using Angular2.Mvc.DAL.Models.DAO;
using Angular2.Mvc.Service.Factory;
using Angular2.Mvc.Service.Service;
using JSNLog;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.CodeAnalysis;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NLog.Extensions.Logging;

namespace Angular2.Mvc.Website
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // Adds a default in-memory implementation of IDistributedCache
            services.AddDistributedMemoryCache();
            services.AddSession(o =>
            {
                o.IdleTimeout = TimeSpan.FromSeconds(10);
            });


            #region Authentication service
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<NgDbContext>()
                .AddDefaultTokenProviders();

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            #endregion

            #region AppSettings Configuration

            //Method 1.
            services.Configure<ConfigManager>(Configuration.GetSection("Config"));

            //Method 2.
            //ConfigProvider.SiteName = Configuration["Config:SiteName"];
            //ConfigProvider.SiteOwner = Configuration["Config:SiteOwner"];
            //Method 2. (Binding complex object)
            var configManager = new ConfigManager();
            Configuration.GetSection("Config").Bind(configManager);
            ConfigProvider.SiteName = configManager.SiteName;
            ConfigProvider.SiteOwner = configManager.SiteOwner;

            #endregion

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app,
            IHostingEnvironment env,
            ILoggerFactory loggerFactory)
        {
            #region NLog
            //add NLog to ASP.NET Core
            //loggerFactory.AddNLog();

            loggerFactory.WithFilter(new FilterLoggerSettings{
                    { "Microsoft", LogLevel.Warning },
                    { "System", LogLevel.None },
                    { "Default", LogLevel.Debug }
            }).AddNLog();


            //needed for non-NETSTANDARD platforms: configure nlog.config in your project root
            env.ConfigureNLog("NLog.config");

            #endregion

            #region JSNLog
            // Configure JSNLog
            var jsnlogConfiguration = new JsnlogConfiguration(); // See jsnlog.com/Documentation/Configuration
            app.UseJSNLog(new LoggingAdapter(loggerFactory), jsnlogConfiguration);
            #endregion


            #region Set database connection 
            var connStr = Configuration["Data:DefaultConnection:ConnectionString"];
            DbContextFactory.SetConnectionString(connStr);
            #endregion

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            #region Enable session
            app.UseSession();
            #endregion


            // Add static files to the request pipeline.
            app.UseStaticFiles();

            //Identity support
            app.UseIdentity();


            app.UseMvc(routes =>
            {

                routes.MapRoute(
                   name: "areaRoute",
                   template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
