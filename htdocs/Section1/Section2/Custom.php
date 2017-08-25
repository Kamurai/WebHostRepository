<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Javascript Programming';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        $Result = $Result.'</title>';
        
        return $Result;
    }

    function Navigation($Level)
    {
        $Result = $Result.'
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Project1.html\'>Basic HTML</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Project1.php\'>PHP</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section2/Index.php\'>Java Script</a></br></br>
                <a class=\'navlinkB\' href=\''.Path($Level).'Javascript/Section1/Section2/Project1.html\'>HTML Javascript</a></br></br>
                <a class=\'navlinkB\' href=\'http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp\'>ASP Javascript</a></br></br>
                <a class=\'navlinkB\' href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx\'>ASP.NET Javascript</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Project3.shtml\'>Perl</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section4/Index.php\'>Java</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section5/Index.php\'>ASP.Net</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section6/Index.php\'>Databases</a></br></br>
            <a class=\'navlinkA\' href=\'http://htkb.dyndns.org/SSI/Section1/index.html\'>Apache SSI</a></br></br>
        ';
        return $Result;
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Javascript Programming';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }
    
    function Content($Page)
    {
        $Result = '';
        $Default = 'This section is dedicated to Javascript based programming.';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }
    
    function Versions($Page)
    {
        $Result = '';
        $Default = '
            <a href=\'http://htkb.dyndns.org/Section1/Section2/index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section1/Section2/index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Section2/index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section2/index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/Section1/Section2/index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section2/index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section2/index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Section1/Section2/index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section1/Section2/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }


?>