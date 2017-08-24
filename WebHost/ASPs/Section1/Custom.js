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
		Response.Write("<a href='"+GetPath(level)+"Section1/Project3"+GetExtension(extension)+"'>Perl</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"'>Java</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.Net</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Project7"+GetExtension(extension)+"'>HTML5</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Project8"+GetExtension(extension)+"'>XLS</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Project9"+GetExtension(extension)+"'>XML DOM</a>");
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
		else if(input == 7)
		{
			Response.Write("HTML5 Programming");
		}
		else if(input == 8)
		{
			Response.Write("XLS Programming");
		}
		else if(input == 9)
		{
			Response.Write("XML DOM Programming");
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
		else if(input == 7)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("HTML5");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 8)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("XLS");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 9)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("XML DOM");
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
		else if(input == 7)
		{
			Response.Write("This section is dedicated to HTML5 based programming.");
		}
		else if(input == 8)
		{
			Response.Write("This section is dedicated to XLS based programming.");
		}
		else if(input == 9)
		{
			Response.Write("This section is dedicated to XML DOM based programming.");
		}
	Response.Write("</p>");
}
