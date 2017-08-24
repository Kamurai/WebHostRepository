function Navigation(level, extension)
{
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"\">Gynowars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project2"+GetExtension(extension)+"\">Assault</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project3"+GetExtension(extension)+"\">Mars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section4/Index"+GetExtension(extension)+"\">Renley</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section5/Index"+GetExtension(extension)+"\">Antarrea</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section1/Index"+GetExtension(extension)+"\">Global</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section2/Index"+GetExtension(extension)+"\">Grendol</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section3/Index"+GetExtension(extension)+"\">Utopia</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section3/Project1"+GetExtension(extension)+"\">Avia:Elemental Angels</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section4/Index"+GetExtension(extension)+"\">Elvia</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section6/Index"+GetExtension(extension)+"\">Editations</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project7"+GetExtension(extension)+"\">Truth</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project8"+GetExtension(extension)+"\">Kingdoms</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project9"+GetExtension(extension)+"\">Terminal World</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project10"+GetExtension(extension)+"\">Monster Office Workplace</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project11"+GetExtension(extension)+"\">Battle Princesses</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project12"+GetExtension(extension)+"\">Sacred Offerings</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project13"+GetExtension(extension)+"\">The Way</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project14"+GetExtension(extension)+"\">Conspiratorium</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project15"+GetExtension(extension)+"\">Conversion</a><br><br>");

}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Utopia");
		}
		else if(input == 1)
		{
			Response.Write("Elemental Angels");
		}
	Response.Write("</title>");
}

function Header(input)
{
	Response.Write("<h2>");
		if(input == 0)
		{
			Response.Write("Utopia");
		}
		else if(input == 1)
		{
			Response.Write("Elemental Angels");
		}
	Response.Write("</h2>");
}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			Response.Write("Here are projects based in the Utopia Nation:</br>");
			Response.Write("</br>");
			Response.Write("Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>");
		}
		else if(input == 1)
		{
			Response.Write("Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>");
		}
	Response.Write("</p>");
}

function Versions(input)
{
    Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Project1.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/Project1.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Project1.html\">Apache SSI</a><br>");
	
	}
    
}