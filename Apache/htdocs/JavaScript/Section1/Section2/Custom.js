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
		document.write("<h5>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(level)+"Section2/Project1"+GetExtension(extension)+"'>HTML Javascript</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp'>ASP Javascript</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx'>ASP.NET Javascript</a>");
			document.write("</span>");
		document.write("</h5>");
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
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Javascript");
		}
		else if(input == 1)
		{
			document.write("HTML Javascript");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Javascript");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("HTML Javascript");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("This section is dedicated to Javascript based programming.");
		}
		else if(input == 1)
		{
			document.write("This section is dedicated to HTML Javascript based programming.");
		}
	document.write("</p>");
}
