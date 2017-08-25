function Navigation(level)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section1/Index.html\">Gynowars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project2.html\">Assault</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project3.html\">Mars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section4/Index.html\">Renley</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section5/Index.html\">Antarrea</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section1/Index.html\">Global</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section2/Index.html\">Grendol</a><br><br>");
			document.write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section2/Project1.html\">Land of the Orcish Empire: Age of Magic</a><br><br>");
			document.write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section2/Project2.html\">Coliseum: Arena</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section3/Index.html\">Utopia</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section4/Index.html\">Elvia</a><br><br>");
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
			document.write("Grendol");
		}
		else if(input == 1)
		{
			document.write("Land of the Orcish Empire: Age of Magic");
		}
		else if(input == 2)
		{
			document.write("Coliseum: Arena");
		}
	document.write("</title>");
}

function Header(input)
{
	document.write("<h2>");
		if(input == 0)
		{
			document.write("Grendol");
		}
		else if(input == 1)
		{
			document.write("Land of the Orcish Empire: Age of Magic");
		}
		else if(input == 2)
		{
			document.write("Coliseum: Arena");
		}
	document.write("</h2>");	
}

function Content(input)
{
	document.write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			document.write("Here are projects based in the Grendol Empire:</br>");
			document.write("</br>");
			document.write("Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ");
			document.write("comprise the Grendol Empire.</br>");
			document.write("Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>");
		}
		else if(input == 1)
		{
			document.write("Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ");
			document.write("comprise the Grendol Empire.");
		}
		else if(input == 2)
		{
			document.write("Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.");
		}
	document.write("</p>");
}

function Versions(input)
{
	document.write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/index.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project1.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project1.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project1.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project1.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project1.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project1.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project1\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project1.html\">Apache SSI</a><br>");
	
	}
	else if(input == 2)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project2.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project2.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project2.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project2.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project2.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project2.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project2\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project2.html\">Apache SSI</a><br>");
	
	}

}