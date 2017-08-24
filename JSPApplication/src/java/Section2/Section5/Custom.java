package Section2.Section5;

import Section2.*;

public class Custom extends Section2.Custom
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
                Result += "Antarrea Projects";
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
                    Result += "Antarrea Projects";
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
                Result += "<h3>";
				Result += "<p align='left'>";
					Result += "Global:";
				Result += "</p>";
			Result += "</h3>";
			Result += "<p align='left'>";
				Result += "Here are projects based in the Antarrea universe:</br>";
				Result += "</br>";
				Result += "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
				Result += "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
				Result += "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
				Result += "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
				Result += "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
				Result += "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
			Result += "</p>";
			Result += "<h3>";
				Result += "<p align='left'>";
					Result += "Grendol:";
				Result += "</p>";
			Result += "</h3>";
			Result += "<p align='left'>";
				Result += "Here are projects based in the Grendol universe:</br>";
				Result += "</br>";
				Result += "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
				Result += "Grendol: Coliseum: Arena:                         CCG.</br>";
			Result += "</p>";
			Result += "<h3>";
				Result += "<p align='left'>";
					Result += "Utopia:";
				Result += "</p>";
			Result += "</h3>";
			Result += "<p align='left'>";
				Result += "Here are projects based in the Utopia universe:</br>";
				Result += "</br>";
				Result += "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
			Result += "</p>";
			Result += "<h3>";
				Result += "<p align='left'>";
					Result += "Elvia:";
				Result += "</p>";
			Result += "</h3>";
			Result += "<p align='left'>";
				Result += "Here are projects based in the Elvia universe:</br>";
				Result += "</br>";
				Result += "Nine Card: Tactical card game.</br>";
			Result += "</p>";
            }
        Result += "</p>";
        return Result;
    }
}
