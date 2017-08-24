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
        
        sqlQuery += "SwapCelebrities " + intUserIndex + ", '" + strCelebrity1 + "', '" + strCelebrity2 + "';\n";
        
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
    public void setGlobalList(LoginBean userBean)
    {
        gl = PullGlobalList(userBean);
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
    public ArrayList<ArrayList<String>> PullGlobalList(LoginBean userBean)
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        String tempSex = "";
        
        String sqlQuery = "PullGlobalListAll;";
        
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
                tempSex = rs.getString("Sex");
                
                if( tempSex.compareTo("F") == 0 )
                {
                    Sub.add("Woman");
                }
                else if( tempSex.compareTo("M") == 0 )
                {
                    Sub.add("Man");
                }
                else if( tempSex.compareTo("W") == 0 )
                {
                    Sub.add("Trans Woman");
                }
                else if( tempSex.compareTo("T") == 0 )
                {
                    Sub.add("Trans Man");
                }
                
                Sub.add(rs.getString("Ranking"));
                
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
        sqlQuery += "PullCelebrityPair " + strUserIndex + ";\n";
        
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
            CelebrityURL2 = "_Samara.png";
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
