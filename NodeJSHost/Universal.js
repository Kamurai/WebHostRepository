GetPath = function (vLevel)
{
    if(vLevel <= 0)
    {
        return "./";
    }
    else if(vLevel == 1)
    {
        return "../";
    }
    else if(vLevel == 2)
    {
        return "../../";
    }
    else if(vLevel == 3)
    {
        return "../../../";
    }
    else if(vLevel == 4)
    {
        return "../../../../";
    }
    else if(vLevel == 5)
    {
        return "../../../../../";
    }
    else if(vLevel == 6)
    {
        return "../../../../../../";
    }
    else if(vLevel == 7)
    {
        return "../../../../../../../";
    }
}

exports.GetPath = function (vLevel)
{
    if(vLevel <= 0)
    {
        return "./";
    }
    else if(vLevel == 1)
    {
        return "../";
    }
    else if(vLevel == 2)
    {
        return "../../";
    }
    else if(vLevel == 3)
    {
        return "../../../";
    }
    else if(vLevel == 4)
    {
        return "../../../../";
    }
    else if(vLevel == 5)
    {
        return "../../../../../";
    }
    else if(vLevel == 6)
    {
        return "../../../../../../";
    }
    else if(vLevel == 7)
    {
        return "../../../../../../../";
    }
}

exports.WriteHeader = function (vLevel, vCSS)
{
	var result = "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
	result += "<link href='"+vCSS+"' rel='stylesheet' type='text/CSS'>";
	
    return result;
}

exports.WriteWebPage = function (vPage, vLevel, vSection, vCSS)
{
    var result = "<html>";
    result += "<head>";
    result +=     WriteHeader(vLevel, universal.GetPath(vLevel)+vCSS);
    result += "</head>";
    result += "<body id=\"idBody\">";
    result +=     custom.WriteBody(vPage, vLevel);
    result += "</body>";
    result += "</html>";
    
    return result;
}

exports.TitlePicture = function (vLevel)
{
    var result = "<img id=\"idLogo\" src='"+GetPath(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>";
    
    return result;
}

exports.NavBar = function (vLevel)
{
    var result = "<a class=\"navBar\" href='"+GetPath(vLevel)+"index'>Home</a>";
    result += "<a class=\"navBar\" href='"+GetPath(vLevel)+"Section1/index'>Web Programming</a>";
    result += "<a class=\"navBar\" href='"+GetPath(vLevel)+"Section2/index'>Private Projects</a>";
    result += "<a class=\"navBar\" href='"+GetPath(vLevel)+"Section3/index'>Downloadable Projects</a>";
    
    return result;
}

exports.GetNavigationHeader = function ()
{
    var result = "<h4>";
        result += "Navigation";
    result += "</h4>";
    
    return result;
}

exports.GetInformationHeader = function ()
{
    var result = "<h4>";
        result += "Information";
    result += "</h4>";
    
    return result;
}

exports.GetInformation = function ()
{
    var result = "This is written with NodeJS.";
    result += "Other versions can be found here:";
    
    return result;
}

exports.GDR = function ()
{
	var result = "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";	
    
    return result;
}

exports.WinRAR = function ()
{
	var result = "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";	
    
    return result;
}

exports.Footer = function ()
{
    var result = "Copyright 2012 All rights reserved<br>";    
    result += "House That Kamurai Built<br>";
    
    return result;
}

exports.WebMaster = function ()
{
    var result = "Website managed by Kamurai.";

    return result;    
}

