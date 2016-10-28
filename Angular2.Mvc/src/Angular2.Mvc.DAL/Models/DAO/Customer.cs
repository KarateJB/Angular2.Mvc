using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Mvc.DAL.Models.DAO
{
    /// <summary>
    /// Customer DAO
    /// </summary>
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [StringLength(100)]
        [Required]
        public string Name { get; set; }
        [StringLength(100)]
        public string NameEn { get; set; }
        [StringLength(100)]
        public string Phone { get; set; }
        public int Age { get; set; }
        [StringLength(200)]
        public string  Description { get; set; }
    }
}
