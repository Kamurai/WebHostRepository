function WriteWebpage(input, level, extension)
{
    document.write("<table id=\"idTableMain\">");
		document.write("<tr id=\"idHeaderRow\">");
            document.write("<td id=\"idHeaderRowCenter\" colspan=\"3\">");
                TitlePicture(level);
			document.write("</td>");
        document.write("</tr>");
        document.write("<tr id=\"idNavigationRow\">");
            document.write("<td id=\"idNavigationBar\" colspan=\"3\">");
                NavBar(level, extension);
            document.write("</td>");
        document.write("</tr>");    
        document.write("<tr id=\"idCenterRow\">");
			document.write("<td id=\"idCenterRowLeft\">");
				document.write("<h4>");
					document.write("Navigation");
				document.write("</h4>");
				Navigation(level, extension);
			document.write("</td>");
			document.write("<td id=\"idCenterRowMain\">");
				Title(input);
				Header(input);
				Content(input);
			document.write("</td>");
			document.write("<td id=\"idCenterRowRight\">");
				document.write("<h4>");
					document.write("Information");
				document.write("</h4>");
				GetInformation(extension);
				Versions(input);
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
}