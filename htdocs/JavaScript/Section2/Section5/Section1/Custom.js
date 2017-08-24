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
					document.write("<h5>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project1.html'>Team Tactial: Crash Ball</a>");
						document.write("</span>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project2.html'>Wars of Antarrea</a>");
						document.write("</span>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project3.html'>Revolutions: Invading Nations</a>");
						document.write("</span>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project4.html'>Revolutions: Rebellion Against the Fist</a>");
						document.write("</span>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project5.html'>Revolutions: Return to Arms</a>");
						document.write("</span>");
						document.write("<span class='navlink'>");
							document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Project6.html'>Revolutions: Post Wars</a>");
						document.write("</span>");
					document.write("</h5>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Index.html'>Grendol</a>");
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
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project15.html'>Conversion</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Global Antarrea");
		}
		else if(input == 1)
		{
			document.write("Team Tactical: Crash Ball");
		}
		else if(input == 2)
		{
			document.write("Wars of Antarrea");
		}
		else if(input == 3)
		{
			document.write("Revolutions: Invading Nations");
		}
		else if(input == 4)
		{
			document.write("Revolutions: Rebellion Against the Fist");
		}
		else if(input == 5)
		{
			document.write("Revolutions: Return to Arms");
		}
		else if(input == 6)
		{
			document.write("Revolutions: Post Wars");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Global Antarrea");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Team Tactical: Crash Ball");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Wars of Antarrea");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Revolutions: Invading Nations");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 4)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Revolutions: Rebellion Against the Fist");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 5)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Revolutions: Return to Arms");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 6)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Revolutions: Post Wars");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("Here are projects based in the Antarrea universe:</br>");
			document.write("</br>");
			document.write("Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>");
			document.write("Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>");
			document.write("Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>");
			document.write("Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>");
			document.write("Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>");
			document.write("Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>");
		}
		else if(input == 1)
		{
			document.write("Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>");
		}
		else if(input == 2)
		{
			document.write("Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>");
		}
		else if(input == 3)
		{
			document.write("Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>");
		}
		else if(input == 4)
		{
			document.write("Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>");
		}
		else if(input == 5)
		{
			document.write("Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>");
		}
		else if(input == 6)
		{
			document.write("Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>");
		}
	document.write("</p>");
}
