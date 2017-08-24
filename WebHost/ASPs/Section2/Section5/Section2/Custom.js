function Navigation(level, extension)
{
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"'>Gynowars</a>");

	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project2"+GetExtension(extension)+"'>Assault</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project3"+GetExtension(extension)+"'>Mars</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section4/Index"+GetExtension(extension)+"'>Renley</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Index"+GetExtension(extension)+"'>Antarrea</a>");
			Response.Write("<h5>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Index"+GetExtension(extension)+"'>Global</a>");
				Response.Write("</span>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Index"+GetExtension(extension)+"'>Grendol</a>");
					Response.Write("<h5>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Project1"+GetExtension(extension)+"'>Land of the Orcish Empire: Age of Magic</a>");
						Response.Write("</span>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Project2"+GetExtension(extension)+"'>Coliseum: Arena</a>");
						Response.Write("</span>");
					Response.Write("</h5>");
				Response.Write("</span>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section3/Index"+GetExtension(extension)+"'>Utopia</a>");
				Response.Write("</span>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section4/Index"+GetExtension(extension)+"'>Elvia</a>");
				Response.Write("</span>");
			Response.Write("</h5>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Index"+GetExtension(extension)+"'>Editations</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project7"+GetExtension(extension)+"'>Truth</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project8"+GetExtension(extension)+"'>Kingdoms</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project9"+GetExtension(extension)+"'>Terminal World</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project10"+GetExtension(extension)+"'>Monster Office Workplace</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project11"+GetExtension(extension)+"'>Battle Princesses</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project12"+GetExtension(extension)+"'>Sacred Offerings</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project13"+GetExtension(extension)+"'>The Way</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project14"+GetExtension(extension)+"'>Conspiratorium</a>");
	Response.Write("</span>");
	Response.Write("<br>");
}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Grendol");
		}
		else if(input == 1)
		{
			Response.Write("Land of the Orcish Empire: Age of Magic");
		}
		else if(input == 2)
		{
			Response.Write("Coliseum: Arena");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Grendol");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Land of the Orcish Empire: Age of Magic");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Coliseum: Arena");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
		if(input == 0)
		{
			Response.Write("Here are projects based in the Grendol Empire:</br>");
			Response.Write("</br>");
			Response.Write("Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ");
			Response.Write("comprise the Grendol Empire.</br>");
			Response.Write("Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>");
		}
		else if(input == 1)
		{
			Response.Write("Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ");
			Response.Write("comprise the Grendol Empire.");
		}
		else if(input == 2)
		{
			Response.Write("Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.");
		}
	Response.Write("</p>");
}
