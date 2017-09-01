function WriteHeader(vLevel, vSection)
{
    $( "head" ).append( "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">");
    $( "head" ).append( "<link href=\"" + GetPath(vLevel) + GetCSS(vSection) + ".css\" rel=\"stylesheet\" type=\"text/css\">");
}

function GetCSS(vSection)
{
    vDefault = "Main";
    vResult = "";
    
    if( vSection == 0 )
    {
        vResult = vDefault;
    }
    else if( vSection == 1 )
    {
        vResult = "Section1";
    }
    else if( vSection == 2 )
    {
        vResult = "Section2";
    }
    else if( vSection == 3 )
    {
        vResult = "Section3";
    }
    else
    {
        vResult = vDefault;
    }
    
    return vResult;
}

function TitlePicture(vLevel)
{
    $( "#idHeaderRowCenter" ).append( "<img id=\"idLogo\" src='"+GetPath(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' alt=''>" );
}

function NavBar(vLevel)
{
    $( "#idNavigationBar" ).append( "<a class=\"navBar\" href='"+GetPath(vLevel)+"Index.html'>Home</a>");
    $( "#idNavigationBar" ).append( "<a class=\"navBar\" href='"+GetPath(vLevel)+"Section1/Index.html'>Web Programming</a>");
    $( "#idNavigationBar" ).append( "<a class=\"navBar\" href='"+GetPath(vLevel)+"Section2/Index.html'>Private Projects</a>");
    $( "#idNavigationBar" ).append( "<a class=\"navBar\" href='"+GetPath(vLevel)+"Section3/Index.html'>Downloadable Projects</a>");
}

function NavigationHeader()
{
    var tableRowCenterLeftHeader = document.createElement("h4");
    tableRowCenterLeftHeader.textContent = "Navigation";
    $( "#idCenterRowLeft" ).append( tableRowCenterLeftHeader );
}

function InformationHeader()
{
    var tableRowCenterRightHeader = document.createElement("h4");
    tableRowCenterRightHeader.textContent = "Information";
    $( "#idCenterRowRight" ).append( tableRowCenterRightHeader );
    
    $( "#idCenterRowRight" ).append( "This is written with basic HTML and JQuery.<br>" );
    $( "#idCenterRowRight" ).append( "Other versions of this page are here:<br>" );
}

function GDR()
{
    $( "#idFooterContent" ).append( "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>" );
}

function WinRAR()
{
    $( "#idFooterContent" ).append( "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>" );
}

function Footer()
{
    $( "#idFooterContent" ).append( "© Copyright 2012 All rights reserved<br>" );
    $( "#idFooterContent" ).append( "House That Kamurai Built<br>" );
}

function WebMaster()
{
    $( "#idFooterManagement" ).append( "Website managed by Kamurai." );
}

function GetPath(vLevel)
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