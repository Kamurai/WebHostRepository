function Navigation(level, extension)
{
	Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project1.html\">Basic HTML</a><br><br>");
	Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section2/Index"+GetExtension(extension)+"\">Javascript</a><br><br>");
	Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project3.shtml\">Perl</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"\">Java</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.Net</a><br><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml\">Webpage Application</a><br><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx\">Webform Application</a><br><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1_5/Project3\">MVC Application</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a><br><br>");
	Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");

}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("ASP.NET Programming");
		}
	Response.Write("</title>");
}

function Header(input)
{
	Response.Write("<h2>");
		if(input == 0)
		{
			Response.Write("ASP.NET Programming");
		}
	Response.Write("</h2>");
}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			Response.Write("This section is dedicated to ASP.NET programming.");
		}
	Response.Write("</p>");
}

function Versions(input)
{
	Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section5/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section5/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section5/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section5/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section5/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section5/index.html\">Apache SSI</a><br>");
	}
    
}