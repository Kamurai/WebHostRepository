/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Main;

import java.io.*;
import javax.faces.bean.ManagedBean;
import DataMethods.*;
import java.sql.Connection;
import java.sql.ResultSet;
import javax.faces.bean.SessionScoped;

/**
 *
 * @author Kamurai
 */
@ManagedBean(name="LoginBean")
@SessionScoped
public class LoginBean implements Serializable
{
    private Connection connect;
    private DbInfo dbi;
    
    private int userindex;
    private String username;
    private String password;
    private String correctUname;
    private String correctPword;
    String error;
    boolean LoggedIn;
    private int admin;
    
    private boolean boolWomen;
    private boolean boolMen;
    private boolean boolTransWomen;
    private boolean boolTransMen;
    
    private String strCelebrityToSuggest;
    private String strURLToSuggest;
    private String strSexToSuggest;
    
    private String strCelebrityToAdd;
    private String strURLToAdd;
    private String strSexToAdd;
    
    private String email;
    private String confirmPassword;
    
    
    public LoginBean()
    {
        connect = null;
        
        dbi = new DbInfo();

        userindex = -1;
        username = "";
        password = "";
        correctUname = "";
        correctPword = "";
        error = "";
        //db = new GeneralMethods();
        LoggedIn = false;
        admin = 0;
        
        boolWomen = false;
        boolMen = false;
        boolTransWomen = false;
        boolTransMen = false;
        
        strCelebrityToSuggest = "";
        strURLToSuggest = "";
        strSexToSuggest = "F";
        
        strCelebrityToAdd = "";
        strURLToAdd = "";
        strSexToAdd = "F";
        
        email = "";
        confirmPassword = "";
        
    }
    
    public String LogIn()
    {
        String Result = "Login";
        int rows = -1;
        
        try
        {
            //validate given username
                //open connection
            //connect = db.openConnection(dbi.getDriver(), dbi.getUrl(), dbi.getDbName(), dbi.getDbUsername(), dbi.getDbPassword());
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return Result;
        }
        
        if(connect == null)
        {
            return Result;
        }
        
        String sqlQuery = "select * from Users where Username = '" + username + "'";
        
        //ResultSet rs = db.executeStatement(connect, sqlQuery);
        ResultSet rs = dbi.executeStatement(sqlQuery);
        
        
        try
        {
            rs.next();
            rows = rs.getRow();
            
            //pull username and password
            userindex = rs.getInt("Indext");
            correctUname = rs.getString("Username");
            correctPword = rs.getString("Passcode");
            admin = rs.getInt("Access");
            
            boolWomen = rs.getBoolean("Women");
            boolMen = rs.getBoolean("Men");
            boolTransWomen = rs.getBoolean("TransWomen");
            boolTransMen = rs.getBoolean("TransMen");
            
            //close connection
            dbi.closeConnection();
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        
            return Result;
        }

        
        //if valid
        if(rows >= 0)
        {
            //compare Passcodes
                //if match
            if(password.compareTo(correctPword) != 0)
            {
                return Result;
            }
            
            //Update Username
            setOnline(username);        
        }
        //else
        else
        {    
            return Result;
        
        }
        
        Result = "index";
        
        return Result;
                
    }
    
    public String LogOut()
    {
        String Result = "Login";
        int rows = -1;
        
        //reset variables
        userindex = -1;
        username = "";
        password = "";
        correctUname = "";
        correctPword = "";
        error = "";
        //db = new GeneralMethods();
        admin = 0;
        
        boolWomen = false;
        boolMen = false;
        boolTransWomen = false;
        boolTransMen = false;
        
        //Update Username
        setOffline(username);
        
        return Result;
    }
    
    public String getUsername()
    {
        return username;
    }
    
    public void setUsername(String input)
    {
        username = input;
    }
    
    public String getPassword()
    {
        return password;
    }
    
    public void setPassword(String input)
    {
        password = input;
    }
    
    public String getError()
    {
        return error;
    }
    
    public void setError(String input)
    {
        error = input;
    }
    
    public boolean getLoggedIn()
    {
        return LoggedIn;
    }
    
    public void setLoggedIn(boolean input)
    {
        LoggedIn = input;
    }
            
    public void setOnline(String user)
    {
        String sqlQuery = "";
        
        //set local
        setLoggedIn(true);
        
        //open connection
        //connect = db.openConnection(driver, url, dbName, dbUsername, dbPassword);
        connect = dbi.openConnection();
        
        sqlQuery = "update Users set LoggedOn = 1 where Username = '" + user + "'";
        
        //db.executeStatement(connect, sqlQuery);
        dbi.executeStatement(sqlQuery);
        
        //close connection
        //db.closeConnection(connect);
        dbi.closeConnection(connect);
        
    }
    
    public void setOffline(String user)
    {
        String sqlQuery = "";
        
        //set local
        setLoggedIn(false);
        
        //open connection
        //connect = db.openConnection(driver, url, dbName, dbUsername, dbPassword);
        connect = dbi.openConnection();
        
        sqlQuery = "update Users set LoggedOn = 0 where Username = " + "'" + user + "'";
        
        //db.executeStatement(connect, sqlQuery);
        dbi.executeStatement(sqlQuery);
        
        //close connection
        //db.closeConnection(connect);
        dbi.closeConnection(connect);
        
    }
    
    public boolean getboolWomen()
    {
        return boolWomen;
    }
    
    public void setboolWomen(boolean input)
    {
        boolWomen = input;
    }
    
    public boolean getboolMen()
    {
        return boolMen;
    }
    
    public void setboolMen(boolean input)
    {
        boolMen = input;
    }
    
    public boolean getboolTransWomen()
    {
        return boolTransWomen;
    }
    
    public void setboolTransWomen(boolean input)
    {
        boolTransWomen = input;
    }
    
    public boolean getboolTransMen()
    {
        return boolTransMen;
    }
   
    public void setboolTransMen(boolean input)
    {
        boolTransMen = input;
    }
    
    public int getuserindex()
    {
        return userindex;
    }
   
    public void setuserindex(int input)
    {
        userindex = input;
    }
    
    public int getadmin()
    {
        return admin;
    }
   
    public void setadmin(int input)
    {
        admin = input;
    }
    
    public void UpdateOptions()
    {
        String sqlQuery = "";
        
        //if all are false
        if( !getboolWomen() && !getboolMen() && !getboolTransWomen() && !getboolTransMen())
        {
            //then set female to true
            setboolWomen(true);
        }
        
        //Update preferences to match check boxes (local variables)
        try
        {
            //validate given username
                //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            //return null;
        }
        
        sqlQuery = "UpdateOptions " + getuserindex() + ", " + getboolWomen() + ", " + getboolMen() + ", " + getboolTransWomen() + ", " + getboolTransMen() + ";";
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        
        dbi.closeConnection(connect);
    }
    
    public String getstrCelebrityToAdd()
    {
        return strCelebrityToAdd;
    }
    
    public String getstrSexToAdd()
    {
        return strSexToAdd;
    }
    
    public String getstrURLToAdd()
    {
        return strURLToAdd;
    }
    
    public String getEmail()
    {
        return email;
    }
    
    public String getconfirmPassword()
    {
        return confirmPassword;
    }
    
    public void setstrCelebrityToAdd(String input)
    {
        strCelebrityToAdd = input;
    }
    
    public void setstrSexToAdd(String input)
    {
        strSexToAdd = input;
    }
    
    public void setstrURLToAdd(String input)
    {
        strURLToAdd = input;
    }
    
    public void setEmail(String input)
    {
        email = input;
    }
    
    public void setconfirmPassword(String input)
    {
        confirmPassword = input;
    }
    
    public String getstrCelebrityToSuggest()
    {
        return strCelebrityToSuggest;
    }
    
    public String getstrSexToSuggest()
    {
        return strSexToSuggest;
    }
    
    public String getstrURLToSuggest()
    {
        return strURLToSuggest;
    }
    
    public void setstrCelebrityToSuggest(String input)
    {
        strCelebrityToSuggest = input;
    }
    
    public void setstrSexToSuggest(String input)
    {
        strSexToSuggest = input;
    }
    
    public void setstrURLToSuggest(String input)
    {
        strURLToSuggest = input;
    }
    
    public void AddCelebrity()
    {
        String sqlQuery = "";
        
        //Update preferences to match check boxes (local variables)
        try
        {
            //validate given username
                //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            //return null;
        }
        
        sqlQuery = "AddCelebrity '" + strCelebrityToAdd + "', '" + strSexToAdd + "', '" + strURLToAdd + "';";
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        
        dbi.closeConnection(connect);
        
        strCelebrityToAdd = "";
        strSexToAdd = "F";
        strURLToAdd = "";
    }
    
    public void AddCelebritySuggestion()
    {
        String sqlQuery = "";
        
        //Update preferences to match check boxes (local variables)
        try
        {
            //validate given username
                //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            //return null;
        }
        
        sqlQuery = "AddCelebritySuggestion '" + strCelebrityToSuggest + "', '" + strSexToSuggest + "', '" + strURLToSuggest + "';";
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        
        dbi.closeConnection(connect);
        
        strCelebrityToSuggest = "";
        strSexToSuggest = "F";
        strURLToSuggest = "";
    }
    
    public String SignUp()
    {
        String sqlQuery = "";
        String Result = "";
        
        if( password.compareTo(confirmPassword) == 0 )
        {
        
            //Update preferences to match check boxes (local variables)
            try
            {
                //validate given username
                    //open connection
                connect = dbi.openConnection();
            }
            catch(Exception ex)
            {
                //return null;
            }

            sqlQuery = "SignUp '" + username + "', '" + email + "', '" + password + "', '" + boolWomen + "', '" + boolMen + "', '" + boolTransWomen + "', '" + boolTransMen + "';";

            ResultSet rs = dbi.executeStatement(sqlQuery);

            dbi.closeConnection(connect);
            
            
            
            
            Result = "Login.xhtml";
        }
        else
        {
            //Return error for passwords not matching
            error = "Passwords do not match.";
            Result = "SignUp.xhtml";
        }
        
        
        return Result;
    }
    
    
}
