package Main;

public class Custom
{
    int level;
    int page;
    int extension;

    Universal bob;

    public Custom()
    {
        
        bob = new Universal();
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
            Result += "./Content/Content_BangOver.xhtml";
        }
        else if(input == 2)
        {
            Result += "./Content/Content_MyList.xhtml";
        }
        else if(input == 3)
        {
            Result += "./Content/Content_GlobalList.xhtml";
        }
        else if(input == 4)
        {
            Result += "./Content/Content_Options.xhtml";
        }
        else if(input == 5)
        {
            Result += "./Content/Content_Add.xhtml";
        }
        else if(input == 6)
        {
            Result += "./Content/Content_Login.xhtml";
        }
        else if(input == 7)
        {
            Result += "./Content/Content_SignUp.xhtml";
        }
        else if(input == 8)
        {
            Result += "./Content/Content_Management.xhtml";
        }
       
        return Result;
    }
    
}
