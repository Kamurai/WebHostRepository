package Section2.Section6.Section2;

import Section2.Section6.*;
import Section2.*;

public class Custom extends Section2.Section6.Custom
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
        return Result;
    }

    public String Title(int input)
    {
        String Result = "";
        Result += "<title>";
            if(input == 0)
            {
                Result += "Private Projects";
            }
            else if(input == 2)
            {
                Result += "Assault CCG";
            }
            else if(input == 3)
            {
                Result += "Mars Projects";
            }
            else if(input == 7)
            {
                Result += "Truth";
            }
            else if(input == 8)
            {
                Result += "Kingdoms";
            }
            else if(input == 9)
            {
                Result += "Terminal World";
            }
            else if(input == 10)
            {
                Result += "Monster Office Workplace";
            }
            else if(input == 11)
            {
                Result += "Battle Princesses";
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
                    Result += "Private Projects";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 2)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Assault CCG";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 3)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Mars Projects";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 7)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Truth";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 8)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Kingdoms";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 9)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Terminal World";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 10)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Monster Office Workplace";
                Result += "</u>";
            Result += "</h2>";
        }
        else if(input == 11)
        {
            Result += "<h2>";
                Result += "<u>";
                    Result += "Battle Princesses";
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
                Result += "This section is dedicated to HTKB projects.";
            }
            else if(input == 2)
            {
                Result += "This section is dedicated CCG project 'Assault'.";
            }
            else if(input == 3)
            {
                Result += "This section is dedicated to the Mars centered project 'Opposition'.";
            }
            else if(input == 7)
            {
                Result += "This section is dedicated to the MMO RTS project 'Truth'.  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.";
            }
            else if(input == 8)
            {
                Result += "This section is dedicated to the digital board game project 'Kingdoms'.  Explore the world's Kingdoms, get rich, get strong and conquer.";
            }
            else if(input == 9)
            {
                Result += "This section is dedicated to the simulation MMO centered project 'Terminal World'.  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat";
                Result += "the zombies?  Can you survive?";
            }
            else if(input == 10)
            {
                Result += "This section is dedicated to the card and board game project 'Monster Office Workplace'.  These monsters mean serious business.";
                Result += "Can you earn the most credit and smooze your way into a promotion?";
            }
            else if(input == 11)
            {
                Result += "This section is dedicated to the card game project 'Battle Princesses'.  Ever wanted to see your favorite princess battle for the kingdom?";
                Result += "These princess aren't your helpless maidens, but valiant warriors themselves.";
            }
        Result += "</p>";
        return Result;
    }
}
