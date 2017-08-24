package Section1;

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
        else if(input == 7)
        {
            Result += "./Content/Content_Project7.xhtml";
        }
        else if(input == 8)
        {
            Result += "./Content/Content_Project8.xhtml";
        }
        else if(input == 9)
        {
            Result += "./Content/Content_Project9.xhtml";
        }

        return Result;
    }
}
