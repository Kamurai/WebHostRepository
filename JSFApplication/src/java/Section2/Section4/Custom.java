package Section2.Section4;

import Section2.*;

public class Custom extends Main.Custom
{
    Main.Universal bob;

    public Custom()
    {
        bob = new Main.Universal();
    }

    public String Content(int input)
    {
        String Result = "";
        if(input <= 0)
        {
            Result += "./Content/Content_index.xhtml";
        }
        else if(input == 1)
        {
            Result += "./Content/Content_Project1.xhtml";
        }
        else if(input == 2)
        {
            Result += "./Content/Content_Project2.xhtml";
        }
        
        return Result;
    }
}
