package Section1;

public class Custom extends Main.Custom
{
    Main.Universal bob;

    public Custom()
    {
        bob = new Main.Universal();
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
                Result += "Web Programming";
            }
            else if(input == 2)
            {
                Result += "Javascript Programming";
            }
            else if(input == 3)
            {
                Result += "Perl Programming";
            }
            else if(input == 4)
            {
                Result += "Java Programming";
            }
            else if(input == 7)
            {
                Result += "HTML5";
            }
            else if(input == 8)
            {
                Result += "XLS";
            }
            else if(input == 9)
            {
                Result += "XML DOM";
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
                    Result += "Web Programming";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Javascript Programming";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 3)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Perl Programming";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 4)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Java Programming";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 7)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "HTML5";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 8)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "XLS";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 9)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "XML DOM";
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
                Result += "This section is dedicated to web-based programming.";
            }
            else if(input == 2)
            {
                Result += "This section is dedicated to Javascript based programming.";
            }
            else if(input == 3)
            {
                Result += "This section is dedicated to Perl based programming.";
            }
            else if(input == 4)
            {
                Result += "This section is dedicated to XHTML based programming.";
            }
            else if(input == 7)
            {
                Result += "This section is dedicated to HTML5 based programming.";
            }
            else if(input == 8)
            {
                Result += "This section is dedicated to XSL based programming.";
            }
            else if(input == 9)
            {
                Result += "This section is dedicated to XML DOM based programming.";
            }
        Result += "</p>";
        return Result;
    }
}
