package Section2;

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
        else if(input == 2)
        {
            Result += "./Content/Content_Project2.xhtml";
        }
        else if(input == 3)
        {
            Result += "./Content/Content_Project3.xhtml";
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
        else if(input == 10)
        {
            Result += "./Content/Content_Project10.xhtml";
        }
        else if(input == 11)
        {
            Result += "./Content/Content_Project11.xhtml";
        }
        else if(input == 12)
        {
            Result += "./Content/Content_Project12.xhtml";
        }
        else if(input == 13)
        {
            Result += "./Content/Content_Project13.xhtml";
        }
        else if(input == 14)
        {
            Result += "./Content/Content_Project14.xhtml";
        }
        return Result;
    }
}
