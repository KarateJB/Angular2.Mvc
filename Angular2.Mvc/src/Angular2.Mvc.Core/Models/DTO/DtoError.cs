using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Mvc.Core.Models.DTO
{
    public class DtoError
    {
        public int StatusCode { get; set; }
        public string ServerError { get; set; }
        public string ClientMsg { get; set; }
    }
}
