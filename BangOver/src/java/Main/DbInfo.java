/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author Kamurai
 */
public class DbInfo 
{
    private String driver;
    private String url;
    private String dbName;
    private String dbUsername;
    private String dbPassword;
    private Connection connect;
    
    public DbInfo()
    {
        driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
        //url = "jdbc:sqlserver://localhost:1433";
        url = "jdbc:sqlserver://localhost\\SQLSERVER";
        dbName = ";DatabaseName=BangOver";
        dbUsername = "SA";
        dbPassword = "yellow23";
        connect = null;
    }
    
    public String getDriver()
    {
        return driver;
    }
    
    public String getUrl()
    {
        return url;
    }
    
    public String getDbName()
    {
        return dbName;
    }
    
    public String getDbUsername()
    {
        return dbUsername;
    }
    
    public String getDbPassword()
    {
        return dbPassword;
    }
    
    public Connection getConnect()
    {
        return connect;
    }
    
    public Connection openConnection()
    {
        try
        {
            Class.forName(driver);
        }
        catch (ClassNotFoundException e)
        {
                System.out.println("Could not load the driver");
        }
        
        try
        {
            connect = DriverManager.getConnection((url+dbName), dbUsername, dbPassword);
        }
        catch(Exception lex)
        {
            lex.printStackTrace();
        }
        
        return connect;
    }
    
    public void closeConnection()
    {
        if(connect != null)
        {
            try
            {
               connect.close();
            }
            catch (Exception ex)
            {
                ex.printStackTrace();
            }
        }
    }
    
    public void closeConnection(Connection connect)
    {
        if(connect != null)
        {
            try
            {
               connect.close();
            }
            catch (Exception ex)
            {
                ex.printStackTrace();
            }
        }
    }
    
    public ResultSet executeStatement(String query)
    {
        ResultSet rs;
        
        try
        {
            Statement stmt = connect.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            rs = stmt.executeQuery(query);
        }
        catch( Exception ex )
        {
            ex.printStackTrace();
            return null;
        }
        return rs;
    }
    
    
}
