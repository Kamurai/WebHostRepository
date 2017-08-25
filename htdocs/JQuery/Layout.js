function WriteWebpage(vPage, vLevel, vExtension, vSection, vCSS)
{
    BuildLayout();
    FillLayout();
}

function BuildLayout()
{
    var tableMain = document.createElement("table");
    tableMain.setAttribute("id", "idTableMain");
    $( "body" ).append( tableMain );
    
    var tableRowHeader = document.createElement("tr");
    tableRowHeader.setAttribute("id", "idHeaderRow");
    $( "#idTableMain" ).append( tableRowHeader );
    
    var tableRowHeaderCenter = document.createElement("td");
    tableRowHeaderCenter.setAttribute("id", "idHeaderRowCenter");
    tableRowHeaderCenter.css("colspan", "3");
    $( "#idHeaderRow" ).append( tableRowHeaderCenter );
    
    var tableRowNavigation = document.createElement("tr");
    tableRowNavigation.setAttribute("id", "idNavigationRow");
    $( "#idTableMain" ).append( tableRowNavigation );
    
    var tableRowHeaderCenter = document.createElement("td");
    tableRowHeaderCenter.setAttribute("id", "idNavigationBar");
    tableRowHeaderCenter.css("colspan", "3");
    $( "#idNavigationRow" ).append( tableRowHeaderCenter );
    
    var tableRowCenter = document.createElement("tr");
    tableRowCenter.setAttribute("id", "idCenterRow");
    $( "#idTableMain" ).append( tableRowCenter );
    
    var tableRowCenterLeft = document.createElement("td");
    tableRowCenterLeft.setAttribute("id", "idCenterRowLeft");
    $( "#idCenterRow" ).append( tableRowCenterLeft );
    
    var tableRowCenterMain = document.createElement("td");
    tableRowCenterMain.setAttribute("id", "idCenterRowMain");
    $( "#idCenterRow" ).append( tableRowCenterMain );
    
    var tableRowCenterRight = document.createElement("td");
    tableRowCenterRight.setAttribute("id", "idCenterRowRight");
    $( "#idCenterRow" ).append( tableRowCenterRight );
    
    var tableRowFooter = document.createElement("tr");
    tableRowFooter.setAttribute("id", "idFooterRow");
    $( "#idTableMain" ).append( tableRowFooter );
    
    var tableFooterMain = document.createElement("td");
    tableFooterMain.setAttribute("id", "idFooterRowMain");
    $( "#idFooterRow" ).append( tableFooterMain );
    
    
    
}

function FillLayout()
{
    /*
            WriteHeader(vLevel, vCSS);
        document.write("<table id=\"idTableMain\">");
            document.write("<tr id=\"idHeaderRow\">");
                document.write("<td id=\"idHeaderRowCenter\" colspan=\"3\">");
                    TitlePicture(vLevel);
                document.write("</td>");
            document.write("</tr>");
            document.write("<tr id=\"idNavigationRow\">");
                document.write("<td id=\"idNavigationBar\" colspan=\"3\">");
                    NavBar(vLevel, vExtension);
                document.write("</td>");
            document.write("</tr>");    
            document.write("<tr id=\"idCenterRow\">");
                document.write("<td id=\"idCenterRowLeft\">");
                    document.write("<h4>");
                        document.write("Navigation");
                    document.write("</h4>");
                    Navigation(vLevel, vExtension);
                document.write("</td>");
                document.write("<td id=\"idCenterRowMain\">");
                    Title(vPage);
                    Header(vPage);
                    Content(vPage);
                document.write("</td>");
                document.write("<td id=\"idCenterRowRight\">");
                    document.write("<h4>");
                        document.write("Information");
                    document.write("</h4>");
                    GetInformation(vExtension);
                    Versions(vPage);
                document.write("</td>");
            document.write("</tr>");
            document.write("<tr id=\"idFooterRow\">");
                document.write("<td id=\"idFooterMain\" colspan=\"3\">");
                    document.write("<p id=\"idFooterContent\">");
                        Footer();
                    document.write("</p>");
                    document.write("<p id=\"idFooterManagement\">");
                        WebMaster();
                    document.write("</p>");
                document.write("</td>");
            document.write("</tr>");
        document.write("</table>");
    */
}
