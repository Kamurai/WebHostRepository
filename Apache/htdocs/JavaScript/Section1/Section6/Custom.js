function Navigation(level, extension)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level+1)+"Section1/Project1.html'>Basic HTML</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level+1)+"Section3/Project1.php'>PHP</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Section2/Index.html'>Javascript</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level+1)+"Section1/Project3.shtml'>Perl</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Project4"+GetExtension(extension)+"'>XHTML</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.Net</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>");
		document.write("<h5>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(level)+"Section1/Section6/Project1"+GetExtension(extension)+"'>Oracle</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(level)+"Section1/Section6/Project2"+GetExtension(extension)+"'>MySQL</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(level)+"Section1/Section6/Project3"+GetExtension(extension)+"'>Postgres</a>");
			document.write("</span>");
		document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input <= 0)
		{
			document.write("Database Programming");
		}
		else if(input == 1)
		{
			document.write("Oracle Programming");
		}
		else if(input == 2)
		{
			document.write("MySQL Programming");
		}
		else if(input == 3)
		{
			document.write("Postgres Programming");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input <= 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Database Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Oracle Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("MySQL Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Postgres Programming");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input <= 0)
		{
			document.write("This section is dedicated to database based programming.");
		}
		else if(input == 1)
		{
			document.write("This section is dedicated to Oracle based programming.");
		}
		else if(input == 2)
		{
			document.write("This section is dedicated to MySQL based programming.");
		}
		else if(input == 3)
		{
			document.write("This section is dedicated to Postgres based programming.");
		}
	document.write("</p>");
}
