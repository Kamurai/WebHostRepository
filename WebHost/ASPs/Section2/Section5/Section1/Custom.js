function Navigation(level, extension)
{
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"\">Gynowars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project2"+GetExtension(extension)+"\">Assault</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project3"+GetExtension(extension)+"\">Mars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section4/Index"+GetExtension(extension)+"\">Renley</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section5/Index"+GetExtension(extension)+"\">Antarrea</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section1/Index"+GetExtension(extension)+"\">Global</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section1/Project1"+GetExtension(extension)+"\">Team Tactial: Crash Ball</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section1/Project2"+GetExtension(extension)+"\">Wars of Antarrea</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section1/Project3"+GetExtension(extension)+"\">Revolutions: Invading Nations</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section1/Project4"+GetExtension(extension)+"\">Revolutions: Rebellion Against the Fist</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section1/Project5"+GetExtension(extension)+"\">Revolutions: Return to Arms</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section5/Section1/Project6"+GetExtension(extension)+"\">Revolutions: Post Wars</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section2/Index"+GetExtension(extension)+"\">Grendol</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section3/Index"+GetExtension(extension)+"\">Utopia</a><br><br>");
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
			Response.Write("Global Antarrea");
		}
		else if(input == 1)
		{
			Response.Write("Team Tactical: Crash Ball");
		}
		else if(input == 2)
		{
			Response.Write("Wars of Antarrea");
		}
		else if(input == 3)
		{
			Response.Write("Revolutions: Invading Nations");
		}
		else if(input == 4)
		{
			Response.Write("Revolutions: Rebellion Against the Fist");
		}
		else if(input == 5)
		{
			Response.Write("Revolutions: Return to Arms");
		}
		else if(input == 6)
		{
			Response.Write("Revolutions: Post Wars");
		}
	Response.Write("</title>");
}

function Header(input)
{
	Response.Write("<h2>");
		if(input == 0)
		{
			Response.Write("Global Antarrea");
		}
		else if(input == 1)
		{
			Response.Write("Team Tactical: Crash Ball");
		}
		else if(input == 2)
		{
			Response.Write("Wars of Antarrea");
		}
		else if(input == 3)
		{
			Response.Write("Revolutions: Invading Nations");
		}
		else if(input == 4)
		{
			Response.Write("Revolutions: Rebellion Against the Fist");
		}
		else if(input == 5)
		{
			Response.Write("Revolutions: Return to Arms");
		}
		else if(input == 6)
		{
			Response.Write("Revolutions: Post Wars");
		}
	Response.Write("</h2>");
}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			Response.Write("Here are projects based in the Antarrea universe:</br>");
			Response.Write("</br>");
			Response.Write("Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>");
			Response.Write("Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>");
			Response.Write("Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>");
			Response.Write("Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>");
			Response.Write("Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>");
			Response.Write("Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>");
		}
		else if(input == 1)
		{
			Response.Write("Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>");
		}
		else if(input == 2)
		{
			Response.Write("Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>");
		}
		else if(input == 3)
		{
			Response.Write("Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>");
		}
		else if(input == 4)
		{
			Response.Write("Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>");
		}
		else if(input == 5)
		{
			Response.Write("Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>");
		}
		else if(input == 6)
		{
			Response.Write("Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>");
		}
	Response.Write("</p>");
}
function Versions(input)
{
	Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project1.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project1.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project1.html\">Apache SSI</a><br>");
	
	}
	else if(input == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project2.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project2.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project2.html\">Apache SSI</a><br>");
	
	}
	else if(input == 3)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project3.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project3.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project3.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project3.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project3.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project3.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project3\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project3.html\">Apache SSI</a><br>");
	
	}
	else if(input == 4)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project4.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project4.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project4.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project4.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project4.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project4.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project4\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project4.html\">Apache SSI</a><br>");
	
	}
	else if(input == 5)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project5.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project5.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project5.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project5.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project5.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project5.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project5\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project5.html\">Apache SSI</a><br>");
	
	}
	else if(input == 6)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project6.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project6.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project6.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project6.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project6.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project6.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project6\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project6.html\">Apache SSI</a><br>");
	
	}
    
}