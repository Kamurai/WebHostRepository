﻿using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace MVC.Models
{
    using System;
    using System.Collections.Generic;

    public partial class PostgreSQLTest
    {
        [Key]
        public int Indext { get; set; }
        public string Color { get; set; }
    }
}
