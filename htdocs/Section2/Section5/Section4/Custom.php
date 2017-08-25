<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Elvia';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Nine Card';
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
        $Result = '
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section1/index.php\'>Gynowars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project2.php\'>Assault</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project3.php\'>Mars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section4/index.php\'>Renley</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section5/index.php\'>Antarrea</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section1/index.php\'>Global:</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section2/index.php\'>Grendol:</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section3/index.php\'>Utopia:</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section4/index.php\'>Elvia:</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section4/Project1.php\'>Nine Card:</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section6/index.php\'>Editations</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project7.php\'>Truth</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project8.php\'>Kingdoms</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project9.php\'>Terminal World</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project10.php\'>Monster Office Workplace</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project11.php\'>Battle Princesses</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project12.php\'>Sacred Offerings</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project13.php\'>The Way</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project14.php\'>Conspiratorium</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project15.php\'>Conversion</a></br></br>
        ';
        return $Result;
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Elvia';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Nine Card';
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
        $Default = '
			Here are projects based in the Elvia Empire:</br>
			</br>
			Nine Card: a Tactical card game played through the Elvia Empire.</br>
		';				
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Nine Card is a Tactical card game played through the Elvia Empire.</br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                Here are Game Maker Projects to play:</br>
                </br>
                Gamebox Client: v6.0:<t><a href=\'./downloads/GameBox_Client_Installer_v6p0.exe\'>Play games from...well, anywhere.</a></br>
                Gamebox Server: v6.0:<t><a href=\'./downloads/GameBox_Server_Installer_v6p0.exe\'>Host GameBox.</a></br>
                39dll.dll: v2.5:<t><a href=\'./downloads/39dll.dll\'>You may need this in your \'user/AppData/Local/GameBox_Client\' folder.</a></br>
                A Chess Server:<t><a href=\'./downloads/Chess_Server.exe\'>Host a Chess game.</a></br>
                A Chess Client:<t><a href=\'./downloads/Chess_Client.exe\'>A game of Chess from anywhere.</a></br>
                I Dunno:<t><a href=\'./downloads/Idunno.exe\'>I dunno, it\'s a fun puzzle game though.</a></br>
                Purification:<t><a href=\'./downloads/Zombies.exe\'>Kill zombies...lots of zombies.</a></br>
                Trail of the Undead: The Way Home:<t><a href=\'./downloads/TrailoftheUndead.exe\'>An adventure of zombie killing goodness.</a></br>
                Discovery (buggy Alpha):<t><a href=\'./downloads/Discovery.exe\'>Play a game of discovery and survival.</a></br>
                Twisted Tactics: Version 0.1 (buggy Alpha):<t><a href=\'./downloads/Tactical.exe\'>Scrapped two player tactical system.</a></br>
                Skitzo Burrito (Alpha): <t><a href=\'./downloads/Emotive-Default-1.0.0.3.exe\'>An emotional platform survival game.</a></br>
            ';
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
            <a href=\'http://htkb.dyndns.org/Section2/Section5/Section4/index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/index.asp\'>ASP Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/Section2/Section5/Section4/index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section4/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Minecraft.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Minecraft.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Minecraft.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Minecraft.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Minecraft\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Minecraft.html\'>Apache SSI</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>