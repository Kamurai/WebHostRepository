package Main;

public class testUniversal
{
    public testUniversal()
    {

    }
    
    public boolean isLoggedIn()
    {
        boolean Result = true;
        
        
        
        
        return Result;
    }
    
    public String WebMaster()
    {
        String Result = "";
        Result += "";
        return Result;
    }

    public String Information()
    {
        String Result = "";
        Result += "";
        return Result;
    }

    public String OtherVersions()
    {
        String Result = "";
        Result += "";
        return Result;
    }

    public String GetPath(int level)
    {
        if(level <= 0)
        {
            return "./";
        }
        else if(level == 1)
        {
            return "../";
        }
        else if(level == 2)
        {
            return "../../";
        }
        else if(level == 3)
        {
            return "../../../";
        }
        else if(level == 4)
        {
            return "../../../../";
        }
        else if(level == 5)
        {
            return "../../../../../";
        }
        else if(level == 6)
        {
            return "../../../../../../";
        }
        else if(level == 7)
        {
            return "../../../../../../../";
        }
        else
        {
            return "./";
        }
    }

    public String GetExtension(int extension)
    {
        if(extension <= 0)
        {
            //Basic HTML
            return ".html";
        }
        else if(extension == 1)
        {
            //ASP
            return ".asp";
        }
        else if(extension == 2)
        {
            //ASP.NET
            return ".aspx";
        }
        else if(extension == 3)
        {
            //JSP
            return ".jsp";
        }
        else if(extension == 4)
        {
            //JSP
            return ".xhtml";
        }
        else
        {
            //Basic HTML
            return ".html";
        }
    }
}