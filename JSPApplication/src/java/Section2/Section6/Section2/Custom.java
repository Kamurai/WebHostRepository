package Section2.Section6.Section2;

import Section2.Section6.*;
import Section2.*;

public class Custom extends Section2.Section6.Custom
{
    Main.Universal bob;

    public Custom()
    {
        bob = new Main.Universal();
    }

    public String Navigation(int level, int extension)
    {
        String Result = "";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Section1/index"+bob.GetExtension(extension)+"'>Gynowars</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project2"+bob.GetExtension(extension)+"'>Assault</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project3"+bob.GetExtension(extension)+"'>Mars</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Section4/index"+bob.GetExtension(extension)+"'>Renley</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Section5/index"+bob.GetExtension(extension)+"'>Antarrea</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Section6/index"+bob.GetExtension(extension)+"'>Editations</a><br/><br/>";
            Result += "<a class=\"navlinkB\" href='"+bob.GetPath(level)+"Section2/Section6/Project1"+bob.GetExtension(extension)+"'>Magic: The Tactical</a><br/><br/>";
            Result += "<a class=\"navlinkB\" href='"+bob.GetPath(level)+"Section2/Section6/Section2/index"+bob.GetExtension(extension)+"'>Warhammer 40K</a><br/><br/>";
                Result += "<a class=\"navlinkC\" href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project1"+bob.GetExtension(extension)+"'>Mission!</a><br/><br/>";
                Result += "<a class=\"navlinkC\" href='"+bob.GetPath(level)+"Section2/Section6/Section2/Section2/index"+bob.GetExtension(extension)+"'>HTKB Armies</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project7/index"+bob.GetExtension(extension)+"'>Truth</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project8"+bob.GetExtension(extension)+"'>Kingdoms</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project9"+bob.GetExtension(extension)+"'>Terminal World</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project10"+bob.GetExtension(extension)+"'>Monster Office Workplace</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project11"+bob.GetExtension(extension)+"'>Battle Princesses</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project12"+bob.GetExtension(extension)+"'>Sacred Offerings</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project13"+bob.GetExtension(extension)+"'>The Way</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project14"+bob.GetExtension(extension)+"'>Conspiratorium</a><br/><br/>";
        Result += "<a class=\"navlinkA\" href='"+bob.GetPath(level)+"Section2/Project15"+bob.GetExtension(extension)+"'>Conversion</a><br/><br/>";
        return Result;
    }

    public String Title(int input)
    {
        String Result = "";
        Result += "<title>";
        if(input == 0)
        {
            Result += "Warhammer 40K";
        }
        else if(input == 1)
        {
            Result += "Mission!";
        }
        Result += "</title>";
        return Result;
    }

    public String Header(int input)
    {
        String Result = "";
        Result += "<h2>";
        if(input == 0)
        {
            Result += "Warhammer 40K";
        }
        else if(input == 1)
        {
            Result += "Mission!";
        }
        Result += "</h2>";
        return Result;
    }

    public String Content(int input)
    {
        String Result = "";
        Result += "<p id=\"idCenterContent\">";
            if(input == 0)
            {
                Result += "This section is dedicated to projects that edit the Warhammer 40K universe.";
            }
            else if(input == 1)
            {
                Result += "This section is dedicated to an adventure RPG project in the Warhammer 40K universe.";
            }
        Result += "</p>";
        return Result;
    }
    
    public String Versions(int input)
    {
        String Result = "";
        if(input == 0)
         {
             Result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.html\">HTML</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.php\">PHP</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/index.html\">HTML Javascript</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/index.asp\">ASP Javascript</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/index.aspx\">ASP.NET Javascript</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.shtml\">Perl</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/index.xhtml\">JSF</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/index.cshtml\">ASP.NET Web App</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/index.aspx\">ASP.NET Webform</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section2/Section6/Section2/index\">ASP.NET MVC App</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/index.html\">Apache SSI</a><br/>";
         }
         else if(input == 1)
         {
             Result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.html\">HTML</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.php\">PHP</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Project1.html\">HTML Javascript</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Project1.asp\">ASP Javascript</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Project1.aspx\">ASP.NET Javascript</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.shtml\">Perl</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Project1.xhtml\">JSF</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Project1.cshtml\">ASP.NET Web App</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Project1.aspx\">ASP.NET Webform</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section2/Section6/Section2/Project1\">ASP.NET MVC App</a><br/>";
             Result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Project1.html\">Apache SSI</a><br/>";
         }
        return Result;
    }
}
