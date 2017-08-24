<?php

    function Title($Page)
    {
        $Result = '';
        $Default = 'Index';
        
        if($Page==0)
        {
            $Result = $Default;
        }
        else if($Page==1)
        {
            $Result = 'Online Experience Downloads';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==4)
        {
            $Result = '';
        }
        else if($Page==5)
        {
            $Result = '';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }

    function Navigation($Page)
    {
        
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Index';
        
        if($Page==0)
        {
            $Result = $Default;
        }
        else if($Page==1)
        {
            $Result = 'Online Experience Downloads';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==4)
        {
            $Result = '';
        }
        else if($Page==5)
        {
            $Result = '';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }
    
    function Content($Page)
    {
        $Result = '';
        $Default = 'Index';
        
        if($Page==0)
        {
            $Result = $Default;
        }
        else if($Page==1)
        {
            $Result = '
                Here are downloads to play Cube World with us:</br>
                </br>
                Cube World:<t><a href=\'./downloads/CubeSetup3.exe\'>Come play Cube World!</a></br>
                </br>
                DirectX:<t><a href=\'./downloads/directx_Jun2010_redist.exe\'>Direct X Redistrutable</a></br>
                DirectX \'Web\':<t><a href=\'./downloads/dxwebsetup.exe\'>Direct X Redistrutable</a></br>
                </br>
            ';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==4)
        {
            $Result = '';
        }
        else if($Page==5)
        {
            $Result = '';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }
    
    function Versions($Page)
    {
        $Result = '';
        $Default = 'Index';
        
        if($Page==0)
        {
            $Result = $Default;
        }
        else if($Page==1)
        {
            $Result = '
                This is written with PHP.<br><br>
                Other versions of this page are here:<br>
                <a href=\"http://htkb.dyndns.org/Section3/Project1.html\">HTML</a><br>
                <a href=\"http://htkb.dyndns.org/Javascript/Section3/Project1.html\">HTML Javascript</a><br>
                <a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\">ASP Javascript</a><br>
                <a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\">ASP.NET Javascript</a><br>
                <a href=\"http://htkb.dyndns.org/Section3/Project1.shtml\">Perl</a><br>
                <a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project1.jsp\">JSP</a><br>
                <a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\">JSF</a><br>
                <a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\">ASP.NET Web App</a><br>
                <a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\">ASP.NET Webform</a><br>
                <a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project1\">ASP.NET MVC App</a><br>
                <a href=\"http://htkb.dyndns.org/SSI/Section3/Project1.html\">Apache SSI</a><br>
            ';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==2)
        {
            $Result = '';
        }
        else if($Page==4)
        {
            $Result = '';
        }
        else if($Page==5)
        {
            $Result = '';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>