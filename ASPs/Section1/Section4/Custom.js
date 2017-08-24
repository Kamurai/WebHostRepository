function Navigation(level, extension)
{
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project1.html\">Basic HTML</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section1/Section2/Index"+GetExtension(extension)+"\">Javascript</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project3.shtml\">Perl</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"\">Java</a>");
		Response.Write("<h5>");
			Response.Write("<span class=\"navlink\">");
				Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp\">JSP Programming</a>");
			Response.Write("</span>");
			Response.Write("<span class=\"navlink\">");
				Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml\">JSF Programming</a>");
			Response.Write("</span>");
		Response.Write("</h5>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.Net</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a>");
	Response.Write("</span>");
	Response.Write("<br>");
}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Java Programming");
		}

	Response.Write("</title>");
}

function Header(input)
{
	if(input == 0)
	{
		Response.Write("<h2>");
			Response.Write("<u>");
				Response.Write("Java Programming");
			Response.Write("</u>");
		Response.Write("</h2>");
	}

}

function Content(input)
{
	Response.Write("<p align=\"left\">");
		if(input == 0)
		{
			Response.Write("This section is dedicated to Java based programming.");
		}

	Response.Write("</p>");
}

function Versions(input)
{
    Response.Write("<p align=\"left\">");
        		Response.Write("<br><br>");
		Response.Write("Other versions of this page are here:<br>");
		if(input == 0)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section4/index.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section4/index.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section4/index.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section4/index.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section4/index.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/index.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/index.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section4/index.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section4/index.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section4/index\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section4/index.html\">Apache SSI</a><br>");
		}
    Response.Write("</p>");
}