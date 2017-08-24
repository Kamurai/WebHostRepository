package Section2.Section5.Section1;

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
                            Result += "<h5>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section1/Project1"+bob.GetExtension(extension)+"'>Team Tactial: Crash Ball</a>";
                                Result += "</span>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section1/Project2"+bob.GetExtension(extension)+"'>Wars of Antarrea</a>";
                                Result += "</span>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section1/Project3"+bob.GetExtension(extension)+"'>Revolutions: Invading Nations</a>";
                                Result += "</span>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section1/Project4"+bob.GetExtension(extension)+"'>Revolutions: Rebellion Against the Fist</a>";
                                Result += "</span>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section1/Project5"+bob.GetExtension(extension)+"'>Revolutions: Return to Arms</a>";
                                Result += "</span>";
                                Result += "<span class='navlink'>";
                                        Result += "<a href='"+bob.GetPath(level)+"Section2/Section5/Section1/Project6"+bob.GetExtension(extension)+"'>Revolutions: Post Wars</a>";
                                Result += "</span>";
                            Result += "</h5>";
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
                Result += "Global Antarrea";
            }
            else if(input == 1)
            {
                Result += "Team Tactical: Crash Ball";
            }
            else if(input == 2)
            {
                Result += "Wars of Antarrea";
            }
            else if(input == 3)
            {
                Result += "Revolutions: Invading Nations";
            }
            else if(input == 4)
            {
                Result += "Revolutions: Rebellion Against the Fist";
            }
            else if(input == 5)
            {
                Result += "Revolutions: Return to Arms";
            }
            else if(input == 6)
            {
                Result += "Revolutions: Post Wars";
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
                    Result += "Global Antarrea";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 1)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Team Tactical: Crash Ball";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Wars of Antarrea";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 3)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Revolutions: Invading Nations";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 4)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Revolutions: Rebellion Against the Fist";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 5)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Revolutions: Return to Arms";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 6)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Revolutions: Post Wars";
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
                Result += "Here are projects based in the Antarrea universe:</br>";
                Result += "</br>";
                Result += "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
                Result += "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
                Result += "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
                Result += "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
                Result += "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
                Result += "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
            }
            else if(input == 1)
            {
                Result += "Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>";
            }
            else if(input == 2)
            {
                Result += "Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>";
            }
            else if(input == 3)
            {
                Result += "Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>";
            }
            else if(input == 4)
            {
                Result += "Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>";
            }
            else if(input == 5)
            {
                Result += "Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>";
            }
            else if(input == 6)
            {
                Result += "Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>";
            }

        Result += "</p>";
        return Result;
    }
}
