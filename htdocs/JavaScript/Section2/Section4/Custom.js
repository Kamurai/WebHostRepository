function Navigation(level)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section1/Index.html\">Gynowars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project2.html\">Assault</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project3.html\">Mars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section4/Index.html\">Renley</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section4/Project1.html\">Warring Nations</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section4/Project2.html\">Psychodom: The One Empire</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section5/Index.html\">Antarrea</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section6/Index.html\">Editations</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project7.html\">Truth</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project8.html\">Kingdoms</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project9.html\">Terminal World</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project10.html\">Monster Office Workplace</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project11.html\">Battle Princesses</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project12.html\">Sacred Offerings</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project13.html\">The Way</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project14.html\">Conspiratorium</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project15.html\">Conversion</a><br><br>");

}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Renley");
		}
		else if(input == 1)
		{
			document.write("Warring Nations");
		}
		else if(input == 2)
		{
			document.write("Psychodom: The One Empire");
		}
	document.write("</title>");
}

function Header(input)
{
	document.write("<h2>");
		if(input == 0)
		{
			document.write("Renley");
		}
		else if(input == 1)
		{
			document.write("Warring Nations");
		}
		else if(input == 2)
		{
			document.write("Psychodom: The One Empire");
		}
	document.write("</h2>");
}

function Content(input)
{
	document.write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			document.write("This section is dedicated to projects centered in the Renley universe.");
		}
		else if(input == 1)
		{
			document.write("Warring Nations is a Tactical RPG involving squad based battles.");
			document.write("Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.");
		}
		else if(input == 2)
		{
			document.write("Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.");
			document.write("The protagonist is tasked with investigating various situations leading ");
			document.write("to a conspiracy about who is really ruling the continent.");
		}
	document.write("</p>");
}

function Versions(input)
{
	document.write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/index.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project1.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project1.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project1.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project1.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project1.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project1.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project1\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project1.html\">Apache SSI</a><br>");
	
	}
	else if(input == 2)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project2.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project2.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project2.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project2.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project2.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project2.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project2\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project2.html\">Apache SSI</a><br>");
	
	}

}