function Navigation(level, extension)
{
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"\">Gynowars</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project2"+GetExtension(extension)+"\">Assault</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project3"+GetExtension(extension)+"\">Mars</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section4/Index"+GetExtension(extension)+"\">Renley</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section5/Index"+GetExtension(extension)+"\">Antarrea</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Section6/Index"+GetExtension(extension)+"\">Editations</a><br><br>");
			Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section6/Project1"+GetExtension(extension)+"\">Magic: The Tactical</a><br><br>");
			Response.Write("<a class=\"navlinkB\" href=\""+GetPath(level)+"Section2/Section6/Section2/Index"+GetExtension(extension)+"\">Warhammer 40K</a><br><br>");
				Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section6/Project1"+GetExtension(extension)+"\">Mission!</a><br><br>");
				Response.Write("<a class=\"navlinkC\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Index"+GetExtension(extension)+"\">HTKB Armies</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project1"+GetExtension(extension)+"\">Ad Infinitum</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project2"+GetExtension(extension)+"\">Avia</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project3"+GetExtension(extension)+"\">De Luna</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project4"+GetExtension(extension)+"\">Eve</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project5"+GetExtension(extension)+"\">Geo Marines</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project6"+GetExtension(extension)+"\">Twin Fists</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project7"+GetExtension(extension)+"\">Voboulids</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project8"+GetExtension(extension)+"\">Fungi</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project9"+GetExtension(extension)+"\">Synergy</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project10"+GetExtension(extension)+"\">The Dark</a><br><br>");
					Response.Write("<a class=\"navlinkD\" href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project11"+GetExtension(extension)+"\">Vivus Mortem</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project7"+GetExtension(extension)+"\">Truth</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project8"+GetExtension(extension)+"\">Kingdoms</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project9"+GetExtension(extension)+"\">Terminal World</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project10"+GetExtension(extension)+"\">Monster Office Workplace</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project11"+GetExtension(extension)+"\">Battle Princesses</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project12"+GetExtension(extension)+"\">Sacred Offerings</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project13"+GetExtension(extension)+"\">The Way</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project14"+GetExtension(extension)+"\">Conspiratorium</a><br><br>");
		Response.Write("<a class=\"navlinkA\" href=\""+GetPath(level)+"Section2/Project15"+GetExtension(extension)+"\">Conversion</a><br><br>");
	
}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("HTKB Armies");
		}
		else if(input == 1)
		{
			Response.Write("Ad Infinitum");
		}
		else if(input == 2)
		{
			Response.Write("Avia");
		}
		else if(input == 3)
		{
			Response.Write("De Luna");
		}
		else if(input == 4)
		{
			Response.Write("Eve");
		}
		else if(input == 5)
		{
			Response.Write("Geo Marines");
		}
		else if(input == 6)
		{
			Response.Write("Twin Fists");
		}
		else if(input == 7)
		{
			Response.Write("Voboulids");
		}
		else if(input == 8)
		{
			Response.Write("Fungi");
		}
		else if(input == 9)
		{
			Response.Write("Synergy");
		}
		else if(input == 10)
		{
			Response.Write("The Dark");
		}
		else if(input == 11)
		{
			Response.Write("Vivus Mortem");
		}
	Response.Write("</title>");
}

function Header(input)
{
	Response.Write("<h2>");
		if(input == 0)
		{
			Response.Write("HTKB Armies");
		}
		else if(input == 1)
		{
			Response.Write("Ad Infinitum");
		}
		else if(input == 2)
		{
			Response.Write("Avia");
		}
		else if(input == 3)
		{
			Response.Write("De Luna");
		}
		else if(input == 4)
		{
			Response.Write("Eve");
		}
		else if(input == 5)
		{
			Response.Write("Geo Marines");
		}
		else if(input == 6)
		{
			Response.Write("Twin Fists");
		}
		else if(input == 7)
		{
			Response.Write("Voboulids");
		}
		else if(input == 8)
		{
			Response.Write("Fungi");
		}
		else if(input == 9)
		{
			Response.Write("Synergy");
		}
		else if(input == 10)
		{
			Response.Write("The Dark");
		}
		else if(input == 11)
		{
			Response.Write("Vivus Mortem");
		}
	Response.Write("</h2>");
}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			Response.Write("This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.");
		}
		else if(input == 1)
		{
			Response.Write("Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs ");
			Response.Write("as they are not known to negotiate.  While some technology has been recovered, it is rare ");
			Response.Write("to find anything viable after battles.");
		}
		else if(input == 2)
		{
			Response.Write("The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least ");
			Response.Write("glide for short times without technological assistance.");
		}
		else if(input == 3)
		{
			Response.Write("De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  ");
			Response.Write("While De Luna are automated vehicles, wreckage has determine that there are seats for ");
			Response.Write("pilots.  Theories range from A.I. control to remote communication.");
		}
		else if(input == 4)
		{
			Response.Write("The Eve are a race of terrifying beast creatures. ");
			Response.Write("These Xenos somewhat resemble large cats.");
		}
		else if(input == 5)
		{
			Response.Write("Geo Marines are a specialized Chapter concentrating equipment speciality.");
		}
		else if(input == 6)
		{
			Response.Write("This lost Chapter spent far too long stranded outside the reach of civilisation.  ");
			Response.Write("The Twin Fists specialize in close combat battles.");
		}
		else if(input == 7)
		{
			Response.Write("Vouboulids are a plant-like group of entities.  Using a hive structure, ");
			Response.Write("these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.");
		}
		else if(input == 8)
		{
			Response.Write("These Xenos are unidentifiable as anything other than an advanced form of Fungus.  ");
			Response.Write("Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.");			
		}
		else if(input == 9)
		{
			Response.Write("These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.");
		}
		else if(input == 10)
		{
			Response.Write("The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.");
		}
		else if(input == 11)
		{
			Response.Write("Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans ");
			Response.Write("have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to ");
			Response.Write("take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death ");
			Response.Write("and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to \"turn to ash\".");
		}
	Response.Write("</p>");
}

function Versions(input)
{
	Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/index.html\">Apache SSI</a><br>");
	}
	else if(input == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project1.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project1.html\">Apache SSI</a><br>");
	
	}
	else if(input == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project2.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project2.html\">Apache SSI</a><br>");
	
	}
	else if(input == 3)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project3.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project3.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project3.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project3.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project3\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project3.html\">Apache SSI</a><br>");
	
	}
	else if(input == 4)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project4.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project4.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project4.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project4.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project4\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project4.html\">Apache SSI</a><br>");
	
	}
	else if(input == 5)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project5.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project5.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project5.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project5.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project5\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project5.html\">Apache SSI</a><br>");
	
	}
	else if(input == 6)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project6.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project6.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project6.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project6.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project6\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project6.html\">Apache SSI</a><br>");
	
	}
	else if(input == 7)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project7.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project7.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project7.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project7.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project7\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project7.html\">Apache SSI</a><br>");
	
	}
	else if(input == 8)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project8.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project8.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project8.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project8.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project8\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project8.html\">Apache SSI</a><br>");
	
	}
	else if(input == 9)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project9.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project9.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project9.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project9.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project9\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project9.html\">Apache SSI</a><br>");
	
	}
	else if(input == 10)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project10.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project10.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project10.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project10.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project10\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project10.html\">Apache SSI</a><br>");
	
	}
	else if(input == 11)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project11.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project11.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project11.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project11.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project11\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project11.html\">Apache SSI</a><br>");
	
	}
    
}