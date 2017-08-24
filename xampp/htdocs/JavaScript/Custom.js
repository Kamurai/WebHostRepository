function Navigation(level, extension)
{
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"AboutUs"+GetExtension(extension)+"'>About Us</a>");
    document.write("</span>");
    document.write("<br>");
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"Affiliation"+GetExtension(extension)+"'>HTKB Affiliations</a>");
    document.write("</span>");
    document.write("<br>");
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"Minecraft"+GetExtension(extension)+"'>Minecraft!</a>");
    document.write("</span>");
    document.write("<br>");
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"PublicProjects"+GetExtension(extension)+"'>Public Projects</a>");
    document.write("</span>");
    document.write("<br>");
    document.write("<span class='navlink'>");
        document.write("<a href='"+GetPath(level)+"MemberPages"+GetExtension(extension)+"'>Member Pages</a>");
    document.write("</span>");
    document.write("<br>");
}

function Title(input)
{
    document.write("<title>");
        if(input <= 0)
        {
            document.write("HTKB Home Page");
        }
        else if(input == 1)
        {
            document.write("HTKB Affiliation");
        }
        else if(input == 2)
        {
            document.write("About Us");
        }
        else if(input == 3)
        {
            document.write("Minecraft!");
        }
        else if(input == 4)
        {
            document.write("HTKB Public Projects");
        }
        else if(input == 5)
        {
            document.write("Member Pages");
        }
    document.write("</title>");
}

function Header(input)
{
        if(input == 0)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("Welcome to the House That Kamurai Built!");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 1)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("About Us");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 2)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("HTKB Affiliation");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 3)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("Minecraft!");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 4)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("HTKB Public Projects");
                document.write("</u>");
            document.write("</h2>");
        }
        else if(input == 5)
        {
            document.write("<h2>");
                document.write("<u>");
                    document.write("Member Pages");
                document.write("</u>");
            document.write("</h2>");
            document.write("<p align='left'>");
                document.write("Here are some of our member's pages:</br>");
            document.write("</p>");
        }
}

function Content(input)
{
    document.write("<p align='left'>");
        if(input == 0)
        {
            document.write("The House That Kamurai Built is an entertainment company with the primary focus ");
            document.write("of increasing awesome by stimulating intelligent conversation and entertainment via discussion and ");
            document.write("game design.<br>");
            document.write("Increase the Awesome with us!<br>");
        }
        else if(input == 1)
        {
            document.write("We are working to build this into a better place.</br>");
            document.write("If you found this, then you must be at least (Awesome/2).</br>");
            document.write("Stay tuned, right now it's all about laying foundation for the future.</br>");
        }
        else if(input == 2)
        {
            document.write("Here is a list of other HTKB affiliated webpages:</br>");
            document.write("</br>");
            document.write("<a href='http://www.facebook.com/HouseThatKamuraiBuilt'>House That Kamurai Built Facebook.</a></br>");
            document.write("<a href='http://www.youtube.com/HTKB'>House That Kamurai Built Youtube.</a></br>");
            document.write("<a href='http://www.tumblr.com/blog/housethatkamuraibuilt'>House That Kamurai Built's Tumblr.</a></br>");
            //document.write("<a href='http://housethatkamuraibuilt.webs.com/'>House That Kamurai Built's Webs Account.</a></br>");
            document.write("<a href='http://myspace.com/housethatkamuraibuilt'>House That Kamurai Built's Myspace.</a></br>");
            
        }
        else if(input == 3)
        {
            document.write("If you would like to play Minecraft with us, then you're welcome to join us here:</br>");
            document.write("</br>");
            document.write("http://htkb.dyndns.org:25565");
        }
        else if(input == 4)
        {
            document.write("If you would like to join in the effort to be awesome, then here are some HTKB associated projects:</br>");
            document.write("</br>");
            document.write("<a href='http://www.youtube.com/WeAreMovieClub'>We Are Movie Club:  A Youtube Channel for media reviews.</a></br>");
            document.write("<a href='http://www.youtube.com/GamingDivision528'>Gaming Division:  A Youtube Channel for game stuff.</a></br>");
        }
        else if(input == 5)
        {
            document.write("<h3>");
                document.write("<p align='left'>");
                    document.write("Kamurai:");
                document.write("</p>");
            document.write("</h3>");
            document.write("<p align='left'>");
                document.write("<a href='http://www.yoyogames.com/users/Kamurai'>Kamurai's YoYo Games page:  See some of the games he's posted.</a></br>");
                document.write("<a href='http://www.facebook.com/cris.kamurai'>Kamurai's Facebook.</a></br>");
                document.write("<a href='http://twitter.com/#!/Kamurai25'>Kamurai's Twitter.</a></br>");
                document.write("<a href='https://www.gplus.com/Members/Cris-Kamurai'>Kamurai's Google Plus.</a></br>");
            document.write("</p>");
        }
    document.write("</p>");
}
