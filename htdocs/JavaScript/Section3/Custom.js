function Navigation(level, extension)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section3/Project1"+GetExtension(extension)+"\">Online Experience Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section3/Project2"+GetExtension(extension)+"\">Game Maker Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section3/Project3"+GetExtension(extension)+"\">Java Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section3/Project4"+GetExtension(extension)+"\">C# Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section3/Project5"+GetExtension(extension)+"\">C++ Downloads</a><br><br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Downloadable Projects");
		}
		else if(input == 1)
		{
			document.write("Online Experience Downloads");
		}
		else if(input == 2)
		{
			document.write("Game Maker Downloads");
		}
		else if(input == 3)
		{
			document.write("Java Downloads");
		}
		else if(input == 4)
		{
			document.write("C# Downloads");
		}
		else if(input == 5)
		{
			document.write("C++ Downloads");
		}
	document.write("</title>");
}

function Header(input)
{
	document.write("<h2>");
		if(input == 0)
		{
			document.write("Downloadable Projects");
		}
		else if(input == 1)
		{
			document.write("Online Experience Downloads");
		}
		else if(input == 2)
		{
			document.write("Game Maker Downloads");
		}
		else if(input == 3)
		{
			document.write("Java Downloads");
		}
		else if(input == 4)
		{
			document.write("C# Downloads");
		}
		else if(input == 5)
		{
			document.write("C++ Downloads");
		}
	document.write("</h2>");
}

function Content(input, level)
{
	document.write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			document.write("This section is dedicated to downloadable projects.");
		}
		else if(input == 1)
		{
			document.write("Here are downloads to play Cube World with us:</br>");
			document.write("</br>");
			document.write("Cube World:<t><a href=\""+GetPath(level+1)+"/downloads/CubeSetup3.exe\">Come play Cube World!</a></br>");
			document.write("</br>");
			document.write("DirectX:<t><a href=\""+GetPath(level+1)+"/downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>");
			document.write("DirectX \"Web\":<t><a href=\""+GetPath(level+1)+"/downloads/dxwebsetup.exe\">Direct X Redistrutable</a></br>");
			document.write("</br>");
		}
		else if(input == 2)
		{
			document.write("Here are Game Maker Projects to play:</br>");
			document.write("</br>");
			document.write("\"Gamebox Client: v6.0\":<t><a href=\""+GetPath(level+1)+"/downloads/GameBox_Client_Installer_v6p0.exe\">Play games from...well, anywhere.</a></br>");
			document.write("\"Gamebox Server: v6.0\":<t><a href=\""+GetPath(level+1)+"/downloads/GameBox_Server_Installer_v6p0.exe\">Host GameBox.</a></br>");
			document.write("\"39dll.dll: v2.5\":<t><a href=\""+GetPath(level+1)+"downloads/39dll.dll\">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a></br>");
			document.write("\"A Chess Server\":<t><a href=\""+GetPath(level+1)+"/downloads/Chess_Server.exe\">Host a Chess game.</a></br>");
			document.write("\"A Chess Client\":<t><a href=\""+GetPath(level+1)+"/downloads/Chess_Client.exe\">A game of Chess from anywhere.</a></br>");
			document.write("\"I Dunno\":<t><a href=\""+GetPath(level+1)+"/downloads/Idunno.exe\">I dunno, it\"s a fun puzzle game though.</a></br>");
			document.write("\"Purification\":<t><a href=\""+GetPath(level+1)+"/downloads/Zombies.exe\">Kill zombies...lots of zombies.</a></br>");
			document.write("\"Trail of the Undead: The Way Home\":<t><a href=\""+GetPath(level+1)+"/downloads/TrailoftheUndead.exe\">An adventure of zombie killing goodness.</a></br>");
			document.write("\"Discovery\" (buggy Alpha):<t><a href=\""+GetPath(level+1)+"/downloads/Discovery.exe\">Play a game of discovery and survival.</a></br>");
			document.write("\"Twisted Tactics: Version 0.1\" (buggy Alpha):<t><a href=\""+GetPath(level+1)+"/downloads/Tactical.exe\">Scrapped two player tactical system.</a></br>");
			document.write("\"Skitzo Burrito (Alpha)\": <t><a href=\""+GetPath(level+1)+"/downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a></br>");
		}
		else if(input == 3)
		{
			document.write("Here are Java Programs to download:</br>");
			document.write("</br>");
			document.write("\"Blood Bowl Manager\":<t><a href=\"."+GetPath(level+1)+"/downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
		else if(input == 4)
		{
			document.write("Here are C# Programs to download:</br>");
			document.write("</br>");
			document.write("\"Chess Program\":<t><a href=\"."+GetPath(level+1)+"/downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
		else if(input == 5)
		{
			document.write("Here are C++ Programs to download:</br>");
			document.write("</br>");
			document.write("\"HTKB Bar Code System\":<t><a href=\"."+GetPath(level+1)+"/downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
	document.write("</p>");
}

function Versions(input)
{
	document.write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/index.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project1.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project1.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project1.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project1.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project1\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project1.html\">Apache SSI</a><br>");
	
	}
	else if(input == 2)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project2.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project2.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project2.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project2.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project2.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project2.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project2.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project2.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project2.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project2\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project2.html\">Apache SSI</a><br>");
	
	}
	else if(input == 3)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project3.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project3.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project3.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project3.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project3\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project3.html\">Apache SSI</a><br>");
	
	}
    
}
