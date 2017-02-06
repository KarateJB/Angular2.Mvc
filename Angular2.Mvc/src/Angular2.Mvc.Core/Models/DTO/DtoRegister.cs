using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Mvc.Core.Models.DTO
{
    /// <summary>
    /// Register DTO
    /// </summary>
    public class DtoRegister
    {
        [Required]
        [StringLength(300)]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        [StringLength(100)]
        public string Password { get; set; }
    }

}
