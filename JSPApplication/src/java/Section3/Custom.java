package Section3;

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
            Result += "<a href='"+bob.GetPath(level)+"Section3/Project1"+bob.GetExtension(extension)+"'>Online Experience Downloads</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section3/Project2"+bob.GetExtension(extension)+"'>Game Maker Downloads</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section3/Project3"+bob.GetExtension(extension)+"'>Java Downloads</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section3/Project4"+bob.GetExtension(extension)+"'>C# Downloads</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section3/Project5"+bob.GetExtension(extension)+"'>C++ Downloads</a>";
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
                Result += "Downloadable Projects";
            }
            else if(input == 1)
            {
                Result += "Online Experience Downloads";
            }
            else if(input == 2)
            {
                Result += "Game Maker Downloads";
            }
            else if(input == 3)
            {
                Result += "Java Downloads";
            }
            else if(input == 4)
            {
                Result += "C# Downloads";
            }
            else if(input == 5)
            {
                Result += "C++ Downloads";
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
                    Result += "Downloadable Projects";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 1)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Online Experience Downloads";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Game Maker Downloads";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 3)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Java Downloads";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 4)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "C# Downloads";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 5)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "C++ Downloads";
                Result += "</u>";
            Result += "</h2>";
        }
        return Result;
    }

    public String Content(int input, int level)
    {
        String Result = "";
        Result += "<p align='left'>";
            if(input == 0)
            {
                Result += "This section is dedicated to downloadable projects.";
            }
            else if(input == 1)
            {
                Result += "Here are downloads to play Cube World with us:</br>";
                Result += "</br>";
                Result += "Cube World:<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/CubeSetup3.exe'>Come play Cube World!</a></br>";
                Result += "</br>";
                Result += "DirectX:<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/directx_Jun2010_redist.exe'>Direct X Redistrutable</a></br>";
                Result += "DirectX 'Web':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/dxwebsetup.exe'>Direct X Redistrutable</a></br>";
                Result += "</br>";
            }
            else if(input == 2)
            {
                Result += "Here are Game Maker Projects to play:</br>";
                Result += "</br>";
                Result += "'Gamebox Client: v5.0':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/GameBox_Client_Installer_v5p0.exe'>Play games from...well, anywhere.</a></br>";
                Result += "'Gamebox Server: v5.0':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/GameBox_Server_Installer_v5p0.exe'>Host GameBox.</a></br>";
                Result += "'39dll.dll: v2.5':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/39dll.dll'>You may need this in your 'user/AppData/Local/GameBox_Client' folder.</a></br>";
                Result += "'A Chess Server':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/Chess_Server.exe'>Host a Chess game.</a></br>";
                Result += "'A Chess Client':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/Chess_Client.exe'>A game of Chess from anywhere.</a></br>";
                Result += "'I Dunno':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/Idunno.exe'>I dunno, it's a fun puzzle game though.</a></br>";
                Result += "'Purification':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/Zombies.exe'>Kill zombies...lots of zombies.</a></br>";
                Result += "'Trail of the Undead: The Way Home':<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/TrailoftheUndead.exe'>An adventure of zombie killing goodness.</a></br>";
                Result += "'Discovery' (buggy Alpha):<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/Discovery.exe'>Play a game of discovery and survival.</a></br>";
                Result += "'Twisted Tactics: Version 0.1' (buggy Alpha):<t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/Tactical.exe'>Scrapped two player tactical system.</a></br>";
                Result += "'Skitzo Burrito (Alpha)': <t><a href='"+bob.GetPath(level+1)+"/Section3/downloads/Emotive-Default-1.0.0.3.exe'>An emotional platform survival game.</a></br>";
            }
            else if(input == 3)
            {
                Result += "";
                Result += "</br>";
                Result += "'Blood Bowl Manager':<t><a href='."+bob.GetPath(level+1)+"/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>";
            }
            else if(input == 4)
            {
                Result += "Here are C# Programs to download:</br>";
                Result += "</br>";
                Result += "'Chess Program':<t><a href='."+bob.GetPath(level+1)+"/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>";
            }
            else if(input == 5)
            {
                Result += "Here are C++ Programs to download:</br>";
                Result += "</br>";
                Result += "'HTKB Bar Code System':<t><a href='."+bob.GetPath(level+1)+"/Section3/downloads/pichaku.zip'>This is currently not available.</a></br>";
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
                Result += "<a href=\"http://htkb.dyndns.org/Section3/index.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/index.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/index.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/index.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/index.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/index.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/index.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/index.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/index.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section3/index\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/index.html\">Apache SSI</a><br/>";
            }
            else if(input == 1)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project1.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project1.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project1.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project1.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Project1\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project1.html\">Apache SSI</a><br/>";
            }
            else if(input == 2)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project2.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project2.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project2.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project2.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project2.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project2.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project2.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project2.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project2.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project2\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project2.html\">Apache SSI</a><br/>";
            }
            else if(input == 3)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project3.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Project3\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project3.html\">Apache SSI</a><br/>";
            }
            else if(input == 4)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project3.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Project3\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project3.html\">Apache SSI</a><br/>";
            }
            else if(input == 5)
            {
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.html\">HTML</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.php\">PHP</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project3.html\">HTML Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\">ASP Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\">ASP.NET Javascript</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.shtml\">Perl</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\">JSF</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\">ASP.NET Web App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\">ASP.NET Webform</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Project3\">ASP.NET MVC App</a><br/>";
                Result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project3.html\">Apache SSI</a><br/>";
            }
        Result += "</p>";
        return Result;
    }
}
