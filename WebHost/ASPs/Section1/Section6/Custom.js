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
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project2"+GetExtension(extension)+"'>Derby</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project3"+GetExtension(extension)+"'>MySQL</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project4"+GetExtension(extension)+"'>SQL Server</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project5"+GetExtension(extension)+"'>Postgres</a>");
			Response.Write("</span>");
			Response.Write("<span class='navlink'>");
				Response.Write("<a href='"+GetPath(level)+"Section1/Section6/Project6"+GetExtension(extension)+"'>XML</a>");
			Response.Write("</span>");
		Response.Write("</h5>");
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
			Response.Write("Database Programming");
		}
		else if(input == 1)
		{
			Response.Write("Oracle Programming");
		}
		else if(input == 2)
		{
			Response.Write("Derby Programming");
		}
		else if(input == 3)
		{
			Response.Write("MySQL Programming");
		}
		else if(input == 4)
		{
			Response.Write("SQL Server Programming");
		}
		else if(input == 5)
		{
			Response.Write("Postgres Programming");
		}
		else if(input == 6)
		{
			Response.Write("XML Programming");
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
					Response.Write("Derby Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("MySQL Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 4)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("SQL Server Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 5)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Postgres Programming");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 6)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("XML Programming");
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
			Response.Write("<table>");
			Response.Write("<tr>");
			Response.Write("<td>");
			Response.Write("Index");
			Response.Write("</td>");
			Response.Write("<td>");
			Response.Write("Color");
			Response.Write("</td>");
			Response.Write("</tr>");
			Response.Write("<tr>");
			Response.Write("<td>");
			OracleMethod("1",0);
			Response.Write("</td>");
			Response.Write("<td>");
			OracleMethod("Red",0);
			Response.Write("</td>");
			Response.Write("</tr>");
			Response.Write("</table>");
			
		}
		else if(input == 2)
		{
			Response.Write("This section is dedicated to Derby based programming.");
		}
		else if(input == 3)
		{
			Response.Write("This section is dedicated to MySQL based programming.");
		}
		else if(input == 4)
		{
			Response.Write("This section is dedicated to SQL Server based programming.");
		}
		else if(input == 5)
		{
			Response.Write("This section is dedicated to Postgres based programming.");
		}
		else if(input == 6)
		{
			Response.Write("This section is dedicated to XML based programming.");
		}
	Response.Write("</p>");
}
