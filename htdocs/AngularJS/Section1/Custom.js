function Navigation(level, extension)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level+1)+"Section1/Project1.html'>Basic HTML</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level+1)+"Section1/Project1.php'>PHP</a>");
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
		document.write("<a href='"+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"'>Java</a>"); //JSP & JSF
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.Net</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>"); //XML
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Project7"+GetExtension(extension)+"'>HTML5</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Project8"+GetExtension(extension)+"'>XSL</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Project9"+GetExtension(extension)+"'>XML DOM</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input <= 0)
		{
			document.write("Web Programming");
		}
		else if(input == 2)
		{
			document.write("Javascript Programming");
		}
		else if(input == 3)
		{
			document.write("Perl Programming");
		}
		else if(input == 4)
		{
			document.write("Java Programming");
		}
		else if(input == 7)
		{
			document.write("HTML5");
		}
		else if(input == 8)
		{
			document.write("XSL");
		}
		else if(input == 9)
		{
			document.write("XML DOM");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Web Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Javascript Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Perl Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 4)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Java Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 7)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("HTML5");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 8)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("XLS");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 9)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("XML DOM");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input <= 0)
		{
			document.write("This section is dedicated to web-based programming.");
		}
		else if(input == 2)
		{
			document.write("This section is dedicated to Javascript based programming.");
		}
		else if(input == 3)
		{
			document.write("This section is dedicated to Perl based programming.");
		}
		else if(input == 4)
		{
			document.write("This section is dedicated to Java based programming.");
		}
		else if(input == 7)
		{
			document.write("This section is dedicated to HTML5 based programming.");
		}
		else if(input == 8)
		{
			document.write("This section is dedicated to XSL based programming.");
		}
		else if(input == 9)
		{
			document.write("This section is dedicated to XML DOM based programming.");
		}
	document.write("</p>");
}
