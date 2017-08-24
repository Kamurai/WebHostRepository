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
            Result += "./Content/Content_AboutUs.xhtml";
        }
        else if(input == 2)
        {
            Result += "./Content/Content_Affiliation.xhtml";
        }
        else if(input == 3)
        {
            Result += "./Content/Content_Minecraft.xhtml";
        }
        else if(input == 4)
        {
            Result += "./Content/Content_PublicProjects.xhtml";
        }
        else if(input == 5)
        {
            Result += "./Content/Content_MemberPages.xhtml";
        }

        return Result;
    }

}
