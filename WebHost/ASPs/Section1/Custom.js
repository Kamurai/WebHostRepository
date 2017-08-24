function Navigation(level, extension)
{
		Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Project1.html\">Basic HTML</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section2/Index"+GetExtension(extension)+"\">Javascript</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Project3"+GetExtension(extension)+"\">Perl</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"\">Java</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.Net</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");
	
}

function Title(input)
{
	Response.Write("<title>");
		if(input <= 0)
		{
			Response.Write("Web Programming");
		}
	Response.Write("</title>");
}

function Header(input)
{
	Response.Write("<h2>");
		if(input == 0)
		{
			Response.Write("Web Programming");
		}
	Response.Write("</h2>");
}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(input <= 0)
		{
			Response.Write("This section is dedicated to web-based programming.");
		}
	Response.Write("</p>");
}

function Versions(input)
{
	Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br>");
	}
    
}
