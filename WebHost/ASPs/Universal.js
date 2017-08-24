function WriteHeader(level)
{
	Response.Write("<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>");
	Response.Write("<link runat='server' rel='shortcut icon' href='"+GetPath(level)+"favicon.ico')' type='image/x-icon' />");
	Response.Write("<link runat='server' rel='icon' href='"+GetPath(level)+"favicon.ico' type='image/ico' />");
	Response.Write("<link href='"+GetPath(level-1)+"moo.css' rel='stylesheet' type='text/css'>");
	Response.Write("<font color='white'>");
}

function TitlePicture(level)
{
    Response.Write("<img src='"+GetPath(level)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>");
}

function WebMaster()
{
    Response.Write("<p align='left'>");
        Response.Write("<font size='1'>");    
            Response.Write("Website managed by Kamurai.");    
        Response.Write("</font>");
    Response.Write("</p>");
}

function NavBar(level, extension)
{
    Response.Write("<a href='"+GetPath(level)+"index"+GetExtension(extension)+"'>Home</a>");
    Response.Write("<a href='"+GetPath(level)+"Section1/index"+GetExtension(extension)+"'>Web Programming</a>");
    Response.Write("<a href='"+GetPath(level)+"Section2/index"+GetExtension(extension)+"'>Private Projects</a>");
    Response.Write("<a href='"+GetPath(level)+"Section3/index"+GetExtension(extension)+"'>Downloadable Projects</a>");
}

function Footer()
{
    Response.Write("<p align='center'>");
        Response.Write("© Copyright 2012 All rights reserved<br>");    
        Response.Write("House That Kamurai Built<br>");    
    Response.Write("</p>");
}

function GetPath(level)
{
    if(level <= 0)
    {
        return "./";
    }
    else if(level == 1)
    {
        return "../";
    }
    else if(level == 2)
    {
        return "../../";
    }
    else if(level == 3)
    {
        return "../../../";
    }
    else if(level == 4)
    {
        return "../../../../";
    }
    else if(level == 5)
    {
        return "../../../../../";
    }
    else if(level == 6)
    {
        return "../../../../../../";
    }
    else if(level == 7)
    {
        return "../../../../../../../";
    }
}

function GetExtension(extension)
{
    if(extension == 0)
    {
        //Basic HTML
        return ".html";
    }
    else if(extension == 1)
    {
        //ASP
        return ".asp";
    }
    else if(extension == 2)
    {
        //ASP.NET
        return ".aspx";
    }
}

function GetInformation(extension)
{
    if(extension == 0)
    {
        //Basic HTML
        Response.Write("This is written with basic HTML and javascript.");
    }
    else if(extension == 1)
    {
        //ASP
        Response.Write("This is written with classic ASP and javascript.");
    }
    else if(extension == 2)
    {
        //ASP.NET
        Response.Write("This is written with generic ASP.NET and javascript.");
    }
}

