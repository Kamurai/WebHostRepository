package Section2.Section1;

import Section2.*;

public class Custom extends Section2.Custom
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
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section1/index"+bob.GetExtension(extension)+"'>Gynowars</a>";
        	Result += "<h5>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section1/Project1.html'>Gynowars RPG</a>";
                    Result += "</span>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section1/Project2.html'>Gynowars: Battle Arena CCG</a>";
                    Result += "</span>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section1/Project3.html'>Gynowars: Crash Ball</a>";
                    Result += "</span>";
                Result += "</h5>";
	Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project2"+bob.GetExtension(extension)+"'>Assault</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project3"+bob.GetExtension(extension)+"'>Mars</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section4/index"+bob.GetExtension(extension)+"'>Renley</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/index"+bob.GetExtension(extension)+"'>Antarrea</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/index"+bob.GetExtension(extension)+"'>Editations</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project7/index"+bob.GetExtension(extension)+"'>Truth</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project8"+bob.GetExtension(extension)+"'>Kingdoms</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project9"+bob.GetExtension(extension)+"'>Terminal World</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project10"+bob.GetExtension(extension)+"'>Monster Office Workplace</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project11"+bob.GetExtension(extension)+"'>Battle Princesses</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project12"+bob.GetExtension(extension)+"'>Sacred Offerings</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project13"+bob.GetExtension(extension)+"'>The Way</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project14"+bob.GetExtension(extension)+"'>Conspiratorium</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project15"+bob.GetExtension(extension)+"'>Conversion</a>";
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
                Result += "Gynowars";
            }
            else if(input == 1)
            {
                Result += "Gynowars RPG";
            }
            else if(input == 2)
            {
                Result += "Gynowars: Battle Arena CCG";
            }
            else if(input == 3)
            {
                Result += "Gynowars: Crash Ball";
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
                    Result += "Gynowars";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 1)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Gynowars RPG";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Gynowars: Battle Arena CCG";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 3)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Gynowars: Crash Ball";
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
                Result += "This section is dedicated to projects centered in the Gynowars universe.";
            }
            else if(input == 1)
            {
                Result += "The Gynowars RPG is a 'pokemon-like' tactical RPG.";
                Result += "The protagonist uses creatures to fight battles against other creatures to progress through the storyline.";
            }
            else if(input == 2)
            {
                Result += "Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ";
                Result += "in an arena-like environment.  There are several scenarios to run, to include:";
                Result += "</br>";
                Result += "'Death Match', 'Ring the Bell', and 'Head Hunt'.";
            }
            else if(input == 3)
            {
                Result += "Gynowars: Crash Ball is a turn based strategy board game.  Basically it's gridiron with Gynos.";
            }
            
        Result += "</p>";
        return Result;
    }
    
    public String Versions(int input)
    {
        String Result = "";
        Result += "<p align='left'>";
            if(input == 0)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/index.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/index.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/index.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/index.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/index.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/index.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/index.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/index.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/index.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section2/Section1/index\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/index.html\">Apache SSI</a><br/>";
            }
            else if(input == 1)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/Project1.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project1.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project1.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project1.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project1.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project1.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section2/Section1/Project1\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project1.html\">Apache SSI</a><br/>";
            }
            else if(input == 2)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/Project2.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project2.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project2.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project2.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project2.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project2.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project2\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project2.html\">Apache SSI</a><br/>";
            }
            else if(input == 3)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section1/Project3.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project3.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project3.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project3.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project3.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project3.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section2/Section1/Project3\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project3.html\">Apache SSI</a><br/>";
            }
        Result += "</p>";
        return Result;
    }
}
