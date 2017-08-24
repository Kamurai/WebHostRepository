function Navigation(level, extension)
{
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='http://htkb.dyndns.org/Section1/Project1.html'>Basic HTML</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='http://htkb.dyndns.org/Section1/Project1.php'>PHP</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Section2/Index"+GetExtension(extension)+"'>Javascript</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='http://htkb.dyndns.org/Section1/Project3.shtml'>Perl</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Project4"+GetExtension(extension)+"'>XHTML</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.Net</a>");
			Response.Write("<h5>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml'>Webpage Application</a>");
				Response.Write("</span>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx'>Webform Application</a>");
				Response.Write("</span>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='http://htkb.dyndns.org:81/MVC/Section1_5/Project3'>MVC Application</a>");
				Response.Write("</span>");
			Response.Write("</h5>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>");
	Response.Write("</span>");
	Response.Write("<br>");
}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Web Programming");
		}
		else if(input == 2)
		{
			Response.Write("Javascript Programming");
		}
		else if(input == 3)
		{
			Response.Write("Perl Programming");
		}
		else if(input == 4)
		{
			Response.Write("XHTML Programming");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Web Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Javascript Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Perl Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 4)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("XHTML Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
		if(input == 0)
		{
			Response.Write("This section is dedicated to web-based programming.");
		}
		else if(input == 2)
		{
			Response.Write("This section is dedicated to Javascript based programming.");
		}
		else if(input == 3)
		{
			Response.Write("This section is dedicated to Perl based programming.");
		}
		else if(input == 4)
		{
			Response.Write("This section is dedicated to XHTML based programming.");
		}
	Response.Write("</p>");
}
