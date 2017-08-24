function Navigation(level, extension)
{
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"\">Gynowars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project2"+GetExtension(extension)+"\">Assault</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project3"+GetExtension(extension)+"\">Mars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section4/Index"+GetExtension(extension)+"\">Renley</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section5/Index"+GetExtension(extension)+"\">Antarrea</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section6/Index"+GetExtension(extension)+"\">Editations</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section6/Project1"+GetExtension(extension)+"\">Magic: The Tactical</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section6/Section2/Index"+GetExtension(extension)+"\">Warhammer 40K</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section6/Section2/Project1"+GetExtension(extension)+"\">Mission!</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Index"+GetExtension(extension)+"\">HTKB Armies</a><br><br>");
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
			Response.Write("Warhammer 40K");
		}
		else if(input == 1)
		{
			Response.Write("Mission!");
		}
	Response.Write("</title>");
}

function Header(input)
{
	Response.Write("<h2>");
		if(input == 0)
		{
			Response.Write("Warhammer 40K");
		}
		else if(input == 1)
		{
			Response.Write("Mission!");
		}
	Response.Write("</h2>");
}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			Response.Write("This section is dedicated to projects that edit the Warhammer 40K universe.");
		}
		else if(input == 1)
		{
			Response.Write("This section is dedicated to an adventure RPG project in the Warhammer 40K universe.");
		}
	Response.Write("</p>");
}

function Versions(input)
{
	Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Project1.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Project1.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Project1.html\">Apache SSI</a><br>");
	
	}
    
}