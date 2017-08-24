package Main;

public class Universal
{
    public Universal()
    {

    }

    public String WriteHeader(int level)
    {
        String Result = "";
        Result += "<link rel='shortcut icon' href='"+GetPath(level)+"Pictures/favicon.ico' type='image/x-icon' />";
        Result += "<link rel='icon' href='"+GetPath(level)+"Pictures/favicon.ico' type='image/x-icon' />";
        Result += "<link href='"+GetPath(level-1)+"moo.css' rel='stylesheet' type='text/css'>";
        return Result;
    }

    public String TitlePicture(int level)
    {
        String Result = "";
        Result += "<img src='"+GetPath(level)+"Pictures/logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>";

        return Result;
    }

    public String WebMaster()
    {
        String Result = "";
        Result += "<p align='left'>";
            Result += "<font size='1'>";
                Result += "Website managed by Kamurai.";
            Result += "</font>";
        Result += "</p>";
        return Result;
    }

    public String NavBar(int level, int extension)
    {
        String Result = "";
        Result += "<a href='"+GetPath(level)+"index"+GetExtension(extension)+"'>Home</a>";
        Result += "<a href='"+GetPath(level)+"Section1/index"+GetExtension(extension)+"'>Web Programming</a>";
        Result += "<a href='"+GetPath(level)+"Section2/index"+GetExtension(extension)+"'>Private Projects</a>";
        Result += "<a href='"+GetPath(level)+"Section3/index"+GetExtension(extension)+"'>Downloadable Projects</a>";
        return Result;
    }

    public String GDR()
    {
        String Result = "";
        Result += "<p align='center'>";
                Result += "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
        Result += "</p>";
        return Result;
    }

    public String WinRAR()
    {
        String Result = "";
        Result += "<p align='center'>";
                Result += "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
        Result += "</p>";
        return Result;
    }

    public String Footer()
    {
        String Result = "";
        Result += "<p align='center'>";
            Result += "© Copyright 2012 All rights reserved<br>";
            Result += "House That Kamurai Built<br>";
        Result += "</p>";
        return Result;
    }

    public String Information()
    {
        String Result = "";
        Result += "This is written using JSP.";
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
