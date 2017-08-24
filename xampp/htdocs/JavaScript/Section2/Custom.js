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
			document.write("Private Projects");
		}
		else if(input == 2)
		{
			document.write("Assault CCG");
		}
		else if(input == 3)
		{
			document.write("Mars Projects");
		}
		else if(input == 7)
		{
			document.write("Truth");
		}
		else if(input == 8)
		{
			document.write("Kingdoms");
		}
		else if(input == 9)
		{
			document.write("Terminal World");
		}
		else if(input == 10)
		{
			document.write("Monster Office Workplace");
		}
		else if(input == 11)
		{
			document.write("Battle Princesses");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Private Projects");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Assault CCG");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Mars Projects");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 7)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Truth");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 8)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Kingdoms");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 9)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Terminal World");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 10)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Monster Office Workplace");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 11)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Battle Princesses");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("This section is dedicated to HTKB projects.");
		}
		else if(input == 2)
		{
			document.write("This section is dedicated CCG project 'Assault'.");
		}
		else if(input == 3)
		{
			document.write("This section is dedicated to the Mars centered project 'Opposition'.");
		}
		else if(input == 7)
		{
			document.write("This section is dedicated to the MMO RTS project 'Truth'.  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.");
		}
		else if(input == 8)
		{
			document.write("This section is dedicated to the digital board game project 'Kingdoms'.  Explore the world's Kingdoms, get rich, get strong and conquer.");
		}
		else if(input == 9)
		{
			document.write("This section is dedicated to the simulation MMO centered project 'Terminal World'.  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat");
			document.write("the zombies?  Can you survive?");
		}
		else if(input == 10)
		{
			document.write("This section is dedicated to the card and board game project 'Monster Office Workplace'.  These monsters mean serious business.");
			document.write("Can you earn the most credit and smooze your way into a promotion?");
		}
		else if(input == 11)
		{
			document.write("This section is dedicated to the card game project 'Battle Princesses'.  Ever wanted to see your favorite princess battle for the kingdom?");
			document.write("These princess aren't your helpless maidens, but valiant warriors themselves.");
		}
	document.write("</p>");
}
