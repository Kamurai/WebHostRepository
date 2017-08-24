<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'HTKB Home Page';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'';
        }
        else if($Page==2)
        {
            $Result = $Result.'';
        }
        else if($Page==2)
        {
            $Result = $Result.'';
        }
        else if($Page==4)
        {
            $Result = $Result.'';
        }
        else if($Page==5)
        {
            $Result = $Result.'';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        $Result = $Result.'</title>';
        
        echo $Result;
        return $Result;
    }

    function Navigation($Level)
    {
        $Result = '
            <a class=\'navlinkA\' href=\''.Path($Level).'AboutUs.php\'>About Us</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Media.php\'>Media</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Minecraft.php\'>Minecraft!</a></br></br>
        ';
        return $Result;
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Welcome to the House That Kamurai Built!';
        
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
        $Default = '
                        The House That Kamurai Built is an 
						entertainment company with the primary 
						focus of increasing awesome by stimulating 
						intelligent conversation and entertainment 
						via discussion and game design. <br>
						Increase the Awesome with us!<br>
                    ';
        
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
        $Default = '
                    <a href=\'http://htkb.dyndns.org/index.html\'>HTML</a><br>
					<a href=\'http://htkb.dyndns.org/Javascript/index.html\'>HTML Javascript</a><br>
					<a href=\'http://htkb.dyndns.org:81/ASP/index.asp\'>ASP Javascript</a><br>
					<a href=\'http://htkb.dyndns.org:81/ASPNET/index.aspx\'>ASP.NET Javascript</a><br>
					<a href=\'http://htkb.dyndns.org/index.shtml\'>Perl</a><br>
					<a href=\'http://htkb.dyndns.org:8080/JSPApplication/index.jsp\'>JSP</a><br>
					<a href=\'http://htkb.dyndns.org:8080/JSFApplication/index.xhtml\'>JSF</a><br>
					<a href=\'http://htkb.dyndns.org:81/WebApplication/index.cshtml\'>ASP.NET Web App</a><br>
					<a href=\'http://htkb.dyndns.org:81/WebForm/index.aspx\'>ASP.NET Webform</a><br>
					<a href=\'http://htkb.dyndns.org:81/MVC/Main/index\'>ASP.NET MVC App</a><br>
					<a href=\'http://htkb.dyndns.org/SSI/index.html\'>Apache SSI</a><br>
                    ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                This is written with PHP.<br><br>
                Other versions of this page are here:<br>
                <a href=\'http://htkb.dyndns.org/Section3/Project1.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section3/Project1.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section3/Project1.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section3/Project1.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section3/Project1\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section3/Project1.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'';
        }
        else if($Page==2)
        {
            $Result = $Result.'';
        }
        else if($Page==4)
        {
            $Result = $Result.'';
        }
        else if($Page==5)
        {
            $Result = $Result.'';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }


?>