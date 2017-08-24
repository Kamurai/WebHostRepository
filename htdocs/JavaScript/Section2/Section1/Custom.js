function Navigation(level)
{
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section1/Index.html\">Gynowars</a>");
			document.write("<h5>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\""+GetPath(level)+"Section2/Section1/Project1.html\">Gynowars RPG</a>");
				document.write("</span>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\""+GetPath(level)+"Section2/Section1/Project2.html\">Gynowars: Battle Arena CCG</a>");
				document.write("</span>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\""+GetPath(level)+"Section2/Section1/Project3.html\">Gynowars: Crash Ball</a>");
				document.write("</span>");
			document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project2.html\">Assault</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project3.html\">Mars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section4/Index.html\">Renley</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section5/Index.html\">Antarrea</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section6/Index.html\">Editations</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project7.html\">Truth</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project8.html\">Kingdoms</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project9.html\">Terminal World</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project10.html\">Monster Office Workplace</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project11.html\">Battle Princesses</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project12.html\">Sacred Offerings</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project13.html\">The Way</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project14.html\">Conspiratorium</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project15.html\">Conversion</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Gynowars");
		}
		else if(input == 1)
		{
			document.write("Gynowars RPG");
		}
		else if(input == 2)
		{
			document.write("Gynowars: Battle Arena CCG");
		}
		else if(input == 3)
		{
			document.write("Gynowars: Crash Ball");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Gynowars");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Gynowars RPG");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Gynowars: Battle Arena CCG");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Gynowars: Crash Ball");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align=\"left\">");
		if(input == 0)
		{
			document.write("This section is dedicated to projects centered in the Gynowars universe.");
		}
		else if(input == 1)
		{
			document.write("The Gynowars RPG is a \"pokemon-like\" tactical RPG.");
			document.write("The protagonist uses creatures to fight battles against other creatures to progress through the storyline.");
		}
		else if(input == 2)
		{
			document.write("Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ");
			document.write("in an arena-like environment.  There are several scenarios to run, to include:");
			document.write("</br>");
			document.write("\"Death Match\", \"Ring the Bell\", and \"Head Hunt\".");
		}
		else if(input == 3)
		{
			document.write("Gynowars: Crash Ball is a turn based strategy board game.  Basically it\"s gridiron with Gynos.");
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
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/index.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/index.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/index.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/index.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/index.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/index.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/index.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/index.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/index.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/index\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/index.html\">Apache SSI</a><br>");
		}
		else if(input == 1)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project1.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project1.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project1.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project1.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project1.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project1.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project1.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project1\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project1.html\">Apache SSI</a><br>");
		
		}
		else if(input == 2)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project2.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project2.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project2.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project2.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project2.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project2.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project2.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project2\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project2.html\">Apache SSI</a><br>");
		
		}
		else if(input == 3)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project3.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section1/Project3.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section1/Project3.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project3.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project3.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project3.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project3.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project3\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section1/Project3.html\">Apache SSI</a><br>");
		
		}
    document.write("</p>");
}