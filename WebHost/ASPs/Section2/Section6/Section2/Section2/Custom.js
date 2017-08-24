function Navigation(level, extension)
{
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section1/Index"+GetExtension(extension)+"'>Gynowars</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project2"+GetExtension(extension)+"'>Assault</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project3"+GetExtension(extension)+"'>Mars</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section4/Index"+GetExtension(extension)+"'>Renley</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section5/Index"+GetExtension(extension)+"'>Antarrea</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Index"+GetExtension(extension)+"'>Editations</a>");
			Response.Write("<h5>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Project1"+GetExtension(extension)+"'>Magic: The Tactical</a>");
				Response.Write("</span>");
				Response.Write("<span class='navlink'>");
					Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Index"+GetExtension(extension)+"'>Warhammer 40K</a>");
						Response.Write("<h5>");
							Response.Write("<span class='navlink'>");
								Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Project1"+GetExtension(extension)+"'>Mission!</a>");
							Response.Write("</span>");
							Response.Write("<span class='navlink'>");
								Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Index"+GetExtension(extension)+"'>HTKB Armies</a>");
									Response.Write("<h5>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project1"+GetExtension(extension)+"'>Ad Infinitum</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project2"+GetExtension(extension)+"'>Avia</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project3"+GetExtension(extension)+"'>De Luna</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project4"+GetExtension(extension)+"'>Eve</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project5"+GetExtension(extension)+"'>Geo Marines</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project6"+GetExtension(extension)+"'>Twin Fists</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project7"+GetExtension(extension)+"'>Voboulids</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project8"+GetExtension(extension)+"'>Fungi</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project9"+GetExtension(extension)+"'>Synergy</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project10"+GetExtension(extension)+"'>The Dark</a>");
										Response.Write("</span>");
										Response.Write("<span class='navlink'>");
											Response.Write("<a href='"+GetPath(level)+"Section2/Section6/Section2/Section2/Project11"+GetExtension(extension)+"'>Vivus Mortem</a>");
										Response.Write("</span>");
									Response.Write("</h5>");
							Response.Write("</span>");
						Response.Write("</h5>");
				Response.Write("</span>");
			Response.Write("</h5>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project7"+GetExtension(extension)+"'>Truth</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project8"+GetExtension(extension)+"'>Kingdoms</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project9"+GetExtension(extension)+"'>Terminal World</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project10"+GetExtension(extension)+"'>Monster Office Workplace</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project11"+GetExtension(extension)+"'>Battle Princesses</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project12"+GetExtension(extension)+"'>Sacred Offerings</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project13"+GetExtension(extension)+"'>The Way</a>");
	Response.Write("</span>");
	Response.Write("<br>");
	Response.Write("<span class='navlink'>");
		Response.Write("<a href='"+GetPath(level)+"Section2/Project14"+GetExtension(extension)+"'>Conspiratorium</a>");
	Response.Write("</span>");
	Response.Write("<br>");
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
		if(input == 0)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("HTKB Armies");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 1)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Ad Infinitum");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 2)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Avia");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 3)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("De Luna");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 4)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Eve");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 5)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Geo Marines");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 6)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Twin Fists");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 7)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Voboulids");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 8)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Fungi");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 9)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Synergy");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 10)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("The Dark");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
		else if(input == 11)
		{
			Response.Write("<h2>");
				Response.Write("<u>");
					Response.Write("Vivus Mortem");
				Response.Write("</u>");
			Response.Write("</h2>");
		}
}

function Content(input)
{
	Response.Write("<p align='left'>");
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
			Response.Write("and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to 'turn to ash'.");
		}
	Response.Write("</p>");
}
