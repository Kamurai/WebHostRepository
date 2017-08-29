function WriteWebpage(vPage, vLevel, vSection, vCSS)
{
    BuildLayout(vLevel);
    //FillLayout();
}

function BuildLayout(vLevel)
{
    var tableMain = document.createElement("table");
    tableMain.setAttribute("id", "idTableMain");
    $( "body" ).append( tableMain );
    
    var tableRowHeader = document.createElement("tr");
    tableRowHeader.setAttribute("id", "idHeaderRow");
    $( "#idTableMain" ).append( tableRowHeader );
    
    var tableRowHeaderCenter = document.createElement("td");
    tableRowHeaderCenter.setAttribute("id", "idHeaderRowCenter");
    $( "#idHeaderRowCenter" ).attr("colspan",3);
    $( "#idHeaderRow" ).append( tableRowHeaderCenter );
    
    $( "#idHeaderRowCenter" ).append( "<img id=\"idLogo\" src='./logo_HouseThatKamuraiBuilt_blueonblack.jpg' alt=''>" );
    
    /*
    $( "#idHeaderRowCenter" ).append( "<img id=\"idLogo\" src='"+GetPath(level)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' alt=''>" );
    */
    
    var tableRowNavigation = document.createElement("tr");
    tableRowNavigation.setAttribute("id", "idNavigationRow");
    $( "#idTableMain" ).append( tableRowNavigation );
    
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='./Index.html'>Home</a>");
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='./Section1/Index.html'>Web Programming</a>");
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='./Section2/Index.html'>Private Projects</a>");
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='./Section3/Index.html'>Downloadable Projects</a>");
    
    /*
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='"+GetPath(level)+"Index.html'>Home</a>");
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='"+GetPath(level)+"Section1/Index.html'>Web Programming</a>");
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='"+GetPath(level)+"Section2/Index.html'>Private Projects</a>");
    $( "#idNavigationRow" ).append( "<a class=\"navBar\" href='"+GetPath(level)+"Section3/Index.html'>Downloadable Projects</a>");
    */
    
    
    var tableRowNavigationCenter = document.createElement("td");
    tableRowNavigationCenter.setAttribute("id", "idNavigationBar");
    $( "#idNavigationBar" ).attr('colspan',3);
    $( "#idNavigationRow" ).append( tableRowNavigationCenter );
    
    var tableRowCenter = document.createElement("tr");
    tableRowCenter.setAttribute("id", "idCenterRow");
    $( "#idTableMain" ).append( tableRowCenter );
    
    var tableRowCenterLeft = document.createElement("td");
    tableRowCenterLeft.setAttribute("id", "idCenterRowLeft");
    $( "#idCenterRow" ).append( tableRowCenterLeft );
    
    
    
    //needs id of some kind for h4
    $( "#idCenterRow" ).append( "<h4>");//move to Universal
        $( "#idCenterRow" ).append( "Navigation"); //move to Universal
    $( "#idCenterRow" ).append( "</h4>"); //move to Universal
    
    
    
    $( "#idCenterRow" ).append( "<a class=\"navlinkA\" href=\"./AboutUs.html\">About Us</a><br/><br/>"); //move to Custom
    $( "#idCenterRow" ).append( "<a class=\"navlinkA\" href=\"./Media.html\">Media</a><br/><br/>"); //move to Custom
    $( "#idCenterRow" ).append( "<a class=\"navlinkA\" href=\"./Minecraft.html\">Minecraft!</a><br/><br/>"); //move to Custom
    
    /*
    $( "#idCenterRow" ).append( "<a class=\"navlinkA\" href=\""+GetPath(level)+"AboutUs.html"\">About Us</a><br/><br/>"); //move to Custom
    $( "#idCenterRow" ).append( "<a class=\"navlinkA\" href=\""+GetPath(level)+"Media.html"\">Media</a><br/><br/>"); //move to Custom
    $( "#idCenterRow" ).append( "<a class=\"navlinkA\" href=\""+GetPath(level)+"Minecraft.html"\">Minecraft!</a><br/><br/>"); //move to Custom
    */
    
    var tableRowCenterMain = document.createElement("td");
    tableRowCenterMain.setAttribute("id", "idCenterRowMain");
    $( "#idCenterRow" ).append( tableRowCenterMain );
    
    $( "#idCenterRowMain" ).append( "<title>" ); //move to Custom
        $( "#idCenterRowMain" ).append( "HTKB Home Page"); //move to Custom
    $( "#idCenterRowMain" ).append( "</title>"); //move to Custom
    
    $( "#idCenterRowMain" ).append( "<h2>"); //move to Custom
        $( "#idCenterRowMain" ).append( "Welcome to the House That Kamurai Built!"); //move to Custom
    $( "#idCenterRowMain" ).append( "</h2>"); //move to Custom
    
    $( "#idCenterRowMain" ).append( "<p id=\"idCenterContent\">"); //move to Custom
        $( "#idCenterRowMain" ).append( "The House That Kamurai Built is an entertainment company with the primary focus "); //move to Custom
        $( "#idCenterRowMain" ).append( "of increasing awesome by stimulating intelligent conversation and entertainment via discussion and "); //move to Custom
        $( "#idCenterRowMain" ).append( "game design.<br>"); //move to Custom
        $( "#idCenterRowMain" ).append( "Increase the Awesome with us!<br>"); //move to Custom
    $( "#idCenterRowMain" ).append( "</p>"); //move to Custom
    
    var tableRowCenterRight = document.createElement("td"); //move to Custom
    tableRowCenterRight.setAttribute("id", "idCenterRowRight"); //move to Custom
    $( "#idCenterRow" ).append( tableRowCenterRight ); //move to Custom
    
    
    
    //needs id of some kind for h4
    $( "#idCenterRowRight" ).append( "<h4>");; //move to Universal
        $( "#idCenterRowRight" ).append( "Information");; //move to Universal
    $( "#idCenterRowRight" ).append( "</h4>");; //move to Universal
    
    
    
    $( "#idCenterRowRight" ).append( "This is written with basic HTML and javascript.<br>" ); //move to Universal
    $( "#idCenterRowRight" ).append( "This is written with basic HTML and javascript.<br>" ); //move to Universal
    $( "#idCenterRowRight" ).append( "This is written with basic HTML and javascript.<br>" ); //move to Universal
    
    $( "#idCenterRowRight" ).append( "This is written with basic HTML and javascript.<br>" ); //move to Universal
    $( "#idCenterRowRight" ).append( "Other versions of this page are here:<br>" ); //move to Universal
    
    $( "#idCenterRowRight" ).append( "Other versions of this page are here:<br>" ); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org/index.html\">HTML</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org/index.php\">PHP</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:81/ASPNET/index.aspx\">ASP.NET Javascript</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:81/ASP/index.asp\">ASP Javascript</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:84/index\">Node JS</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org/index.shtml\">Perl</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/index.jsp\">JSP</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/index.xhtml\">JSF</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:81/WebApplication/index.cshtml\">ASP.NET Web App</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:81/WebForm/index.aspx\">ASP.NET Webform</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:81/MVC/Main/index\">ASP.NET MVC App</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org/SSI/index.html\">Apache SSI</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:82/index\">Python Web.py</a><br>"); //move to Custom
    $( "#idCenterRowRight" ).append( "<a href=\"http://htkb.dyndns.org:83/index.html\">Ruby on Rails</a><br>"); //move to Custom
    
    var tableRowFooter = document.createElement("tr");
    tableRowFooter.setAttribute("id", "idFooterRow");
    $( "#idTableMain" ).append( tableRowFooter );
    
    var tableFooterMain = document.createElement("td");
    tableFooterMain.setAttribute("id", "idFooterRowMain");
    $( "#idFooterRowMain" ).attr('colspan',3);
    $( "#idFooterRow" ).append( tableFooterMain );
        
    $( "#idFooterRowMain" ).append( "Copyright 2012 All rights reserved<br>" ); //move to Universal
    $( "#idFooterRowMain" ).append( "House That Kamurai Built<br>" ); //move to Universal

}

function FillLayout()
{
    FillHead();
    FillBody();
}

FillHead()
{
    WriteHeader(vLevel, vCSS);
}

FillBody()
{
    /*
        TitlePicture(vLevel);
        
        NavBar(vLevel, vExtension);
        
        document.write("<h4>");
            document.write("Navigation");
        document.write("</h4>");
        Navigation(vLevel, vExtension);

        Title(vPage);
        Header(vPage);
        Content(vPage);
    
        document.write("<h4>");
            document.write("Information");
        document.write("</h4>");
        GetInformation(vExtension);
        Versions(vPage);
        
        Footer();
        WebMaster();
    */
    $( "#idFooterRowMain" ).append( "Copyright 2012 All rights reserved<br>" );
    $( "#idFooterRowMain" ).append( "House That Kamurai Built<br>" );
    
    Footer();
    WebMaster();
}
