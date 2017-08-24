function WriteHeader(level, css)
{
	Response.Write("<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>");
	Response.Write("<link runat='server' rel='shortcut icon' href='"+GetPath(level)+"favicon.ico')' type='image/x-icon' />");
	Response.Write("<link runat='server' rel='icon' href='"+GetPath(level)+"favicon.ico' type='image/ico' />");
	Response.Write("<link href='"+GetPath(level-1)+css+"' rel='stylesheet' type='text/css'>");
	Response.Write("<font color='white'>");
}

function TitlePicture(level)
{
    Response.Write("<img id=\"idLogo\" src='"+GetPath(level)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>");
}

function WebMaster()
{
    Response.Write("Website managed by Kamurai.");
}

function NavBar(level, extension)
{
    Response.Write("<a class=\"navBar\" href='"+GetPath(level)+"index"+GetExtension(extension)+"'>Home</a>");
    Response.Write("<a class=\"navBar\" href='"+GetPath(level)+"Section1/index"+GetExtension(extension)+"'>Web Programming</a>");
    Response.Write("<a class=\"navBar\" href='"+GetPath(level)+"Section2/index"+GetExtension(extension)+"'>Private Projects</a>");
    Response.Write("<a class=\"navBar\" href='"+GetPath(level)+"Section3/index"+GetExtension(extension)+"'>Downloadable Projects</a>");
}

function GDR()
{
	Response.Write("<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>");	
}

function WinRAR()
{
	Response.Write("<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
}

function Footer()
{
    Response.Write("© Copyright 2012 All rights reserved<br>");    
    Response.Write("House That Kamurai Built<br>");    
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

function GetMonkeys()
{
	Response.Write("Monkeys");
}
