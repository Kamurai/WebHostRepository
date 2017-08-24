package Section2.Section5.Section2;

import Section2.Section5.*;
import Section2.*;

public class Custom extends Section2.Section5.Custom
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
        	Result += "<h5>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section1/Index"+bob.GetExtension(extension)+"'>Global</a>";
                    Result += "</span>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section2/Index"+bob.GetExtension(extension)+"'>Grendol</a>";
                            Result += "<h5>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section2/Project1"+bob.GetExtension(extension)+"'>Land of the Orcish Empire: Age of Magic</a>";
                                Result += "</span>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section2/Project2"+bob.GetExtension(extension)+"'>Coliseum: Arena</a>";
                                Result += "</span>";
                            Result += "</h5>";
                    Result += "</span>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section3/Index"+bob.GetExtension(extension)+"'>Utopia</a>";
                    Result += "</span>";
                    Result += "<span class='navlink'>";
                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section4/Index"+bob.GetExtension(extension)+"'>Elvia</a>";
                    Result += "</span>";
                Result += "</h5>";
	Result += "</span>";
        Result += "<br>";
        Result += "<span class='navlink'>";
            Result += "<a href='"+bob.GetPath(level)+"Section2/Section6/index"+bob.GetExtension(extension)+"'>Editations</a>";
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
                Result += "Grendol";
            }
            else if(input == 1)
            {
                Result += "Land of the Orcish Empire: Age of Magic";
            }
            else if(input == 2)
            {
                Result += "Coliseum: Arena";
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
                    Result += "Grendol";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 1)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Land of the Orcish Empire: Age of Magic";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Coliseum: Arena";
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
                Result += "Here are projects based in the Grendol Empire:</br>";
                Result += "</br>";
                Result += "Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ";
                Result += "comprise the Grendol Empire.</br>";
                Result += "Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>";
            }
            else if(input == 1)
            {
                Result += "Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ";
                Result += "comprise the Grendol Empire.";
            }
            else if(input == 2)
            {
                Result += "Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.";
            }

        Result += "</p>";
        return Result;
    }
}
