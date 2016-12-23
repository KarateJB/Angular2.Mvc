using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Mvc.Service.Service
{
    /// <summary>
    /// SMS sender
    /// </summary>
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
