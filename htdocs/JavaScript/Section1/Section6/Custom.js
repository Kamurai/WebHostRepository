function Navigation(level, extension)
{
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level+1)+"Section1/Project1.html\">Basic HTML</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level+1)+"Section3/Project1.php\">PHP</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section1/Section2/Index.html\">Javascript</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level+1)+"Section1/Project3.shtml\">Perl</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"\">Java</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.Net</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a>");
		document.write("<h5>");
			document.write("<span class=\"navlink\">");
				document.write("<a href=\""+GetPath(level)+"Section1/Section6/Project1"+GetExtension(extension)+"\">Oracle</a>");
			document.write("</span>");
			document.write("<span class=\"navlink\">");
				document.write("<a href=\""+GetPath(level)+"Section1/Section6/Project2"+GetExtension(extension)+"\">MySQL</a>");
			document.write("</span>");
			document.write("<span class=\"navlink\">");
				document.write("<a href=\""+GetPath(level)+"Section1/Section6/Project3"+GetExtension(extension)+"\">Postgres</a>");
			document.write("</span>");
		document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input <= 0)
		{
			document.write("Database Programming");
		}
		else if(input == 1)
		{
			document.write("Oracle Programming");
		}
		else if(input == 2)
		{
			document.write("MySQL Programming");
		}
		else if(input == 3)
		{
			document.write("Postgres Programming");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input <= 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Database Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Oracle Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("MySQL Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Postgres Programming");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align=\"left\">");
		if(input <= 0)
		{
			document.write("This section is dedicated to database based programming.");
		}
		else if(input == 1)
		{
			document.write("This section is dedicated to Oracle based programming.");
		}
		else if(input == 2)
		{
			document.write("This section is dedicated to MySQL based programming.");
		}
		else if(input == 3)
		{
			document.write("This section is dedicated to Postgres based programming.");
		}
	document.write("</p>");
}

function Versions(input)
{
    document.write("<p align=\"left\">");
        		document.write("<br><br>");
		document.write("Other versions of this page are here:<br>");
		if(input == 0)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/index.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/index.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/index.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/index.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/index.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/index.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/index.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/index.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/index.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/index\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/index.html\">Apache SSI</a><br>");
		}
		else if(input == 1)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project1\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\">Apache SSI</a><br>");
		
		}
		else if(input == 2)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project2\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\">Apache SSI</a><br>");
		
		}
		else if(input == 3)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project3\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\">Apache SSI</a><br>");
		
		}
    document.write("</p>");
}