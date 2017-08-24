function Navigation(level, extension)
{
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"\">Gynowars</a>");
			Response.Write("<h5>");
				Response.Write("<span class=\"navlink\">");
					Response.Write("<a href=\""+GetPath(level)+"Section2/Section1/Project1"+GetExtension(extension)+"\">Gynowars RPG</a>");
				Response.Write("</span>");
				Response.Write("<span class=\"navlink\">");
					Response.Write("<a href=\""+GetPath(level)+"Section2/Section1/Project2"+GetExtension(extension)+"\">Gynowars: Battle Arena CCG</a>");
				Response.Write("</span>");
				Response.Write("<span class=\"navlink\">");
					Response.Write("<a href=\""+GetPath(level)+"Section2/Section1/Project3"+GetExtension(extension)+"\">Gynowars: Crash Ball</a>");
				Response.Write("</span>");
			Response.Write("</h5>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project2"+GetExtension(extension)+"\">Assault</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project3"+GetExtension(extension)+"\">Mars</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Section4/Index"+GetExtension(extension)+"\">Renley</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Section5/Index"+GetExtension(extension)+"\">Antarrea</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Section6/Index"+GetExtension(extension)+"\">Editations</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project7"+GetExtension(extension)+"\">Truth</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project8"+GetExtension(extension)+"\">Kingdoms</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project9"+GetExtension(extension)+"\">Terminal World</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project10"+GetExtension(extension)+"\">Monster Office Workplace</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project11"+GetExtension(extension)+"\">Battle Princesses</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project12"+GetExtension(extension)+"\">Sacred Offerings</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project13"+GetExtension(extension)+"\">The Way</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project14"+GetExtension(extension)+"\">Conspiratorium</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Project15"+GetExtension(extension)+"\">Conversion</a>");
	Response.Write("</span>");
	Response.Write("<br>");
}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Gynowars");
		}
		else if(input == 1)
		{
			Response.Write("Gynowars RPG");
		}
		else if(input == 2)
		{
			Response.Write("Gynowars: Battle Arena CCG");
		}
		else if(input == 3)
		{
			Response.Write("Gynowars: Crash Ball");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Gynowars");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Gynowars RPG");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Gynowars: Battle Arena CCG");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Gynowars: Crash Ball");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align=\"left\">");
		if(input == 0)
		{
			Response.Write("This section is dedicated to projects centered in the Gynowars universe.");
		}
		else if(input == 1)
		{
			Response.Write("The Gynowars RPG is a \"pokemon-like\" tactical RPG.");
			Response.Write("The protagonist uses creatures to fight battles against other creatures to progress through the storyline.");
		}
		else if(input == 2)
		{
			Response.Write("Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ");
			Response.Write("in an arena-like environment.  There are several scenarios to run, to include:");
			Response.Write("</br>");
			Response.Write("\"Death Match\", \"Ring the Bell\", and \"Head Hunt\".");
		}
		else if(input == 3)
		{
			Response.Write("Gynowars: Crash Ball is a turn based strategy board game.  Basically it\"s gridiron with Gynos.");
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
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/index.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/index.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/index.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/index.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/index.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/index.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/index.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/index.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/index.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/index\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/index.html\">Apache SSI</a><br>");
		}
		else if(input == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project1.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project1.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project1.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project1.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project1.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project1.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project1\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project1.html\">Apache SSI</a><br>");
		
		}
		else if(input == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project2.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project2.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project2.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project2.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project2.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project2.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project2\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project2.html\">Apache SSI</a><br>");
		
		}
		else if(input == 3)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project3.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project3.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project3.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project3.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project3.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project3.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project3\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project3.html\">Apache SSI</a><br>");
		
		}
    Response.Write("</p>");
}