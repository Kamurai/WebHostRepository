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
		document.write("<a href='"+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"'>Java</a>");
		document.write("<h5>");
			document.write("<span class='navlink'>");
				document.write("<a href='http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp'>JSP Programming</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml'>JSF Programming</a>");
			document.write("</span>");
		document.write("</h5>");
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
			document.write("Java Programming");
		}
		else if(input == 1)
		{
			document.write("JSP Programming");
		}
		else if(input == 2)
		{
			document.write("JSF Programming");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Java Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("JSP Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("JSF Programming");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input <= 0)
		{
			document.write("This section is dedicated to Java based programming.");
		}
		else if(input == 1)
		{
			document.write("This section is dedicated to JSP based programming.");
		}
		else if(input == 2)
		{
			document.write("This section is dedicated to JSF based programming.");
		}

	document.write("</p>");
}
