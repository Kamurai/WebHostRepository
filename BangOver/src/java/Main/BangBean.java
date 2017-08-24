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
import javax.faces.bean.RequestScoped;
import javax.faces.bean.ViewScoped;
import java.util.ArrayList;
import java.util.Calendar;
import javax.faces.bean.SessionScoped;
/**
 *
 * @author Kamurai
 */
@ManagedBean(name="BangBean")
@ViewScoped
public class BangBean implements Serializable
{
    private Connection connect;
    private DbInfo dbi;
    
    String error;
    
    private String Advert1;
    private String Advert2;
    
    private String CelebrityURL1;
    private String CelebrityURL2;
    
    private String CelebrityName1;
    private String CelebrityName2;
    
    private ArrayList<ArrayList<String>> gl = new ArrayList<ArrayList<String>>();
    private ArrayList<ArrayList<String>> gc = new ArrayList<ArrayList<String>>();
    private ArrayList<ArrayList<String>> pl = new ArrayList<ArrayList<String>>();
    private ArrayList<ArrayList<String>> ul = new ArrayList<ArrayList<String>>();
    private ArrayList<ArrayList<String>> uc = new ArrayList<ArrayList<String>>();
    
    private String path;
    private String folder;
    private String advertfolder;
    
    public BangBean()
    {
        connect = null;
        
        dbi = new DbInfo();

        error = "";
        
        Advert1 = new String();
        Advert2 = new String();
        
        CelebrityURL1 = new String();
        CelebrityURL2 = new String();
        
        CelebrityName1 = new String();
        CelebrityName2 = new String();
        
        gl = new ArrayList<ArrayList<String>>();
        gc = new ArrayList<ArrayList<String>>();
        pl = new ArrayList<ArrayList<String>>();
        ul = new ArrayList<ArrayList<String>>();
        uc = new ArrayList<ArrayList<String>>();
        
        path = "http://htkb.dyndns.org/downloads/Over/BangOver/";
        folder = "Celebrities/";
        advertfolder = "Adverts/";
    }
    
    //Swap Positions
    public String SwapPositions(int intUserIndex, String strCelebrity1, String strCelebrity2)
    {
        String Result = "index";
        String sqlQuery = "";
        
        //Swap and or add Celebrities to Personal list
        sqlQuery += "DECLARE @intUserIndex int = " + intUserIndex + ";\n";
        sqlQuery += "DECLARE @strCelebrity1 VARCHAR(MAX) = '" + strCelebrity1 + "';\n";
        sqlQuery += "DECLARE @strCelebrity2 VARCHAR(MAX) = '" + strCelebrity2 + "';\n";

        sqlQuery += "DECLARE @strUserIndex int = " + intUserIndex + ";\n";
        //Swap and or add Celebrities to Personal list
        sqlQuery += "DECLARE @intCelebrityCount int = 0;\n";
        sqlQuery += "DECLARE @intCelebrityIndex1 int = -2;\n"; //Higher rank, lower number, at end
        sqlQuery += "DECLARE @intCelebrityIndex2 int = -2;\n";

        sqlQuery += "set @intCelebrityCount = (select count(*) from Celebrities, BangOverLists where Celebrities.Indext = BangOverLists.CelebrityIndex and BangOverLists.UserIndex = @intUserIndex and (Name = @strCelebrity1 or Name = @strCelebrity2));\n";
        sqlQuery += "set @intCelebrityIndex1 = (select top 1 Indext from Celebrities where Name = @strCelebrity1);\n";
        sqlQuery += "set @intCelebrityIndex2 = (select top 1 Indext from Celebrities where Name = @strCelebrity2);\n";

        //if Neither Celebrity is already in the personal list
        sqlQuery += "if( @intCelebrityCount = 0)\n";
        sqlQuery += "BEGIN\n";
            //add to table at OrderRank 0 and 1
            sqlQuery += "insert into BangOverLists (UserIndex, OrderRank, CelebrityIndex) VALUES (@intUserIndex,  0, @intCelebrityIndex1);\n";
            sqlQuery += "insert into BangOverLists (UserIndex, OrderRank, CelebrityIndex) VALUES (@intUserIndex,  1, @intCelebrityIndex2);\n";
        sqlQuery += "END\n";
        sqlQuery += "ELSE\n";
        //else if One Celebrity is already in the personal list
        sqlQuery += "if( @intCelebrityCount = 1 )\n";
        sqlQuery += "BEGIN\n";
                //if one celebrity is first on the list
                sqlQuery += "if( (select top 1 OrderRank from BangOverLists where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex1 or CelebrityIndex = @intCelebrityIndex2 ) = 0 )\n";
                sqlQuery += "BEGIN\n";
                        //if first celebrity is ordered first
                        sqlQuery += "if( (select count(Indext) from BangOverLists where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex1 and OrderRank = 0)  > 0)\n";
                        sqlQuery += "BEGIN\n";
                                //Add the second celebrity to table at -1 OrderRank
                                sqlQuery += "insert into BangOverLists (UserIndex, OrderRank, CelebrityIndex) VALUES (@intUserIndex, -1, @intCelebrityIndex2);\n";
                        sqlQuery += "END\n";
                        //if second celebrity is ordered first
                        sqlQuery += "if( (select count(Indext) from BangOverLists where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex2 and OrderRank = 0)  > 0)\n";
                        sqlQuery += "BEGIN\n";
                                //Add the first celebrity to table at -1 OrderRank
                                sqlQuery += "insert into BangOverLists (UserIndex, OrderRank, CelebrityIndex) VALUES (@intUserIndex, -1, @intCelebrityIndex1);\n";
                        sqlQuery += "END\n";

                        //Increment all celebrities on the list by 1
                        sqlQuery += "update BangOverLists set OrderRank = OrderRank + 1 where UserIndex = @intUserIndex;\n";
                sqlQuery += "END\n";
                sqlQuery += "ELSE\n";
                //else one celebrity is last on the list
                sqlQuery += "BEGIN\n";
                        sqlQuery += "DECLARE @intOrderCount int = 0;\n";
                        sqlQuery += "SET @intOrderCount = (select count(Indext) from BangOverLists where UserIndex = @intUserIndex);\n";
                        //if first celebrity is ordered last (at count)-1
                        sqlQuery += "if( (select count(Indext) from BangOverLists where CelebrityIndex = @intCelebrityIndex1 and OrderRank = @intOrderCount-1 ) > 0)\n";
                        sqlQuery += "BEGIN\n";
                                //Add the second celebrity to table at (count) OrderRank
                                sqlQuery += "insert into BangOverLists (UserIndex, OrderRank, CelebrityIndex) VALUES (@intUserIndex, @intOrderCount, @intCelebrityIndex2);\n";
                        sqlQuery += "END\n";
                        //if second celebrity is ordered last (at count)-1
                        sqlQuery += "if( (select count(Indext) from BangOverLists where CelebrityIndex = @intCelebrityIndex2 and OrderRank = @intOrderCount-1 ) > 0)\n";
                        sqlQuery += "BEGIN\n";
                                //Add the first celebrity to table at (count) OrderRank
                                sqlQuery += "insert into BangOverLists (UserIndex, OrderRank, CelebrityIndex) VALUES (@intUserIndex, @intOrderCount, @intCelebrityIndex1);\n";
                        sqlQuery += "END\n";
                sqlQuery += "END\n";
        sqlQuery += "END\n";

        //Set variable for swapping
        sqlQuery += "DECLARE @boolSwapped bit;\n";
        sqlQuery += "SET @boolSwapped = 0;\n";

        //Both Celebrities are NOW in the personal list
          //Celebrities should also be adjacent
        sqlQuery += "if( (select top 1 OrderRank from BangOverLists where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex1) > (select top 1 OrderRank from BangOverLists where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex2) )\n";
        
        sqlQuery += "BEGIN\n";
                //Swap the orderranks on the two celebrities
                        //Lower the number on the first and lock down
                sqlQuery += "update BangOverLists set OrderRank = OrderRank-1, UpLock = 0, DownLock = 1 where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex1;\n";
                        //Raise the number of the second and lock up
                sqlQuery += "update BangOverLists set OrderRank = OrderRank+1, UpLock = 1, DownLock = 0 where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex2;\n";
                sqlQuery += "SET @boolSwapped = 1;\n";

        sqlQuery += "END\n";
        sqlQuery += "ELSE\n";
        sqlQuery += "BEGIN\n";
                //DON'T Swap the orderranks on the two celebrities: already in correct order
                //update BangOverLists set OrderRank = OrderRank-1 where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex1;
                //update BangOverLists set OrderRank = OrderRank+1 where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex2;
                        //Only lock down
                sqlQuery += "update BangOverLists set DownLock = 1 where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex1;\n";
                        //Only lock up
                sqlQuery += "update BangOverLists set UpLock = 1 where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex2;\n";
        sqlQuery += "END\n";


        //Clear adjacent locks
                //Get Orders of swapped Celebrities
        sqlQuery += "DECLARE @intCelebrityOrder1 int = -2;\n";
        sqlQuery += "DECLARE @intCelebrityOrder2 int = -2;\n";
        sqlQuery += "DECLARE @intCelebrityTotal int = 0;\n";

        sqlQuery += "SET @intCelebrityOrder1 = (select top 1 OrderRank from BangOverLists where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex1);\n";
        sqlQuery += "SET @intCelebrityOrder2 = (select top 1 OrderRank from BangOverLists where UserIndex = @intUserIndex and CelebrityIndex = @intCelebrityIndex2);\n";
        sqlQuery += "SET @intCelebrityTotal = (select count(Indext) from BangOverLists where UserIndex = @intUserIndex);\n";

        //if celebrities were swapped
        sqlQuery += "if( @boolSwapped = 1)\n";
        //Clear adjacent locks
        sqlQuery += "BEGIN\n";
                //if Celebrity1's OrderRank is > 0
                sqlQuery += "if( @intCelebrityOrder1 > 0 )\n";
                sqlQuery += "BEGIN\n";
                        //set DownLock to 0 on record with -1 order
                        sqlQuery += "update BangOverLists set DownLock = 0 where UserIndex = @intUserIndex and (OrderRank = @intCelebrityOrder1-1 or OrderRank = @intCelebrityOrder2);\n";
                sqlQuery += "END\n";
                //if Celebrity2's OrderRank is < Count
                sqlQuery += "if( @intCelebrityOrder2 < (@intCelebrityTotal) )\n";
                sqlQuery += "BEGIN\n";
                        //set UpLock to 0 on record with +1 order
                        sqlQuery += "update BangOverLists set UpLock = 0 where UserIndex = @intUserIndex and (OrderRank = @intCelebrityOrder2+1 or OrderRank = @intCelebrityOrder1);\n";
                sqlQuery += "END\n";
        sqlQuery += "END\n";
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        
        return Result;
        
    }
    
    //set User List
    public void setUserList()
    {
        ul = PullUserList();
    }
    
    //set User Counts
    public void setUserCounts()
    {
        uc = PullUserCounts();
    }
    
    //set Global Counts
    public void setGlobalCounts()
    {
        gc = PullGlobalCounts();
    }
    
    //set Global List
    public void setGlobalList(Boolean boolWomen, Boolean boolMen, Boolean boolTransWomen, Boolean boolTransMen)
    {
        gl = PullGlobalList(boolWomen, boolMen, boolTransWomen, boolTransMen);
    }
    
    //set Global List
    public void setGlobalList(LoginBean userBean)
    {
        gl = PullGlobalList(userBean.getboolWomen(), userBean.getboolMen(), userBean.getboolTransWomen(), userBean.getboolTransMen());
    }
    
    //set Personal List
    public void setPersonalList(int userIndex, Boolean boolWomen, Boolean boolMen, Boolean boolTransWomen, Boolean boolTransMen)
    {
        pl = PullPersonalList(userIndex, boolWomen, boolMen, boolTransWomen, boolTransMen);
    }
    
    //set Personal List
    public void setPersonalList(LoginBean userBean)
    {
        pl = PullPersonalList(userBean.getuserindex(), userBean.getboolWomen(), userBean.getboolMen(), userBean.getboolTransWomen(), userBean.getboolTransMen());
    }
    
    //Pull Global List
    public ArrayList<ArrayList<String>> PullGlobalList(Boolean boolWomen, Boolean boolMen, Boolean boolTransWomen, Boolean boolTransMen)
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        String sqlQuery = "select * from Celebrities";
        String strOr = " or ";
        String strWhere = " where ";
        String strFemale =  " sex = 'F'";
        String strMale =  " sex = 'M'";
        String strTransWoman =  " sex = 'W'";
        String strTransMan =  " sex = 'T'";
        String strSemiColon = ";";
        
        
        //if not all
        if(!(boolWomen && boolMen && boolTransWomen && boolTransMen))
        {
            //add where
            sqlQuery += strWhere;
            //if female
            if(boolWomen)
            {
                //add female
                sqlQuery += strFemale;
            }
            //if or is true
            if(boolWomen && boolMen)
            {
                //add or
                sqlQuery += strOr;
            }
            //if male
            if(boolMen)
            {
                //add male
                sqlQuery += strMale;
            }
            //if or is false
            if( (boolWomen || boolMen) && boolTransWomen )
            {
                //add or
                sqlQuery += strOr;
            }
            //if transwoman
            if(boolTransWomen)
            {
                //add transwoman
                sqlQuery += strTransWoman;
            }
            //if or is false
            if( (boolWomen || boolMen || boolTransWomen) && boolTransMen )
            {
                //add or
                sqlQuery += strOr;
            }
            //if transman
            if(boolTransMen)
            {
                //add transman
                sqlQuery += strTransMan;
            }
        }
        
        //add semi colon
        sqlQuery += strSemiColon;
        
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            while(rs.next())
            {
                Sub.add(rs.getString("NAME"));
                Sub.add(rs.getString("Picture"));
                
                ResultList.add(new ArrayList<String>(Sub));
                Sub.clear();
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return ResultList;
    }
    
    //Pull Personal List
    public ArrayList<ArrayList<String>> PullPersonalList(int intUserIndex, Boolean boolWomen, Boolean boolMen, Boolean boolTransWomen, Boolean boolTransMen)
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        //join BangOverList, and Celebrities based on current user
        String sqlQuery = "select * from Celebrities, BangOverLists";
        String strOr = " or ";
        String strWhere = " where ";
        
        //add where
            sqlQuery += strWhere;
        sqlQuery += " BangOverLists.UserIndex = " + intUserIndex + " and BangOverLists.CelebrityIndex = Celebrities.Indext";    
        
        String strFemale =  " sex = 'F'";
        String strMale =  " sex = 'M'";
        String strTransWoman =  " sex = 'W'";
        String strTransMan =  " sex = 'T'";
        String strSemiColon = ";";
        Boolean boolOr = false;

        
        //if not all
        if(!(boolWomen && boolMen && boolTransWomen && boolTransMen))
        {
            sqlQuery += " and (";
            //if female
            if(boolWomen)
            {
                //add female
                sqlQuery += strFemale;
            }
            //if or is true
            if(boolWomen && boolMen)
            {
                //add or
                sqlQuery += strOr;
            }
            //if male
            if(boolMen)
            {
                //add male
                sqlQuery += strMale;
            }
            //if or is false
            if( (boolWomen || boolMen) && boolTransWomen )
            {
                //add or
                sqlQuery += strOr;
            }
            //if transwoman
            if(boolTransWomen)
            {
                //add transwoman
                sqlQuery += strTransWoman;
            }
            //if or is false
            if( (boolWomen || boolMen || boolTransWomen) && boolTransMen )
            {
                //add or
                sqlQuery += strOr;
            }
            //if transman
            if(boolTransMen)
            {
                //add transman
                sqlQuery += strTransMan;
            }
            sqlQuery += " )";
            
        }
        
        //sort by Order Ranking
        sqlQuery += " order by OrderRank";
        
        //add semi colon
        sqlQuery += strSemiColon;
        
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            
            while(rs.next())
            {
                Sub.add(rs.getString("NAME"));
                Sub.add(rs.getString("Picture"));
                Sub.add(rs.getString("OrderRank"));
                
                ResultList.add(new ArrayList<String>(Sub));
                Sub.clear();
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return ResultList;
    }
    
    //Pull User List
    public ArrayList<ArrayList<String>> PullUserList()
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        String sqlQuery = "select * from Users;";
        
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            while(rs.next())
            {
                Sub.add(rs.getString("Username"));
                Sub.add(rs.getString("Email"));
                Sub.add(Integer.toString(rs.getInt("Access")));
                Sub.add(Integer.toString(rs.getInt("Women")));
                Sub.add(Integer.toString(rs.getInt("Men")));
                Sub.add(Integer.toString(rs.getInt("TransWomen")));
                Sub.add(Integer.toString(rs.getInt("TransMen")));
                Sub.add(Integer.toString(rs.getInt("LoggedOn")));
                
                ResultList.add(new ArrayList<String>(Sub));
                Sub.clear();
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return ResultList;
    }
    
    //Pull User Counts
    public ArrayList<ArrayList<String>> PullUserCounts()
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        String sqlQuery = "select count(Access) as retNum from Users where Access = 0 ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Access) from Users where Access = 1 ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Access) from Users where Access = 2 ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Women) from Users where Women = 1 ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Men) from Users where Men = 1 ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(TransWomen) from Users where TransWomen = 1 ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(TransMen) from Users where TransMen = 1 ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(LoggedOn) from Users where LoggedOn = 1;";
        
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            while(rs.next())
            {
                Sub.add(Integer.toString(rs.getInt("Retnum")));
                
                ResultList.add(new ArrayList<String>(Sub));
                Sub.clear();
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return ResultList;
    }
    
    public ArrayList<ArrayList<String>> PullGlobalCounts()
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        String sqlQuery = "select count(Indext) as retNum from celebrities ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Sex) from celebrities where Sex = 'F' ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Sex) from celebrities where  Sex = 'M' ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Sex) from celebrities where  Sex = 'W' ";
        sqlQuery += "UNION all ";
        sqlQuery += "select count(Sex) from celebrities where  Sex = 'T';";
        
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            while(rs.next())
            {
                Sub.add(Integer.toString(rs.getInt("Retnum")));
                
                ResultList.add(new ArrayList<String>(Sub));
                Sub.clear();
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return ResultList;
    }
    
    //Pull Random Celebrity from Personal
    public ArrayList<ArrayList<String>> PullCelebritySinglePersonal(int intUserIndex, Boolean boolWomen, Boolean boolMen, Boolean boolTransWomen, Boolean boolTransMen)
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        //join BangOverList, and Celebrities based on current user
        //String sqlQuery = "select * from Celebrities, BangOverLists";
        String sqlQuery = "select top 1 * from Celebrities, BangOverLists:"; 
        
        String strOr = " or ";
        String strWhere = " where ";
        
        //add where
            sqlQuery += strWhere;
        sqlQuery += " BangOverLists.UserIndex = " + intUserIndex + " and BangOverLists.CelebrityIndex = Celebrities.Indext";    
        
        String strFemale =  " sex = 'F'";
        String strMale =  " sex = 'M'";
        String strTransWoman =  " sex = 'W'";
        String strTransMan =  " sex = 'T'";
        String strSemiColon = ";";
        Boolean boolOr = false;

        
        //if not all
        if(!(boolWomen && boolMen && boolTransWomen && boolTransMen))
        {
            sqlQuery += " and ";
            
            //if female
            if(boolWomen)
            {
                //add female
                sqlQuery += strFemale;
                //set or
                boolOr = true;
            }
            //if or is true
            if(boolOr)
            {
                //add or
                sqlQuery += strOr;
            }
            //if male
            if(boolMen)
            {
                //add male
                sqlQuery += strMale;
                //set or
                boolOr = true;
            }
            //if or is false
            if(boolOr)
            {
                //add or
                sqlQuery += strOr;
            }
            //if transwoman
            if(boolTransWomen)
            {
                //add transwoman
                sqlQuery += strTransWoman;
                //set or
                boolOr = true;
            }
            //if or is false
            if(boolOr)
            {
                //add or
                sqlQuery += strOr;
            }
            //if transman
            if(boolTransMen)
            {
                //add transman
                sqlQuery += strTransMan;
                //set or
                boolOr = true;
            }
        }
        
        
        //add order by
        sqlQuery = "order by newid()";
        
        //add semi colon
        sqlQuery += strSemiColon;
        
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            
            while(rs.next())
            {
                Sub.add(rs.getString("NAME"));
                Sub.add(rs.getString("Picture"));
                
                ResultList.add(new ArrayList<String>(Sub));
                Sub.clear();
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return ResultList;
    }
    
    //Pull Random Celebrity from Global
    public ArrayList<ArrayList<String>> PullCelebritySingleGlobal(Boolean boolWomen, Boolean boolMen, Boolean boolTransWomen, Boolean boolTransMen)
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        //String sqlQuery = "select * from Celebrities";
        String sqlQuery = "select top 1 * from Celebrities ";
        
                
        String strOr = " or ";
        String strWhere = " where ";
        String strFemale =  " sex = 'F'";
        String strMale =  " sex = 'M'";
        String strTransWoman =  " sex = 'W'";
        String strTransMan =  " sex = 'T'";
        String strSemiColon = ";";
        Boolean boolOr = false;

        
        //if not all
        if(!(boolWomen && boolMen && boolTransWomen && boolTransMen))
        {
            //add where
            sqlQuery += strWhere;
            //if female
            if(boolWomen)
            {
                //add female
                sqlQuery += strFemale;
                //set or
                boolOr = true;
            }
            //if or is true
            if(boolOr)
            {
                //add or
                sqlQuery += strOr;
            }
            //if male
            if(boolMen)
            {
                //add male
                sqlQuery += strMale;
                //set or
                boolOr = true;
            }
            //if or is false
            if(boolOr)
            {
                //add or
                sqlQuery += strOr;
            }
            //if transwoman
            if(boolTransWomen)
            {
                //add transwoman
                sqlQuery += strTransWoman;
                //set or
                boolOr = true;
            }
            //if or is false
            if(boolOr)
            {
                //add or
                sqlQuery += strOr;
            }
            //if transman
            if(boolTransMen)
            {
                //add transman
                sqlQuery += strTransMan;
                //set or
                boolOr = true;
            }
        }
        
        //add order by
        sqlQuery += "order by newid()";
        
        //add semi colon
        sqlQuery += strSemiColon;
        
        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            
            while(rs.next())
            {
                Sub.add(rs.getString("NAME"));
                Sub.add(rs.getString("Picture"));
                
                ResultList.add(new ArrayList<String>(Sub));
                Sub.clear();
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return ResultList;
    }
     
    //Pull Random Celebrity Pair: Pull 1 from Personal, plus adjacent (non-lock) or global if at ends
    public ArrayList<ArrayList<String>> PullCelebrityPair(String strUserIndex)
    {
        ArrayList<String> ResultList = new ArrayList<String>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        //ArrayList<String> PairList = new ArrayList<String>();
        ArrayList<ArrayList<String>> PairList = new ArrayList<ArrayList<String>>();
        String sqlQuery = "";
        sqlQuery += "DECLARE @strUserIndex int = " + strUserIndex + ";\n";
        sqlQuery += "DECLARE @UserCount int = 0;\n";
        sqlQuery += "DECLARE @OrderCount int = 0;\n";
        sqlQuery += "DECLARE @TargetIndex int = 0;\n";
        sqlQuery += "DECLARE @SavedOrder int = 0;\n";

        //request count of records related to user
        sqlQuery += "SET @UserCount = (select count(UserIndex) from BangOverLists where userindex = @strUserIndex);\n";
        //if count != 0 (user has records)
        sqlQuery += "if @UserCount > 0\n";
        sqlQuery += "BEGIN\n";
            //request count of random non-locked celebrities from personal list
            sqlQuery += "SET @OrderCount = (select count(Indext) from BangOverLists where UserIndex = @strUserIndex and (UpLock = 0 or DownLock = 0));\n";
            //if count is not 0 (there are some unlocked records)
            sqlQuery += "if @OrderCount != 0\n";
                sqlQuery += "BEGIN\n";
                    //request random non-locked celebrity from personal list
                    sqlQuery += "SET @TargetIndex = (select top 1 Indext from BangOverLists where UserIndex = @strUserIndex and (UpLock = 0 or DownLock = 0) order by newid());\n";
                    //find a record to compare to the one we have
                        //if order is 1 or equal to count
                    sqlQuery += "if ( (select count(UserIndex) from BangOverLists \n";
                        sqlQuery += "where (Indext = @TargetIndex and OrderRank = 0) or (Indext = @TargetIndex and OrderRank = @UserCount-1) ) > 0 )\n";
                        sqlQuery += "BEGIN\n";
                            //request @TargetIndex from personal list
                            sqlQuery += "select Celebrities.Indext, Name, Sex, Picture from BangOverLists, Celebrities where BangOverLists.Indext = @TargetIndex and CelebrityIndex = Celebrities.Indext\n";
                            sqlQuery += "UNION\n";
                            //request random from global list
                                //exclude from personal list
                            sqlQuery += "select * from ( select Top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, Users \n";
                                sqlQuery += "where ((Sex = 'F' and Women = 1) or (Sex = 'M' and Men = 1) or (Sex = 'W' and TransWomen = 1) or (Sex = 'T' and TransMen = 1)) \n";
                                sqlQuery += "and Users.Indext = @strUserIndex \n";
                                sqlQuery += "and Celebrities.Indext not in( \n";
                                sqlQuery += "select Celebrities.Indext from Celebrities, BangOverLists, Users \n";
                                sqlQuery += "where Users.Indext = @strUserIndex and UserIndex = Users.Indext and CelebrityIndex = Celebrities.Indext \n";
                                sqlQuery += ") order by newid() ) T1;\n";
                        sqlQuery += "END\n";
                        //else we're looking for an adjacent celebrity from the personal list
                        sqlQuery += "ELSE\n";
                        sqlQuery += "BEGIN\n";
                            sqlQuery += "SET @SavedOrder = (select OrderRank from BangOverLists where Indext = @TargetIndex);\n";
                            //request @TargetIndex from personal list
                            sqlQuery += "select Celebrities.Indext, Name, Sex, Picture from  Celebrities, BangOverLists where BangOverLists.Indext = @TargetIndex and CelebrityIndex = Celebrities.Indext\n";
                            sqlQuery += "UNION\n";
                            //request adjacent non-locked celebrity from personal list
                            sqlQuery += "select * from ( \n";
                                sqlQuery += "select top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, BangOverLists where UserIndex = @strUserIndex and Celebrities.Indext = CelebrityIndex and ( (OrderRank = @SavedOrder-1 and DownLock = 0) or (OrderRank = @SavedOrder+1 and UpLock = 0) ) order by newid() \n";
                                sqlQuery += ") T2;\n";
                        sqlQuery += "END\n";
                sqlQuery += "END \n";
                //else (there are no unlocked records)
            sqlQuery += "ELSE\n";
            sqlQuery += "BEGIN\n";
                //request Order = 0 or Order = count from personal list
                sqlQuery += "select * from ( \n";
                    sqlQuery += "select top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, BangOverLists where BangOverLists.Indext = @TargetIndex \n";
                    sqlQuery += "order by newid() ) T3\n";
                sqlQuery += "UNION\n";
                //request random from global list
                    //exclude from personal list
                sqlQuery += "select * from ( select Top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, Users \n";
                    sqlQuery += "where ((Sex = 'F' and Women = 1) or (Sex = 'M' and Men = 1) or (Sex = 'W' and TransWomen = 1) or (Sex = 'T' and TransMen = 1)) \n";
                    sqlQuery += "and Users.Indext = @strUserIndex \n";
                    sqlQuery += "and Celebrities.Indext not in( \n";
                    sqlQuery += "select Celebrities.Indext from Celebrities, BangOverLists, Users \n";
                    sqlQuery += "where Users.Indext = @strUserIndex and UserIndex = Users.Indext and CelebrityIndex = Celebrities.Indext \n";
                    sqlQuery += ") order by newid() ) T4;\n";
            sqlQuery += "END\n";
        sqlQuery += "END\n";
        //else (if user has no records)
        sqlQuery += "ELSE\n";
        sqlQuery += "BEGIN\n";
            //request 2 random celebrities from global list
            sqlQuery += "select top 2 * from Celebrities, Users where ((Sex = 'F' and Women = 1) or (Sex = 'M' and Men = 1) or (Sex = 'W' and TransWomen = 1) or (Sex = 'T' and TransMen = 1)) order by newid();\n";
        sqlQuery += "END\n";

        try
        {
            //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }        
            
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
                
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            
            //while(!rs.last())
            for(int x = 0; x < rows; x++)
            {
                rs.next();
                Sub.add(rs.getString("Name"));
                Sub.add(rs.getString("Picture"));
                
                PairList.add( new ArrayList<String>(Sub) );
                Sub.clear();
                
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        while(PairList.size() > 2)
        {
            PairList.remove(2);           
        }
        
        CelebrityName1 = PairList.get(0).get(0);
        if(PairList.size() > 1)
        {
            CelebrityName2 = PairList.get(1).get(0);
        }
        else
        {
            CelebrityName2 = "Samara thinks there was an error: maybe refresh the page.";
        }
        CelebrityURL1 = PairList.get(0).get(1);
        if(PairList.size() > 1)
        {
            CelebrityURL2 = PairList.get(1).get(1);
        }
        else
        {
            CelebrityName2 = "_Samara.png";
        }
        
        return PairList;
    }
    
    //Pull Random Advert
    public String PullAdvertSingle()
    {
        String Result = new String();
        String sqlQuery = "select top 1 * from Adverts order by newid();";
        
        try
        {
            //validate given username
                //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            
            while(rs.next())
            {
                Result = rs.getString("Picture");
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        return Result;
    }
    
    //Pull Random Advert Pair
    public ArrayList<String> PullAdvertPair()
    {
        ArrayList<String> ResultList = new ArrayList<String>();
        ArrayList<String> PairList = new ArrayList<String>();
        String sqlQuery = "select top 2 * from Adverts order by newid();";
        
        try
        {
            //validate given username
                //open connection
            connect = dbi.openConnection();
        }
        catch(Exception ex)
        {
            return null;
        }
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            
            while(rs.next())
            {
                PairList.add(rs.getString("Picture"));
            }
            
        }
        catch(Exception ex)
        {
            //close connection
            dbi.closeConnection();
        }
        
        //if valid
        if(rows >= 0)
        {
            while(PairList.size() > 2)
            {
                PairList.remove(2);           
            }

            Advert1 = PairList.get(0);
            Advert2 = PairList.get(1);
        }        
      
        return PairList;
    }
        
    public String getCelebrityName1()
    {
        return CelebrityName1;
    }
    
    public void setCelebrityName1(String input)
    {
        CelebrityName1 = input;
    }
    
    public String getCelebrityName2()
    {
        return CelebrityName2;
    }
    
    public void setCelebrityName2(String input)
    {
        CelebrityName2 = input;
    }
    
    public String getCelebrityURL1()
    {
        return CelebrityURL1;
    }
    
    public void setCelebrityURL1(String input)
    {
        CelebrityURL1 = input;
    }

    public String getCelebrityURL2()
    {
        return CelebrityURL2;
    }
    
    public void setCelebrityURL2(String input)
    {
        CelebrityURL2 = input;
    }

    public String getAdvert1()
    {
        return Advert1;
    }
    
    public void setAdvert1(String input)
    {
        Advert1 = input;
    }

    public String getAdvert2()
    {
        return Advert2;
    }
    
   public void setAdvert2(String input)
    {
        Advert2 = input;
    }

    public ArrayList<ArrayList<String>> getgl()
    {
        return gl;
    }
    
    public ArrayList<ArrayList<String>> getgc()
    {
        return gc;
    }
    
    public ArrayList<ArrayList<String>> getpl()
    {
        return pl;
    }
    
    public ArrayList<ArrayList<String>> getul()
    {
        return ul;
    }
    
    public ArrayList<ArrayList<String>> getuc()
    {
        return uc;
    }
    
    public String getpath()
    {
        return path;
    }
    
    public void setpath(String strInput)
    {
        path = strInput;
    }
    
    public String getfolder()
    {
        return folder;
    }
    
    public void setfolder(String strInput)
    {
        folder = strInput;
    }
    
    public String getadvertfolder()
    {
        return advertfolder;
    }
    
   public void setadvertfolder(String strInput)
    {
        advertfolder = strInput;
    }
    
    public int getGLSize()
    {
        int monkey = gl.size();
        return monkey;
    }
    
    public int getGCSize()
    {
        int monkey = gc.size();
        return monkey;
    }
    
    public int getPLSize()
    {
        int monkey = pl.size();
        return monkey;
    }
    
    public int getULSize()
    {
        int monkey = ul.size();
        return monkey;
    }
    
    public int getUCSize()
    {
        int monkey = uc.size();
        return monkey;
    }
    
    public boolean compareStrings(String strOne, String strTwo)
    {
        boolean Result = strOne.equals(strTwo);
        
        return Result;
    }
}   
