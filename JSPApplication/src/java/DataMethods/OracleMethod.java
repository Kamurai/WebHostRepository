/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package DataMethods;

import java.sql.*;
import java.sql.ResultSet;


/**
 *
 * @author Kamurai
 */
public class OracleMethod
{
    private String driver;
    private String url;
    private String dbName;
    private String dbUsername;
    private String dbPassword;
    private Connection connect;

    private GeneralMethods Method;

    /** Creates a new instance of DataBean */
    public OracleMethod()
    {
        driver = "oracle.jdbc.driver.OracleDriver";
        url = "jdbc:oracle:thin:@localhost:1521:xe";
        dbName = "Test";
        dbUsername = "kamurai";
        dbPassword = "bluezer0";
        connect = null;

        Method = new GeneralMethods();
    }
    
    public String getColorData(String rowID, int col)
    {
        //connect = Method.openConnection(driver, url, dbName, dbUsername, dbPassword);
        connect = Method.openConnection(driver, url, "", dbUsername, dbPassword);
        
        if(connect == null)
        {
            return "SQL Error";
        }
        
        ResultSet rs;
        String sqlStatement = "Select ";
        String result = "";
        
        if(col <= 0)
        {
            sqlStatement += "indext ";
        }
        else
        {
            sqlStatement += "color ";
        }

        sqlStatement += "from test where ";        
        
        if(col <= 0)
        {
            sqlStatement += "indext ";
        }
        else
        {
            sqlStatement += "color ";
        }

        sqlStatement += "= '" + rowID + "'";
        
        try
        {
            rs = Method.executeStatement(connect, sqlStatement);
            
            rs.next();

            if(col <= 0)
            {
                result = rs.getString(1);
            }
            else
            {
                result = rs.getString(1);
            }
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
        }
        
        Method.closeConnection(connect);
        
        return result;
    }
}
