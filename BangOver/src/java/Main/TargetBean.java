/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Main;

import java.io.*;
import javax.faces.bean.ManagedBean;
import java.sql.Connection;
import java.sql.ResultSet;
import javax.faces.bean.ViewScoped;
import java.util.ArrayList;
import javax.servlet.http.Part;

/**
 * @author Kamurai
 */
@ManagedBean(name="TargetBean")
@ViewScoped
public class TargetBean implements Serializable
{
    private Connection connect;
    private final DbInfo dbi;
    
    private String error;
    public String geterror()
    {
        return error;
    }
    public void seterror(String input)
    {
        error = input;
    }
    private String Advert1;
    public String getAdvert1()
    {
        return Advert1;
    }
    public void setAdvert1(String input)
    {
        Advert1 = input;
    }
    private String Advert2;
    public String getAdvert2()
    {
        return Advert2;
    }
    public void setAdvert2(String input)
    {
        Advert2 = input;
    }
    private String AdvertURL1;
    public String getAdvertURL1()
    {
        return AdvertURL1;
    }
    public void setAdvertURL1(String strInput)
    {
        AdvertURL1 = strInput;
    }
    private String AdvertURL2;
    public String getAdvertURL2()
    {
        return AdvertURL2;
    }
    public void setAdvertURL2(String strInput)
    {
        AdvertURL2 = strInput;
    }
    private String TargetName1;
    public String getTargetName1()
    {
        return TargetName1;
    }
    public void setTargetName1(String input)
    {
        TargetName1 = input;
    }
    private String TargetName2;
    public String getTargetName2()
    {
        return TargetName2;
    }
    public void setTargetName2(String input)
    {
        TargetName2 = input;
    }
    private String TargetURL1;
    public String getTargetURL1()
    {
        return TargetURL1;
    }
    public void setTargetURL1(String input)
    {
        TargetURL1 = input;
    }
    private String TargetURL2;
    public String getTargetURL2()
    {
        return TargetURL2;
    }
    public void setTargetURL2(String input)
    {
        TargetURL2 = input;
    }
    private ArrayList<ArrayList<String>> gl = new ArrayList<ArrayList<String>>();
    public ArrayList<ArrayList<String>> getgl()
    {
        return gl;
    }
    public int getGLSize()
    {
        int monkey = gl.size();
        return monkey;
    }
    public void setGlobalList(LoginBean userBean) //set Global List
    {
        gl = PullGlobalList(userBean);
    }
    private ArrayList<ArrayList<String>> gc = new ArrayList<ArrayList<String>>();
    public ArrayList<ArrayList<String>> getgc()
    {
        return gc;
    }
    public int getGCSize()
    {
        int monkey = gc.size();
        return monkey;
    }
    public void setGlobalCounts() //set Global Counts
    {
        gc = PullGlobalCounts();
    }
    private ArrayList<ArrayList<String>> pl = new ArrayList<ArrayList<String>>();
    public ArrayList<ArrayList<String>> getpl()
    {
        return pl;
    }
    public void setPersonalList(LoginBean userBean) //set Personal List
    {
        pl = PullPersonalList(userBean.getCurrentUser().getUserIndex());
    }
    public int getPLSize()
    {
        int monkey = pl.size();
        return monkey;
    }
    private ArrayList<ArrayList<String>> ul = new ArrayList<ArrayList<String>>();
    public ArrayList<ArrayList<String>> getul()
    {
        return ul;
    }
    public int getULSize()
    {
        int monkey = ul.size();
        return monkey;
    }
    private ArrayList<ArrayList<String>> uc = new ArrayList<ArrayList<String>>();
    public ArrayList<ArrayList<String>> getuc()
    {
        return uc;
    }
    public int getUCSize()
    {
        int monkey = uc.size();
        return monkey;
    }
    private String path;
    public String getpath()
    {
        return path;
    }
    public void setpath(String strInput)
    {
        path = strInput;
    }
    private String folder;
    public String getfolder()
    {
        return folder;
    }
    public void setfolder(String strInput)
    {
        folder = strInput;
    }
    private String advertfolder;
    public String getadvertfolder()
    {
        return advertfolder;
    }
    public void setadvertfolder(String strInput)
    {
        advertfolder = strInput;
    }
    private String ManagementTargetUsername;
    public String getManagementTargetUsername()
    {
        return ManagementTargetUsername;
    }
    public void setManagementTargetUsername(String userName)
    {
        ManagementTargetUsername = userName;
    }
    public void setstrValueToAdd(String input)
    {
        strValueToAdd = input;
    }
    private String strTargetToAdd;
    public String getstrTargetToAdd()
    {
        return strTargetToAdd;
    }
    public void setstrTargetToAdd(String input)
    {
        strTargetToAdd = input;
    }
    private String strURLToAdd;
    public String getstrURLToAdd()
    {
        return strURLToAdd;
    }
    public void setstrURLToAdd(String input)
    {
        strURLToAdd = input;
    }
    private String strValueToAdd;
    public String getstrValueToAdd()
    {
        return strValueToAdd;
    }
    private Part fileTargetToAdd;
    public Part getfileTargetToAdd()
    {
        return fileTargetToAdd;
    }
    public void setfileTargetToAdd(Part input)
    {
        fileTargetToAdd = input;
    }
    private String strTargetToSuggest;
    public String getstrTargetToSuggest()
    {
        return strTargetToSuggest;
    }
    public void setstrTargetToSuggest(String input)
    {
        strTargetToSuggest = input;
    }
    private String strURLToSuggest;
    public String getstrURLToSuggest()
    {
        return strURLToSuggest;
    }
    public void setstrURLToSuggest(String input)
    {
        strURLToSuggest = input;
    }
    private String strValueToSuggest;
    public String getstrValueToSuggest()
    {
        return strValueToSuggest;
    }
    public void setstrValueToSuggest(String input)
    {
        strValueToSuggest = input;
    }
    
    
    public TargetBean()
    {
        connect = null;
        
        dbi = new DbInfo();

        error = "";
        
        Advert1 = new String();
        Advert2 = new String();
        
        TargetURL1 = new String();
        TargetURL2 = new String();
        
        TargetName1 = new String();
        TargetName2 = new String();
        
        gl = new ArrayList<ArrayList<String>>();
        gc = new ArrayList<ArrayList<String>>();
        pl = new ArrayList<ArrayList<String>>();
        ul = new ArrayList<ArrayList<String>>();
        uc = new ArrayList<ArrayList<String>>();
        
        path = "./Pictures/";
        folder = "Targets/";
        advertfolder = "Adverts/";
        
        AdvertURL1 = "";
        AdvertURL2 = "";
        
        ManagementTargetUsername = "";
        
        strTargetToSuggest = "";
        strURLToSuggest = "";
        strValueToSuggest = "F";
        
        strTargetToAdd = "";
        strURLToAdd = "";
        strValueToAdd = "F";
        fileTargetToAdd = null;
        
    }
    
    //Swap Positions
    public String SwapPositions(int intUserIndex, String strTarget1, String strTarget2)
    {
        String Result = "index";
        String sqlQuery = "";
        
        sqlQuery += "BangOverSwapTargets " + intUserIndex + ", '" + strTarget1 + "', '" + strTarget2 + "';\n";
        
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
    
    //Pull Global List
    public ArrayList<ArrayList<String>> PullGlobalList(LoginBean userBean)
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        String tempValue = "";
        
        String sqlQuery = "BangOverPullGlobalListAll;";
        
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
                tempValue = rs.getString("Sex");
                
                if( tempValue.compareTo("F") == 0 )
                {
                    Sub.add("Woman");
                }
                else if( tempValue.compareTo("M") == 0 )
                {
                    Sub.add("Man");
                }
                else if( tempValue.compareTo("W") == 0 )
                {
                    Sub.add("Trans Woman");
                }
                else if( tempValue.compareTo("T") == 0 )
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
    public ArrayList<ArrayList<String>> PullPersonalList(int intUserIndex)
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        String tempValue = "";
        
        //join BangOverList, and Celebrities based on current user
        String sqlQuery = "BangOverPullPersonalList " + intUserIndex;
        
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
                tempValue = rs.getString("Sex");
                
                if( tempValue.compareTo("F") == 0 )
                {
                    Sub.add("Woman");
                }
                else if( tempValue.compareTo("M") == 0 )
                {
                    Sub.add("Man");
                }
                else if( tempValue.compareTo("W") == 0 )
                {
                    Sub.add("Trans Woman");
                }
                else if( tempValue.compareTo("T") == 0 )
                {
                    Sub.add("Trans Man");
                }
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
    
    public ArrayList<ArrayList<String>> PullGlobalCounts()
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        String sqlQuery = "BangOverPullGlobalCounts";
        
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
    
    //Pull Random Target Pair: Pull 1 from Personal, plus adjacent (non-lock) or global if at ends
    public ArrayList<ArrayList<String>> PullTargetPair(String strUserIndex)
    {
        ArrayList<String> ResultList = new ArrayList<String>();
        ArrayList<String> Sub = new ArrayList<String>();
        
        //ArrayList<String> PairList = new ArrayList<String>();
        ArrayList<ArrayList<String>> PairList = new ArrayList<ArrayList<String>>();
        String sqlQuery = "BangOverPullTargetPair " + strUserIndex;
        
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
        
        if(PairList.size() > 0)
        {
            TargetName1 = PairList.get(0).get(0);
            //TargetRelease1 = PairList.get(0).get(1);
            TargetURL1 = PairList.get(0).get(1);
        }
        else
        {
            TargetName1 = "Samara thinks there was an error: maybe refresh the page.";
            //TargetRelease1 = "";
            TargetURL1 = "_Samara.png";
        }
        
        if(PairList.size() > 1)
        {
            TargetName2 = PairList.get(1).get(0);
            //TargetRelease2 = PairList.get(1).get(1);
            TargetURL2 = PairList.get(1).get(1);
        }
        else
        {
            TargetName2 = "Samara thinks there was an error: maybe refresh the page.";
            //TargetRelease2 = "";
            TargetURL2 = "_Samara.png";
        }
        
        return PairList;
    }
    
    //Pull Random Advert Pair
    public void PullAdvertPair()
    {
        ArrayList<ArrayList<String>> ResultList = new ArrayList<ArrayList<String>>();
        ArrayList<String> SubList = new ArrayList<String>();
        String sqlQuery = "BangOverPullAdvertPair";
        
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
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        int rows = -1;
        
        try
        {
            rs.last();
            rows = rs.getRow();
            rs.beforeFirst();
            
            while(rs.next())
            {
                SubList.add( rs.getString("Picture") );
                SubList.add( rs.getString("Link") );
                ResultList.add( new ArrayList<String>(SubList) );
                SubList.clear();
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
            while(ResultList.size() > 2)
            {
                ResultList.remove(2);           
            }

            Advert1    = ResultList.get(0).get(0);
            AdvertURL1 = ResultList.get(0).get(1);
            Advert2    = ResultList.get(1).get(0);
            AdvertURL2 = ResultList.get(1).get(1);
            
        }
      
        //return PairList;
    }
        
    public void AddTarget()
    {
        String sqlQuery = "";
        ConnInfo FileConnection = new ConnInfo();
        
        try
        {
            //take target to add and connect to main site
            FileConnection.UploadToServer(fileTargetToAdd);
        }
        catch(Exception ex)
        {
            //?
        }
        //massage strURLToAdd as necessary
        setstrURLToAdd(fileTargetToAdd.getSubmittedFileName());
        
        
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
        
        sqlQuery = "BangOverAddTarget '" + strTargetToAdd + "', '" + strValueToAdd + "', '" + strURLToAdd + "';";
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        
        dbi.closeConnection(connect);
        
        strTargetToAdd = "";
        strValueToAdd = "F";
        strURLToAdd = "";
    }
    
    public void AddTargetSuggestion()
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
        
        sqlQuery = "BangOverAddTargetSuggestion '" + strTargetToSuggest + "', '" + strValueToSuggest + "', '" + strURLToSuggest + "';";
        
        ResultSet rs = dbi.executeStatement(sqlQuery);
        
        dbi.closeConnection(connect);
        
        strTargetToSuggest = "";
        strValueToSuggest = "F";
        strURLToSuggest = "";
    }
    
}   
