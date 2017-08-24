function Navigation(level, extension)
{
		Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Project1.html\">Basic HTML</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section2/Index"+GetExtension(extension)+"\">Javascript</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Project3.shtml\">Perl</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"\">Java</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.Net</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a><br><br>");
			Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section1/Section6/Project1"+GetExtension(extension)+"\">Oracle</a><br><br>");
			Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section1/Section6/Project2"+GetExtension(extension)+"\">Derby</a><br><br>");
			Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section1/Section6/Project3"+GetExtension(extension)+"\">MySQL</a><br><br>");
			Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section1/Section6/Project4"+GetExtension(extension)+"\">SQL Server</a><br><br>");
			Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section1/Section6/Project5"+GetExtension(extension)+"\">Postgres</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");
	
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
	Response.Write("<h2>");
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
	Response.Write("</h2>");
}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
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
						//OracleMethod("1",0);
					Response.Write("</td>");
					Response.Write("<td>");
						//OracleMethod("Red",0);
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
			//SQLServerDataList();
		
			Response.Write("This section is dedicated to SQL Server based programming.");
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
						//Response.Write("<%#Container.DataItem(\"Index\")%>");
					Response.Write("</td>");
					Response.Write("<td>");
						//Response.Write("<%#Container.DataItem(\"Color\")%>");
					Response.Write("</td>");
				Response.Write("</tr>");
			Response.Write("</table>");
			
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

function Versions(input)
{
	Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\">Apache SSI</a><br>");
	
	}
	else if(input == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\">Apache SSI</a><br>");
	
	}
	else if(input == 3)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project3\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\">Apache SSI</a><br>");
	
	}
    
}