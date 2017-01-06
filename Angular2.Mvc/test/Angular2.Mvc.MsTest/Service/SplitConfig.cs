using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace Angular2.Mvc.MsTest.Service
{
    public class SplitConfig : ISplitConfig
    {
        public char[] Separator { get; set; }

        public SplitConfig()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var configuration = builder.Build();

            var separator = configuration["Separator"];
            this.Separator = separator.ToCharArray();
        }
    }
}
