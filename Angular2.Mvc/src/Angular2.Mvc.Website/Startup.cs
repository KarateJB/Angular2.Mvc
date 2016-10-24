using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JSNLog;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.CodeAnalysis;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NLog.Extensions.Logging;

namespace Angular2.Mvc.Website
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
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

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Add static files to the request pipeline.
            app.UseStaticFiles();


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
