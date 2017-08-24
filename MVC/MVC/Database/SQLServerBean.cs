using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using MVC.Database;

namespace MVC.Database
{
    public class SQLServerBean
    {
        private String DataSource = "Data Source=localhost\\SQLSERVER;";
        private String dbName = "database=Test;";
        private String dbUsername = "User id=SA;";
        private String dbPassword = "Password=yellow23;";
        private String connectionString = "";
    
        public SQLServerBean()
        {
            DataSource = "Data Source=localhost\\SQLSERVER;";
            dbName = "database=Test;";
            dbUsername = "User id=SA;";
            dbPassword = "Password=yellow23;";
        
            connectionString = DataSource + dbName + dbUsername + dbPassword;
        }

        public String GetColorByIndext(String Indext)
        {
            List<List<String>> result = new List<List<String>>();
            result.Add(new List<String>());
            result.Add(new List<String>());
            int tracker = 0;
            string test = "test";

            try
            {
                 SqlConnection thisConnection = new SqlConnection("@" + connectionString);
                thisConnection.Open();
                 SqlCommand thisCommand = thisConnection.CreateCommand();
                 thisCommand.CommandText = "SELECT Indext, Color FROM Test where Indext = '"+Indext+"'";
                 SqlDataReader thisReader = thisCommand.ExecuteReader();
                 while (thisReader.Read())
                 {
                    //Console.WriteLine("\t{0}\t{1}", thisReader["Indext"], thisReader["Color"]);

                     test = thisReader["Indext"].ToString();
                     result[0].Add(test);

                     test = thisReader["Color"].ToString();
                     result[1].Add(test);
                     tracker++;
                 }
                 thisReader.Close();
                 thisConnection.Close();
             }
             catch (SqlException e)
             {
                Console.WriteLine(e.Message);
             }

            return result[Int32.Parse(Indext)][1];
        }
    }

}