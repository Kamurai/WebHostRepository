using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace MVC.Models
{
    public class Test
    {
        [Key]
        public string Indext { get; set; }
        public string Color { get; set; }
    }


    public class SQLServerConnectionString: DbContext
    {
        public DbSet<Test> Colors { get; set;}
    }

}