function Navigation(level)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section1/Index.html'>Gynowars</a>");

	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project2.html'>Assault</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project3.html'>Mars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section4/Index.html'>Renley</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section5/Index.html'>Antarrea</a>");
			document.write("<h5>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Index.html'>Global</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Index.html'>Grendol</a>");
					document.write("<h5>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Project1.html'>Land of the Orcish Empire: Age of Magic</a>");
						document.write("</span>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Project2.html'>Coliseum: Arena</a>");
						document.write("</span>");
					document.write("</h5>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section3/Index.html'>Utopia</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section4/Index.html'>Elvia</a>");
				document.write("</span>");
			document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section6/Index.html'>Editations</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project7.html'>Truth</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project8.html'>Kingdoms</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project9.html'>Terminal World</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project10.html'>Monster Office Workplace</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project11.html'>Battle Princesses</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project12.html'>Sacred Offerings</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project13.html'>The Way</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project14.html'>Conspiratorium</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Grendol");
		}
		else if(input == 1)
		{
			document.write("Land of the Orcish Empire: Age of Magic");
		}
		else if(input == 2)
		{
			document.write("Coliseum: Arena");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Grendol");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Land of the Orcish Empire: Age of Magic");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Coliseum: Arena");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("Here are projects based in the Grendol Empire:</br>");
			document.write("</br>");
			document.write("Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ");
			document.write("comprise the Grendol Empire.</br>");
			document.write("Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>");
		}
		else if(input == 1)
		{
			document.write("Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ");
			document.write("comprise the Grendol Empire.");
		}
		else if(input == 2)
		{
			document.write("Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.");
		}
	document.write("</p>");
}
