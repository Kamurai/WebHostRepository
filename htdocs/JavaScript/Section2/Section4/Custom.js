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
			document.write("<h5>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section4/Project1.html'>Warring Nations</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section4/Project2.html'>Psychodom: The One Empire</a>");
				document.write("</span>");
			document.write("</h5>");
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
			document.write("Renley");
		}
		else if(input == 1)
		{
			document.write("Warring Nations");
		}
		else if(input == 2)
		{
			document.write("Psychodom: The One Empire");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Renley");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Warring Nations");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Psychodom: The One Empire");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("This section is dedicated to projects centered in the Renley universe.");
		}
		else if(input == 1)
		{
			document.write("Warring Nations is a Tactical RPG involving squad based battles.");
			document.write("Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.");
		}
		else if(input == 2)
		{
			document.write("Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.");
			document.write("The protagonist is tasked with investigating various situations leading ");
			document.write("to a conspiracy about who is really ruling the continent.");
		}
	document.write("</p>");
}
