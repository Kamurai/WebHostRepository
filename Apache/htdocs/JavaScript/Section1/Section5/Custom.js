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
		document.write("<a href='"+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.NET</a>");
			document.write("<h5>");
				document.write("<span class='navlink'>");
					document.write("<a href='http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml'>Webpage Application</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx'>Webform Application</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='http://htkb.dyndns.org:81/MVC/Section1_5/Project3'>MVC Application</a>");
				document.write("</span>");
			document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Web Programming");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("ASP.NET Programming");
				document.write("</u>");
			document.write("</h2>");
		}

}

function Content(input)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("This section is dedicated to ASP.NET programming.");
		}
	document.write("</p>");
}
