package Section1.Section4;

import Main.*;

public class Custom extends Section1.Custom
{
    Universal bob;

    public Custom()
    {
        bob = new Universal();
    }

    public String Navigation(int level, int extension)
    {
        String Result = "";
        Result += "<span class='navlink'>";
            Result += "<a href='http://htkb.dyndns.org/Section1/Project1.html'>Basic HTML</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='http://htkb.dyndns.org/Section1/Project1.php'>PHP</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section1/Section2/index"+bob.GetExtension(extension)+"'>Javascript</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='http://htkb.dyndns.org/Section1/Project3.shtml'>Perl</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section1/Section4/index"+bob.GetExtension(extension)+"'>Java</a>";
        	Result += "<h5>";
			Result += "<span class='navlink'>";
				Result += "<a href='"+bob.GetPath(level)+"Section1/Section4/Project1"+bob.GetExtension(extension)+"'>JSP Programming</a>";
			Result += "</span>";
			Result += "<span class='navlink'>";
				Result += "<a href='http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml'>JSF Programming</a>";
			Result += "</span>";
		Result += "</h5>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section1/Section5/index"+bob.GetExtension(extension)+"'>ASP.Net</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section1/Section6/index"+bob.GetExtension(extension)+"'>Databases</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section1/Project7"+bob.GetExtension(extension)+"'>HTML5</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section1/Project8"+bob.GetExtension(extension)+"'>XSL</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section1/Project9"+bob.GetExtension(extension)+"'>XML DOM</a>";
        Result += "</span>";
        Result += "<br>";
        return Result;
    }

    public String Title(int input)
    {
        String Result = "";
        Result += "<title>";
            if(input == 0)
            {
                Result += "Java Programming";
            }
            else if(input == 1)
            {
                Result += "JSP Programming";
            }
        Result += "</title>";
        return Result;
    }

    public String Header(int input)
    {
        String Result = "";
        if(input == 0)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Java Programming";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 1)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "JSP Programming";
                Result += "</u>";
            Result += "</h2>";
        }
        
        return Result;
    }

    public String Content(int input)
    {
        String Result = "";
        Result += "<p align='left'>";
            if(input == 0)
            {
                Result += "This section is dedicated to XHTML based programming.";
            }
            else if(input == 1)
            {
                Result += "This section is dedicated to JSP based programming.";
            }
        Result += "</p>";
        return Result;
    }
}
