function Navigation(level, extension)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level+1)+"Section1/Project1.html\">Basic HTML</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level+1)+"Section1/Project1.php\">PHP</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section2/index.html\">Javascript</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level+1)+"Section1/Project3.shtml\">Perl</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"\">Java</a><br><br>"); //JSP & JSF
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.Net</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");

}

function Title(input)
{
	document.write("<title>");
		if(input <= 0)
		{
			document.write("Web Programming");
		}
		else if(input == 2)
		{
			document.write("Javascript Programming");
		}
		else if(input == 4)
		{
			document.write("Java Programming");
		}
		else if(input == 5)
		{
			document.write("ASP.NET Programming");
		}
		else if(input == 6)
		{
			document.write("Database Programming");
		}
	document.write("</title>");
}

function Header(input)
{
	document.write("<h2>");
		if(input == 0)
		{
			document.write("Web Programming");
		}
		else if(input == 2)
		{
			document.write("Javascript Programming");
		}
		else if(input == 4)
		{
			document.write("Java Programming");
		}
		else if(input == 5)
		{
			document.write("ASP.NET Programming");
		}
		else if(input == 6)
		{
			document.write("Database Programming");
		}
	document.write("</h2>");
}

function Content(input)
{
	document.write("<p id=\"idCenterContent\">");
    	if(input <= 0)
		{
			document.write("This section is dedicated to web-based programming.");
		}
		else if(input == 2)
		{
			document.write("This section is dedicated to Javascript based programming.");
		}
		else if(input == 4)
		{
			document.write("This section is dedicated to Java based programming.");
		}
		else if(input == 5)
		{
			document.write("This section is dedicated to ASP.NET based programming.");
		}
		else if(input == 6)
		{
			document.write("This section is dedicated to Database based programming.");
		}
	document.write("</p>");
}

function Versions(input)
{
	document.write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/index.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br>");
	}
	else if(input == 2)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project2.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project2.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project2.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project2.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project2.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project2.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project2.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project2.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project2.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project2\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Project2.html\">Apache SSI</a><br>");
	
	}
	else if(input == 4)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project4.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project4.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project4.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project4.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project4.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project4.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project4.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project4.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project4.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project4\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Project4.html\">Apache SSI</a><br>");
	
	}
	else if(input == 5)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project5.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project5.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project5.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project5.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project5.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project5.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project5.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project5.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project5.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project5\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Project5.html\">Apache SSI</a><br>");
	
	}
	else if(input == 6)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project6.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project6.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project6.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project6.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Project6.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project6.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project6.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project6.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project6.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project6\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Project6.html\">Apache SSI</a><br>");
	
	}

}
