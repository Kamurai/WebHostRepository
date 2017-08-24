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
			Response.Write("Private Projects");
		}
		else if(input == 2)
		{
			Response.Write("Assault CCG");
		}
		else if(input == 3)
		{
			Response.Write("Mars Projects");
		}
		else if(input == 7)
		{
			Response.Write("Truth");
		}
		else if(input == 8)
		{
			Response.Write("Kingdoms");
		}
		else if(input == 9)
		{
			Response.Write("Terminal World");
		}
		else if(input == 10)
		{
			Response.Write("Monster Office Workplace");
		}
		else if(input == 11)
		{
			Response.Write("Battle Princesses");
		}
		else if(input == 12)
		{
			Response.Write("Sacred Offerings");
		}
		else if(input == 13)
		{
			Response.Write("The Way");
		}
		else if(input == 14)
		{
			Response.Write("Conspiratorium");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Private Projects");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Assault CCG");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Mars Projects");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 7)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Truth");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 8)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Kingdoms");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 9)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Terminal World");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 10)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Monster Office Workplace");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 11)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Battle Princesses");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 12)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Sacred Offerings");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 13)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("The Way");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 14)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Conspiratorium");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
		if(input == 0)
		{
			Response.Write("This section is dedicated to HTKB projects");
		}
		else if(input == 2)
		{
			Response.Write("This section is dedicated CCG project 'Assault'.");
		}
		else if(input == 3)
		{
			Response.Write("This section is dedicated to the Mars centered project 'Opposition'.");
		}
		else if(input == 7)
		{
			Response.Write("This section is dedicated to the MMO RTS project 'Truth'.  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.");
		}
		else if(input == 8)
		{
			Response.Write("This section is dedicated to the digital board game project 'Kingdoms'.  Explore the world's Kingdoms, get rich, get strong and conquer.");
		}
		else if(input == 9)
		{
			Response.Write("This section is dedicated to the simulation MMO centered project 'Terminal World'.  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat");
			Response.Write("the zombies?  Can you survive?");
		}
		else if(input == 10)
		{
			Response.Write("This section is dedicated to the card and board game project 'Monster Office Workplace'.  These monsters mean serious business.");
			Response.Write("Can you earn the most credit and smooze your way into a promotion?");
		}
		else if(input == 11)
		{
			Response.Write("This section is dedicated to the card game project 'Battle Princesses'.  Ever wanted to see your favorite princess battle for the kingdom?");
			Response.Write("These princess aren't your helpless maidens, but valiant warriors themselves.");
		}
		else if(input == 12)
		{
			Response.Write("This section is dedicated to the board game project 'Sacred Offerings'.  Being a god is hard, you have to eat, but");
			Response.Write("don't want to fall out favor with the people more than the other deities.");
			Response.Write("Draw people to worship you, but be discerning about who is sacrificed.");
		}
		else if(input == 13)
		{
			Response.Write("This section is dedicated to the card game project 'The Way'.  You seek to find enlightment by contemplating the elements.");
			Response.Write("Escape the binds of the world and the board to reach enlightment and win.");
		}
		else if(input == 14)
		{
			Response.Write("This section is dedicated to the board game project 'Conspiratorium'.");
			Response.Write("A game of assassins and CIA, you must remember who is friend and who is not.");
		}
	Response.Write("</p>");
}
