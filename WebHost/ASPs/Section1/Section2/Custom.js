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
		Response.Write("<h5>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='http://htkb.dyndns.org/Javascript/Section1/Section2/Project1.html'>HTML Javascript</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp'>ASP Javascript</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx'>ASP.NET Javascript</a>");
			Response.Write("</span>");
		Response.Write("</h5>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='http://htkb.dyndns.org/Section1/Project3.shtml'>Perl</a>");
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
			Response.Write("Javascript");
		}
		else if(input == 1)
		{
			Response.Write("HTML Javascript");
		}
		else if(input == 2)
		{
			Response.Write("ASP Javascript");
		}
		else if(input == 3)
		{
			Response.Write("ASP.NET Javascript");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Javascript");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("HTML Javascript");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("ASP Javascript");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("ASP.NET Javascript");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
		if(input == 0)
		{
			Response.Write("This section is dedicated to Javascript based programming.");
		}
		else if(input == 1)
		{
			Response.Write("This section is dedicated to HTML Javascript based programming.");
		}
		else if(input == 2)
		{
			Response.Write("This section is dedicated to ASP Javascript based programming.");
		}
		else if(input == 3)
		{
			Response.Write("This section is dedicated to ASP.NET Javascript based programming.");
		}
	Response.Write("</p>");
}
