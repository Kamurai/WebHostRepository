using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using MVC.Models;

namespace MVC.Context
{
    public class SQLServerConnectionString : DbContext
    {
        public SQLServerConnectionString() : base("DefaultConnection")
        {

        }

        public DbSet<Test> Colors { get; set; }
    }
}