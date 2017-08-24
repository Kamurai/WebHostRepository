package Section2.Section6.Section2.Section2;

import Section2.Section6.Section2.*;
import Section2.Section6.*;
import Section2.*;

public class Custom extends Section2.Section6.Section2.Custom
{
    Main.Universal bob;

    public Custom()
    {
        bob = new Main.Universal();
    }

    public String Navigation(int level, int extension)
    {
        String Result = "";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section1/index"+bob.GetExtension(extension)+"'>Gynowars</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project2"+bob.GetExtension(extension)+"'>Assault</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project3"+bob.GetExtension(extension)+"'>Mars</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section4/index"+bob.GetExtension(extension)+"'>Renley</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/index"+bob.GetExtension(extension)+"'>Antarrea</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/index"+bob.GetExtension(extension)+"'>Editations</a>";
        	Result += "<h5>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Project1"+bob.GetExtension(extension)+"'>Magic: The Tactical</a>";
                    Result += "</span>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/index"+bob.GetExtension(extension)+"'>Warhammer 40K</a>";
                        Result += "<h5>";
                            Result += "<span class='navlink'>";
                                Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project1"+bob.GetExtension(extension)+"'>Mission!</a>";
                            Result += "</span>";
                            Result += "<span class='navlink'>";
                                Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Section2/index"+bob.GetExtension(extension)+"'>HTKB Armies</a>";
                                Result += "<h5>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project1"+bob.GetExtension(extension)+"'>Ad Infinitum</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project2"+bob.GetExtension(extension)+"'>Avia</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project3"+bob.GetExtension(extension)+"'>De Luna</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project4"+bob.GetExtension(extension)+"'>Eve</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project5"+bob.GetExtension(extension)+"'>Geo Marines</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project6"+bob.GetExtension(extension)+"'>Twin Fists</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project7"+bob.GetExtension(extension)+"'>Voboulids</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project8"+bob.GetExtension(extension)+"'>Fungi</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project9"+bob.GetExtension(extension)+"'>Synergy</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project10"+bob.GetExtension(extension)+"'>The Dark</a>";
                                    Result += "</span>";
                                    Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/Section2/Project11"+bob.GetExtension(extension)+"'>Vivus Mortem</a>";
                                    Result += "</span>";
                                Result += "</h5>";
                            Result += "</span>";
                        Result += "</h5>";
                    Result += "</span>";
                Result += "</h5>";
	Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project7/index"+bob.GetExtension(extension)+"'>Truth</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project8"+bob.GetExtension(extension)+"'>Kingdoms</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project9"+bob.GetExtension(extension)+"'>Terminal World</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project10"+bob.GetExtension(extension)+"'>Monster Office Workplace</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project11"+bob.GetExtension(extension)+"'>Battle Princesses</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project12"+bob.GetExtension(extension)+"'>Sacred Offerings</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project13"+bob.GetExtension(extension)+"'>The Way</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project14"+bob.GetExtension(extension)+"'>Conspiratorium</a>";
        Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Project15"+bob.GetExtension(extension)+"'>Conversion</a>";
        Result += "</span>";
        Result += "<br>";
        return Result;
    }

    public String Title(int input)
    {
        String Result = "";
        Result += "<title>";
            if(input == 0)
            {
                Result += "HTKB Armies";
            }
            else if(input == 1)
            {
                Result += "Ad Infinitum";
            }
            else if(input == 2)
            {
                Result += "Avia";
            }
            else if(input == 3)
            {
                Result += "De Luna";
            }
            else if(input == 4)
            {
                Result += "Eve";
            }
            else if(input == 5)
            {
                Result += "Geo Marines";
            }
            else if(input == 6)
            {
                Result += "Twin Fists";
            }
            else if(input == 7)
            {
                Result += "Voboulids";
            }
            else if(input == 8)
            {
                Result += "Fungi";
            }
            else if(input == 9)
            {
                Result += "Synergy";
            }
            else if(input == 10)
            {
                Result += "The Dark";
            }
            else if(input == 11)
            {
                Result += "Vivus Mortem";
            }

        Result += "</title>";
        return Result;
    }

    public String Header(int input)
    {
        String Result = "";
        if(input == 0)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "HTKB Armies";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 1)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Ad Infinitum";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Avia";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 3)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "De Luna";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 4)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Eve";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 5)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Geo Marines";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 6)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Twin Fists";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 7)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Voboulids";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 8)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Fungi";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 9)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Synergy";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 10)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "The Dark";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 11)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Vivus Mortem";
                Result += "</u>";
            Result += "</h2>";
        }
        return Result;
    }

    public String Content(int input)
    {
        String Result = "";
        Result += "<p align='left'>";
            if(input == 0)
            {
                Result += "This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.";
            }
            else if(input == 1)
            {
                Result += "Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs ";
                Result += "as they are not known to negotiate.  While some technology has been recovered, it is rare ";
                Result += "to find anything viable after battles.";
            }
            else if(input == 2)
            {
                Result += "The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least ";
                Result += "glide for short times without technological assistance.";
            }
            else if(input == 3)
            {
                Result += "De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  ";
                Result += "While De Luna are automated vehicles, wreckage has determine that there are seats for ";
                Result += "pilots.  Theories range from A.I. control to remote communication.";
            }
            else if(input == 4)
            {
                Result += "The Eve are a race of terrifying beast creatures. ";
                Result += "These Xenos somewhat resemble large cats.";
            }
            else if(input == 5)
            {
                Result += "Geo Marines are a specialized Chapter concentrating equipment speciality.";
            }
            else if(input == 6)
            {
                Result += "This lost Chapter spent far too long stranded outside the reach of civilisation.  ";
                Result += "The Twin Fists specialize in close combat battles.";
            }
            else if(input == 7)
            {
                Result += "Vouboulids are a plant-like group of entities.  Using a hive structure, ";
                Result += "these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.";
            }
            else if(input == 8)
            {
                Result += "These Xenos are unidentifiable as anything other than an advanced form of Fungus.  ";
                Result += "Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.";
            }
            else if(input == 9)
            {
                Result += "These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.";
            }
            else if(input == 10)
            {
                Result += "The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.";
            }
            else if(input == 11)
            {
                Result += "Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans ";
                Result += "have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to ";
                Result += "take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death ";
                Result += "and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to 'turn to ash'.";
            }

        Result += "</p>";
        return Result;
    }
}
