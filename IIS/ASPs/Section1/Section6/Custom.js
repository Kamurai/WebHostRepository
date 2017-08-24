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
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>");
		Response.Write("<h5>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project1"+GetExtension(extension)+"'>Oracle</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project2"+GetExtension(extension)+"'>MySQL</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project3"+GetExtension(extension)+"'>Postgres</a>");
			Response.Write("</span>");
		Response.Write("</h5>");
	Response.Write("</span>");
	Response.Write("<br>");
}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Database Programming");
		}
		else if(input == 1)
		{
			Response.Write("Oracle Programming");
		}
		else if(input == 2)
		{
			Response.Write("MySQL Programming");
		}
		else if(input == 3)
		{
			Response.Write("Postgres Programming");
		}
	Response.Write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Database Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Oracle Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("MySQL Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Postgres Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
		if(input == 0)
		{
			Response.Write("This section is dedicated to database based programming.");
		}
		else if(input == 1)
		{
			Response.Write("This section is dedicated to Oracle based programming.");
		}
		else if(input == 2)
		{
			Response.Write("This section is dedicated to MySQL based programming.");
		}
		else if(input == 3)
		{
			Response.Write("This section is dedicated to Postgres based programming.");
		}
	Response.Write("</p>");
}
