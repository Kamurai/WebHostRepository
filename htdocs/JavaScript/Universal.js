function WriteHeader(level)
{
	document.write("<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>");
	document.write("<link href='"+GetPath(level-1)+"moo.css' rel='stylesheet' type='text/css'>");
	document.write("<font color='white'>");
}

function TitlePicture(level)
{
    document.write("<img src='"+GetPath(level)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>");
}

function WebMaster()
{
    document.write("<p align='left'>");
        document.write("<font size='1'>");    
            document.write("Website managed by Kamurai.");    
        document.write("</font>");
    document.write("</p>");
}

function NavBar(level, extension)
{
    document.write("<a href='"+GetPath(level)+"Index"+GetExtension(extension)+"'>Home</a>");
    document.write("<a href='"+GetPath(level)+"Section1/Index"+GetExtension(extension)+"'>Web Programming</a>");
    document.write("<a href='"+GetPath(level)+"Section2/Index"+GetExtension(extension)+"'>Private Projects</a>");
    document.write("<a href='"+GetPath(level)+"Section3/Index"+GetExtension(extension)+"'>Downloadable Projects</a>");
}

function GDR()
{
	document.write("<p align='center'>");
		document.write("<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>");	
	document.write("</p>");
}

function WinRAR()
{
	document.write("<p align='center'>");
		document.write("<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
	document.write("</p>");
}

function Footer()
{
    document.write("<p align='center'>");
        document.write("© Copyright 2012 All rights reserved<br>");    
        document.write("House That Kamurai Built<br>");    
    document.write("</p>");
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
        document.write("This is written with basic HTML and javascript.");
    }
    else if(extension == 1)
    {
        //ASP
        document.write("This is written with classic ASP and javascript.");
    }
    else if(extension == 2)
    {
        //ASP.NET
        document.write("This is written with generic ASP.NET and javascript.");
    }
}


