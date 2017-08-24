function Navigation(level)
{
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section1/Index.html\">Gynowars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project2.html\">Assault</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project3.html\">Mars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section4/Index.html\">Renley</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section5/Index.html\">Antarrea</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Section6/Index.html\">Editations</a>");
			document.write("<h5>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\""+GetPath(level)+"Section2/Section6/Project1.html\">Magic: The Tactical</a>");
				document.write("</span>");
				document.write("<span class=\"navlink\">");
					document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Index.html\">Warhammer 40K</a>");
						document.write("<h5>");
							document.write("<span class=\"navlink\">");
								document.write("<a href=\""+GetPath(level)+"Section2/Section6/Project1.html\">Mission!</a>");
							document.write("</span>");
							document.write("<span class=\"navlink\">");
								document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Index.html\">HTKB Armies</a>");
									document.write("<h5>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project1.html\">Ad Infinitum</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project2.html\">Avia</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project3.html\">De Luna</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project4.html\">Eve</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project5.html\">Geo Marines</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project6.html\">Twin Fists</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project7.html\">Voboulids</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project8.html\">Fungi</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project9.html\">Synergy</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project10.html\">The Dark</a>");
										document.write("</span>");
										document.write("<span class=\"navlink\">");
											document.write("<a href=\""+GetPath(level)+"Section2/Section6/Section2/Section2/Project11.html\">Vivus Mortem</a>");
										document.write("</span>");
									document.write("</h5>");
							document.write("</span>");
						document.write("</h5>");
				document.write("</span>");
			document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project7.html\">Truth</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project8.html\">Kingdoms</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project9.html\">Terminal World</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project10.html\">Monster Office Workplace</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project11.html\">Battle Princesses</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project12.html\">Sacred Offerings</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project13.html\">The Way</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project14.html\">Conspiratorium</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class=\"navlink\">");
		document.write("<a href=\""+GetPath(level)+"Section2/Project15.html\">Conversion</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("HTKB Armies");
		}
		else if(input == 1)
		{
			document.write("Ad Infinitum");
		}
		else if(input == 2)
		{
			document.write("Avia");
		}
		else if(input == 3)
		{
			document.write("De Luna");
		}
		else if(input == 4)
		{
			document.write("Eve");
		}
		else if(input == 5)
		{
			document.write("Geo Marines");
		}
		else if(input == 6)
		{
			document.write("Twin Fists");
		}
		else if(input == 7)
		{
			document.write("Voboulids");
		}
		else if(input == 8)
		{
			document.write("Fungi");
		}
		else if(input == 9)
		{
			document.write("Synergy");
		}
		else if(input == 10)
		{
			document.write("The Dark");
		}
		else if(input == 11)
		{
			document.write("Vivus Mortem");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("HTKB Armies");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Ad Infinitum");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Avia");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("De Luna");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 4)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Eve");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 5)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Geo Marines");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 6)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Twin Fists");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 7)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Voboulids");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 8)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Fungi");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 9)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Synergy");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 10)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("The Dark");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(input == 11)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Vivus Mortem");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align=\"left\">");
		if(input == 0)
		{
			document.write("This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.");
		}
		else if(input == 1)
		{
			document.write("Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs ");
			document.write("as they are not known to negotiate.  While some technology has been recovered, it is rare ");
			document.write("to find anything viable after battles.");
		}
		else if(input == 2)
		{
			document.write("The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least ");
			document.write("glide for short times without technological assistance.");
		}
		else if(input == 3)
		{
			document.write("De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  ");
			document.write("While De Luna are automated vehicles, wreckage has determine that there are seats for ");
			document.write("pilots.  Theories range from A.I. control to remote communication.");
		}
		else if(input == 4)
		{
			document.write("The Eve are a race of terrifying beast creatures. ");
			document.write("These Xenos somewhat resemble large cats.");
		}
		else if(input == 5)
		{
			document.write("Geo Marines are a specialized Chapter concentrating equipment speciality.");
		}
		else if(input == 6)
		{
			document.write("This lost Chapter spent far too long stranded outside the reach of civilisation.  ");
			document.write("The Twin Fists specialize in close combat battles.");
		}
		else if(input == 7)
		{
			document.write("Vouboulids are a plant-like group of entities.  Using a hive structure, ");
			document.write("these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.");
		}
		else if(input == 8)
		{
			document.write("These Xenos are unidentifiable as anything other than an advanced form of Fungus.  ");
			document.write("Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.");
		}
		else if(input == 9)
		{
			document.write("These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.");
		}
		else if(input == 10)
		{
			document.write("The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.");
		}
		else if(input == 11)
		{
			document.write("Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans ");
			document.write("have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to ");
			document.write("take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death ");
			document.write("and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to \"turn to ash\".");
		}
	document.write("</p>");
}

function Versions(input)
{
    document.write("<p align=\"left\">");
        		document.write("<br><br>");
		document.write("Other versions of this page are here:<br>");
		if(input == 0)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/index.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/index.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/index.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/index.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/index\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/index.html\">Apache SSI</a><br>");
		}
		else if(input == 1)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project1.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project1.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project1.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project1.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project1\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project1.html\">Apache SSI</a><br>");
		
		}
		else if(input == 2)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project2.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project2.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project2.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project2.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project2\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project2.html\">Apache SSI</a><br>");
		
		}
		else if(input == 3)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project3.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project3.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project3.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project3.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project3\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project3.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 4)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project4.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project4.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project4.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project4.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project4\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project4.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 5)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project5.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project5.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project5.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project5.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project5\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project5.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 6)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project6.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project6.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project6.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project6.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project6\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project6.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 7)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project7.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project7.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project7.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project7.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project7\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project7.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 8)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project8.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project8.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project8.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project8.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project8\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project8.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 9)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project9.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project9.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project9.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project9.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project9\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project9.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 10)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project10.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project10.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project10.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project10.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project10\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project10.html\">Apache SSI</a><br>");
		
		}
    	else if(input == 11)
		{
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.html\">HTML</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.php\">PHP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project11.asp\">ASP Javascript</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.shtml\">Perl</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project11.jsp\">JSP</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project11.xhtml\">JSF</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project11.cshtml\">ASP.NET Web App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Webform</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project11\">ASP.NET MVC App</a><br>");
			document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project11.html\">Apache SSI</a><br>");
		
		}
    document.write("</p>");
}