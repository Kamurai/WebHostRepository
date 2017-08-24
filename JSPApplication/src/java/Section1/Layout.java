package Section1;

public class Layout
{
    Main.Universal bob;
    Custom joe;

    public Layout(Custom CustomJoe)
    {
        bob = new Main.Universal();
        joe = CustomJoe;
    }

    public String WriteWebpage(int input, int level, int extension)
    {
        String Result = "";
            Result += "<div align='center'>";
            //<!--Table to place all subsections-->
            Result += "<table width='100%' cellpadding='0px' cellspacing='0px' border='0' align='center'>";
                Result += "<tbody>";
                    //<!--Top Row-->
                    Result += "<tr>";
                        //<!--Center Sub Section-->
                        Result += "<td class='td-header' colspan='3' alt='' valign='top'>";
                            Result += "<p align='center'>";
                                //<!--Primary Header: Main Splash / Logo-->
                                Result += bob.TitlePicture(level);
                            Result += "</p>";
                        Result += "</td>";
                    Result += "</tr>";
                    //<!--2nd Row-->
                    Result += "<tr>";
                        //<!--NavBar-->
                        Result += "<td class='td-navbar' colspan='3' alt=''>";
                            Result += "<div>";
                                Result += "<ul id='list-nav'>";
                                    Result += "<li>";
                                        Result += bob.NavBar(level, extension);
                                    Result += "</li>";
                                Result += "</ul>";
                           Result += "</div>";
                        Result += "</td>";
                    Result += "</tr>";
                    //<!--3rd Row-->
                    Result += "<tr>";
                        //<!--Left Sub Section-->
                        Result += "<td class='td-left' valign='top'>";
                            Result += "<div align='center'>";
                                Result += "<div class='left-box'>";
                                    Result += "<div class='navlinks'>";
                                        Result += "<h4>";
                                            Result += "Navigation";
                                        Result += "</h4>";
                                        Result += joe.Navigation(level, extension);
                                    Result += "</div>";
                                Result += "</div>";
                            Result += "</div>";
                        Result += "</td>";
                        //<!--Center Sub Section-->
                        Result += "<td class='td-content'>";
                            Result += "<div align='center'>";
                                Result += "<div class='content-box'>";
                                    Result += "<div>";
                                        Result += joe.Title(input);
                                        Result += joe.Header(input);
                                        Result += joe.Content(input);
                                    Result += "</div>";
                                    Result += "<br>";
                                    Result += "<br>";
                                Result += "</div>";
                            Result += "</div>";
                        Result += "</td>";
                        //<!--Right Sub Section-->
                        Result += "<td class='td-right' valign='top'>";
                            Result += "<div align='center'>";
                                Result += "<div class='right-box'>";
                                    Result += "<h4>";
                                        Result += "Information";
                                    Result += "</h4>";
                                    Result += bob.Information();
                                Result += "</div>";
                            Result += "</div>";
                        Result += "</td>";
                    Result += "</tr>";
                    //<!--4th Row-->
                    Result += "<tr>";
                        //<!--Center Sub Section-->
                        Result += "<td class='td-footer' colspan='3'>";
                            Result += "<div align='center'>";
                                Result += "<div class='footer-box'>";
                                    Result += bob.WinRAR();
                                    Result += bob.Footer();
                                    Result += bob.WebMaster();
                                Result += "</div>";
                            Result += "</div>";
                        Result += "</td>";
                    Result += "</tr>";
                Result += "</tbody>";
            Result += "</table>";
        Result += "</div>";
        return Result;
    }
}
