function WriteWebpage(input, level, extension)
{
	Response.Write("<div align='center'>");
		//<!--Table to place all subsections-->
		Response.Write("<table width='100%' cellpadding='0px' cellspacing='0px' border='0' align='center'>");
			Response.Write("<tbody>");
				//<!--Top Row-->
				Response.Write("<tr>");
					//<!--Center Sub Section-->
					Response.Write("<td class='td-header' colspan='3' alt='' valign='top'>");
						Response.Write("<p align='center'>");
							//<!--Primary Header: Main Splash / Logo-->
							TitlePicture(level);
						Response.Write("</p>");
					Response.Write("</td>");
				Response.Write("</tr>");
				//<!--2nd Row-->
				Response.Write("<tr>");
					//<!--NavBar-->
					Response.Write("<td class='td-navbar' colspan='3' alt=''>");
						Response.Write("<div>");
							Response.Write("<ul id='list-nav'>");
								Response.Write("<li>");
									NavBar(level, extension);
								Response.Write("</li>");
							Response.Write("</ul>");
					   Response.Write("</div>");
					Response.Write("</td>");
				Response.Write("</tr>");	
				//<!--3rd Row-->
				Response.Write("<tr>");
					//<!--Left Sub Section-->
					Response.Write("<td class='td-left' valign='top'>");
						Response.Write("<div align='center'>");
							Response.Write("<div class='left-box'>");
								Response.Write("<div class='navlinks'>");
									Response.Write("<h4>");
										Response.Write("Navigation");
									Response.Write("</h4>");
									Navigation(level, extension);
								Response.Write("</div>");
							Response.Write("</div>");
						Response.Write("</div>");
					Response.Write("</td>");
					//<!--Center Sub Section-->
					Response.Write("<td class='td-content'>");
						Response.Write("<div align='center'>");
							Response.Write("<div class='content-box'>");
								Response.Write("<div>");
									Title(input);
									Header(input);
									Content(input);
								Response.Write("</div>");
								Response.Write("<br>");
								Response.Write("<br>");
							Response.Write("</div>");
						Response.Write("</div>");
					Response.Write("</td>");
					//<!--Right Sub Section-->
					Response.Write("<td class='td-right' valign='top'>");
						Response.Write("<div align='center'>");
							Response.Write("<div class='right-box'>");
								Response.Write("<h4>");
									Response.Write("Information");
								Response.Write("</h4>");
								GetInformation(extension);
							Response.Write("</div>");
						Response.Write("</div>");
					Response.Write("</td>");
				Response.Write("</tr>");
				//<!--4th Row-->
				Response.Write("<tr>");
					//<!--Center Sub Section-->
					Response.Write("<td class='td-footer' colspan='3'>");
						Response.Write("<div align='center'>");
							Response.Write("<div class='footer-box'>");
								Footer();
								WebMaster();
							Response.Write("</div>");
						Response.Write("</div>");
					Response.Write("</td>");
				Response.Write("</tr>");
			Response.Write("</tbody>");
		Response.Write("</table>");
	Response.Write("</div>");
}

function WinRAR()
{
	Response.Write("<p align='center'>");
		Response.Write("<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
	Response.Write("</p>");
}
