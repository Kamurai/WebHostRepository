using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using MVC.Models;
using MVC.Interfaces;
using System.Data.Entity;

namespace MVC.Repositories
{
    public class ColorRepository : IColorRepository
    {
        private SQLServerConnectionString context;
        private DbSet<Test> table = null;
        

        public ColorRepository(SQLServerConnectionString context)
        {
            this.context = context;
        }
        
        public IEnumerable<Test> GetColors()
        {
            return context.Colors.ToList();
        }

        public String GetColorByIndext(String Indext)
        {
            String result = "Butts";
            result = context.Colors.Find(Indext).Color;

            return result;
        }

        public string GetColorByQuery(String Indext)
        {
            string sql = "SELECT * FROM Tests where Indext = '" + Indext + "'";
             return context.Database.ExecuteSqlCommand(sql, 1).ToString();
        }

    }
}