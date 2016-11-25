using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.DAL.Factory;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using NLog.Extensions.Logging;

namespace Angular2.Mvc.Webapi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            //services.AddMvc();
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
                options.SerializerSettings.Formatting = Formatting.None; //or Formatting.Indented for readability;
            });


            //Enable CORS
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => 
                     builder.WithOrigins("http://localhost:4240") //or builder.AllowAnyOrigin()
                    .WithMethods("HEAD", "GET", "POST", "PUT", "DELETE") //Or AllowAnyMethod()
                    );
            });

            //Enable CORS for every MVC actions
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("AllowSpecificOrigin"));
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            //loggerFactory.AddDebug();

            #region NLog
            //add NLog to ASP.NET Core
            loggerFactory.WithFilter(new FilterLoggerSettings{
                    { "Microsoft", LogLevel.Warning },
                    { "System", LogLevel.None },
                    { "Default", LogLevel.Debug }
            }).AddNLog();
            //needed for non-NETSTANDARD platforms: configure nlog.config in your project root
            env.ConfigureNLog("NLog.config");
            //LogLevel.None;
            loggerFactory.AddDebug(LogLevel.None);

            #endregion


            #region Set database connection 
            var connStr = Configuration["Data:DefaultConnection:ConnectionString"];
            DbContextFactory.SetConnectionString(connStr);
            #endregion

            app.UseMvc();

            app.UseCors("AllowSpecificOrigin");
        }
    }
}
