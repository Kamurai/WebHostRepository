function Navigation(level)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section1/Index.html\">Gynowars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project2.html\">Assault</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project3.html\">Mars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section4/Index.html\">Renley</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section5/Index.html\">Antarrea</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section1/Index.html\">Global</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section2/Index.html\">Grendol</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section3/Index.html\">Utopia</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section5/Section4/Index.html\">Elvia</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section6/Index.html\">Editations</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project7.html\">Truth</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project8.html\">Kingdoms</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project9.html\">Terminal World</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project10.html\">Monster Office Workplace</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project11.html\">Battle Princesses</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project12.html\">Sacred Offerings</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project13.html\">The Way</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project14.html\">Conspiratorium</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project15.html\">Conversion</a><br><br>");

}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Antarrea Projects");
		}
	document.write("</title>");
}

function Header(input)
{
	document.write("<h2>");
		if(input == 0)
		{
			document.write("Antarrea Projects");
		}
	document.write("</h2>");
}

function Content(input)
{
	document.write("<p id=\"idCenterContent\">");
	if(input == 0)
	{
				document.write("Global:");
		document.write("<br/>");
		document.write("<br/>");
			document.write("Here are projects based in the Antarrea universe:</br>");
			document.write("</br>");
			document.write("Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>");
			document.write("Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>");
			document.write("Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>");
			document.write("Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>");
			document.write("Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>");
			document.write("Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>");
		document.write("<br/>");
		document.write("<br/>");
				document.write("Grendol:");
		document.write("<br/>");
		document.write("<br/>");
			document.write("Here are projects based in the Grendol universe:</br>");
			document.write("</br>");
			document.write("Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>");
			document.write("Grendol: Coliseum: Arena:                         CCG.</br>");
		document.write("<br/>");
		document.write("<br/>");
				document.write("Utopia:");
		document.write("<br/>");
		document.write("<br/>");
			document.write("Here are projects based in the Utopia universe:</br>");
			document.write("</br>");
			document.write("Avia: Elemental Angels: Adventure game with RPG elements.</br>");
		document.write("<br/>");
		document.write("<br/>");
				document.write("Elvia:");
		document.write("<br/>");
		document.write("<br/>");
			document.write("Here are projects based in the Elvia universe:</br>");
			document.write("</br>");
			document.write("Nine Card: Tactical card game.</br>");
		
	}

}

function Versions(input)
{
	document.write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/index.asp\">ASP Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/index.html\">Apache SSI</a><br>");
	}

}