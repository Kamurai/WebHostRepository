function Navigation(level, extension)
{
	Response.Write("<span class=\"navlink\">");
		Response.Write("<a href=\""+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"\">Gynowars</a>");
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
			Response.Write("<h5>");
				Response.Write("<span class=\"navlink\">");
					Response.Write("<a href=\""+GetPath(level)+"Section2/Section4/Project1"+GetExtension(extension)+"\">Warring Nations</a>");
				Response.Write("</span>");
				Response.Write("<span class=\"navlink\">");
					Response.Write("<a href=\""+GetPath(level)+"Section2/Section4/Project2"+GetExtension(extension)+"\">Psychodom: The One Empire</a>");
				Response.Write("</span>");
			Response.Write("</h5>");
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
			Response.Write("Renley");
		}
		else if(input == 1)
		{
			Response.Write("Warring Nations");
		}
		else if(input == 2)
		{
			Response.Write("Psychodom: The One Empire");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Renley");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Warring Nations");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Psychodom: The One Empire");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align=\"left\">");
		if(input == 0)
		{
			Response.Write("This section is dedicated to projects centered in the Renley universe.");
		}
		else if(input == 1)
		{
			Response.Write("Warring Nations is a Tactical RPG involving squad based battles.");
			Response.Write("Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.");
		}
		else if(input == 2)
		{
			Response.Write("Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.");
			Response.Write("The protagonist is tasked with investigating various situations leading ");
			Response.Write("to a conspiracy about who is really ruling the continent.");
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
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/index.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/index.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/index.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/index.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/index.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/index.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/index.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/index.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/index.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/index\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/index.html\">Apache SSI</a><br>");
		}
		else if(input == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project1.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project1.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project1.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project1.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project1.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project1.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project1\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project1.html\">Apache SSI</a><br>");
		
		}
		else if(input == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.html\">HTML</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.php\">PHP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project2.aspx\">ASP.NET Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project2.asp\">ASP Javascript</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.shtml\">Perl</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project2.jsp\">JSP</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project2.xhtml\">JSF</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project2.cshtml\">ASP.NET Web App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project2.aspx\">ASP.NET Webform</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project2\">ASP.NET MVC App</a><br>");
			Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project2.html\">Apache SSI</a><br>");
		
		}
    Response.Write("</p>");
}