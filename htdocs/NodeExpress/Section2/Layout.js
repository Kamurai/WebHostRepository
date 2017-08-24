function WriteWebpage(input, level, extension)
{
	document.write("<div align='center'>");
		//<!--Table to place all subsections-->
		document.write("<table width='100%' cellpadding='0px' cellspacing='0px' border='0' align='center'>");
			document.write("<tbody>");
				//<!--Top Row-->
				document.write("<tr>");
					//<!--Center Sub Section-->
					document.write("<td class='td-header' colspan='3' alt='' valign='top'>");
						document.write("<p align='center'>");
							//<!--Primary Header: Main Splash / Logo-->
							TitlePicture(level);
						document.write("</p>");
					document.write("</td>");
				document.write("</tr>");
				//<!--2nd Row-->
				document.write("<tr>");
					//<!--NavBar-->
					document.write("<td class='td-navbar' colspan='3' alt=''>");
						document.write("<div>");
							document.write("<ul id='list-nav'>");
								document.write("<li>");
									NavBar(level, extension);
								document.write("</li>");
							document.write("</ul>");
					   document.write("</div>");
					document.write("</td>");
				document.write("</tr>");	
				//<!--3rd Row-->
				document.write("<tr>");
					//<!--Left Sub Section-->
					document.write("<td class='td-left' valign='top'>");
						document.write("<div align='center'>");
							document.write("<div class='left-box'>");
								document.write("<div class='navlinks'>");
									document.write("<h4>");
										document.write("Navigation");
									document.write("</h4>");
									Navigation(level, extension);
								document.write("</div>");
							document.write("</div>");
						document.write("</div>");
					document.write("</td>");
					//<!--Center Sub Section-->
					document.write("<td class='td-content'>");
						document.write("<div align='center'>");
							document.write("<div class='content-box'>");
								document.write("<div>");
									Title(input);
									Header(input);
									Content(input);
								document.write("</div>");
								document.write("<br>");
								document.write("<br>");
							document.write("</div>");
						document.write("</div>");
					document.write("</td>");
					//<!--Right Sub Section-->
					document.write("<td class='td-right' valign='top'>");
						document.write("<div align='center'>");
							document.write("<div class='right-box'>");
								document.write("<h4>");
									document.write("Information");
								document.write("</h4>");
								GetInformation(extension);
                            document.write("</div>");
						document.write("</div>");
					document.write("</td>");
				document.write("</tr>");
				//<!--4th Row-->
				document.write("<tr>");
					//<!--Center Sub Section-->
					document.write("<td class='td-footer' colspan='3'>");
						document.write("<div align='center'>");
							document.write("<div class='footer-box'>");
								GDR();
								WinRAR();
								Footer();
								WebMaster();
							document.write("</div>");
						document.write("</div>");
					document.write("</td>");
				document.write("</tr>");
			document.write("</tbody>");
		document.write("</table>");
	document.write("</div>");
}