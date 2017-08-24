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
		document.write("<a href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.NET</a>");
			document.write("<h5>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml\">Webpage Application</a>");
				document.write("</span>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx\">Webform Application</a>");
				document.write("</span>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1_5/Project3\">MVC Application</a>");
				document.write("</span>");
			document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a>");
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
		if(input == 0)
		{
			document.write("ASP.NET Programming");
		}
	document.write("</title>");
}

function Header(input)
{
	if(input == 0)
	{
		document.write("<h2>");
			document.write("<u>");
				document.write("ASP.NET Programming");
			document.write("</u>");
		document.write("</h2>");
	}

}

function Content(input)
{
	document.write("<p align=\"left\">");
		if(input == 0)
		{
			document.write("This section is dedicated to ASP.NET programming.");
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
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section5/index.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section5/index.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section5/index.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section5/index.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/index.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/index.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section5/index\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section5/index.html\">Apache SSI</a><br>");
		}
    document.write("</p>");
}