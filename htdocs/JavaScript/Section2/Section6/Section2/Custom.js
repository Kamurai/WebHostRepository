function Navigation(level)
{
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section1/Index.html\">Gynowars</a>");
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
			document.write("<h5>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\""+GetPath(level)+"Section2/Section6/Project1.html\">Magic: The Tactical</a>");
				document.write("</span>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Index.html\">Warhammer 40K</a>");
						document.write("<h5>");
							document.write("<span class=\"navlink\">");
								document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Project1.html\">Mission!</a>");
							document.write("</span>");
							document.write("<span class=\"navlink\">");
								document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Index.html\">HTKB Armies</a>");
							document.write("</span>");
						document.write("</h5>");
				document.write("</span>");
			document.write("</h5>");
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
			document.write("Warhammer 40K");
		}
		else if(input == 1)
		{
			document.write("Mission!");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Warhammer 40K");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Mission!");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align=\"left\">");
		if(input == 0)
		{
			document.write("This section is dedicated to projects that edit the Warhammer 40K universe.");
		}
		else if(input == 1)
		{
			document.write("This section is dedicated to an adventure RPG project in the Warhammer 40K universe.");
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
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/index.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/index.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/index.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/index.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/index.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/index.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/index.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/index\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/index.html\">Apache SSI</a><br>");
		}
		else if(input == 1)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Project1.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Project1.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Project1.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Project1.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Project1.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Project1.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Project1.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Project1\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Project1.html\">Apache SSI</a><br>");
		
		}
    document.write("</p>");
}