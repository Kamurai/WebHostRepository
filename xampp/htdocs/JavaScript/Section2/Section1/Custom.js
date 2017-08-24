function Navigation(level)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section1/Index.html'>Gynowars</a>");
			document.write("<h5>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section1/Project1.html'>Gynowars RPG</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section1/Project2.html'>Gynowars: Battle Arena CCG</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section1/Project3.html'>Gynowars: Crash Ball</a>");
				document.write("</span>");
			document.write("</h5>");
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
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("This section is dedicated to projects centered in the Gynowars universe.");
		}
		else if(input == 1)
		{
			document.write("The Gynowars RPG is a 'pokemon-like' tactical RPG.");
			document.write("The protagonist uses creatures to fight battles against other creatures to progress through the storyline.");
		}
		else if(input == 2)
		{
			document.write("Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ");
			document.write("in an arena-like environment.  There are several scenarios to run, to include:");
			document.write("</br>");
			document.write("'Death Match', 'Ring the Bell', and 'Head Hunt'.");
		}
		else if(input == 3)
		{
			document.write("Gynowars: Crash Ball is a turn based strategy board game.  Basically it's gridiron with Gynos.");
		}
	document.write("</p>");
}
