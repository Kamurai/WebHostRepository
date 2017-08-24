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
					Response.Write("<h5>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project1"+GetExtension(extension)+"'>Team Tactial: Crash Ball</a>");
						Response.Write("</span>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project2"+GetExtension(extension)+"'>Wars of Antarrea</a>");
						Response.Write("</span>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project3"+GetExtension(extension)+"'>Revolutions: Invading Nations</a>");
						Response.Write("</span>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project4"+GetExtension(extension)+"'>Revolutions: Rebellion Against the Fist</a>");
						Response.Write("</span>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project5"+GetExtension(extension)+"'>Revolutions: Return to Arms</a>");
						Response.Write("</span>");
						Response.Write("<span class='navlink'>");
							Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project6"+GetExtension(extension)+"'>Revolutions: Post Wars</a>");
						Response.Write("</span>");
					Response.Write("</h5>");
				Response.Write("</span>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Index"+GetExtension(extension)+"'>Grendol</a>");
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
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Global Antarrea");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Team Tactical: Crash Ball");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Wars of Antarrea");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Revolutions: Invading Nations");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 4)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Revolutions: Rebellion Against the Fist");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 5)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Revolutions: Return to Arms");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 6)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Revolutions: Post Wars");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
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
