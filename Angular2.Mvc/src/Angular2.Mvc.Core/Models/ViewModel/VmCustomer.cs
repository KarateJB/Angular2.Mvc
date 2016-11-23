using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Mvc.Core.Models.ViewModel
{
    public class VmCustomer
    {
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        public string Phone { get; set; }
        public int Age { get; set; }
        public string Description { get; set; }
    }
}
