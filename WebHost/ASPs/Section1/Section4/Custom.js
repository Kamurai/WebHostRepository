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
		Response.Write("<a href='"+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"'>Java</a>");
		Response.Write("<h5>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp'>JSP Programming</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml'>JSF Programming</a>");
			Response.Write("</span>");
		Response.Write("</h5>");
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
			Response.Write("Java Programming");
		}
		else if(input == 1)
		{
			Response.Write("JSP Programming");
		}
		else if(input == 2)
		{
			Response.Write("JSF Programming");
		}
	Response.Write("</title>");
}

function Header(input)
{
	if(input == 0)
	{
		Response.Write("<h2>");
			Response.Write("<u>");
				Response.Write("Java Programming");
			Response.Write("</u>");
		Response.Write("</h2>");
	}
	else if(input == 1)
	{
		Response.Write("<h2>");
			Response.Write("<u>");
				Response.Write("JSP Programming");
			Response.Write("</u>");
		Response.Write("</h2>");
	}
	else if(input == 2)
	{
		Response.Write("<h2>");
			Response.Write("<u>");
				Response.Write("JSF Programming");
			Response.Write("</u>");
		Response.Write("</h2>");
	}
}

function Content(input)
{
	Response.Write("<p align='left'>");
		if(input == 0)
		{
			Response.Write("This section is dedicated to Java based programming.");
		}
		else if(input == 1)
		{
			Response.Write("This section is dedicated to JSP based programming.");
		}
		else if(input == 2)
		{
			Response.Write("This section is dedicated to JSF based programming.");
		}
	Response.Write("</p>");
}
