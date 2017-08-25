<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Gynowars';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Gynowars RPG';
        }
        else if($Page==2)
        {
            $Result = $Result.'Gynowars: Battle Arena CCG';
        }
        else if($Page==3)
        {
            $Result = $Result.'Gynowars: Crash Ball';
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
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section1/Project1.php\'>Gynowars RPG</a></br></br>
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section1/Project2.php\'>Gynowars: Battle Arena CCG</a></br></br>
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section1/Project3.php\'>Gynowars: Crash Ball</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project2.php\'>Assault</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project3.php\'>Mars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section4/index.php\'>Renley</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section5/index.php\'>Antarrea</a></br></br>
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
        $Default = 'Downloadable Projects';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Gynowars RPG';
        }
        else if($Page==2)
        {
            $Result = $Result.'Gynowars: Battle Arena CCG';
        }
        else if($Page==3)
        {
            $Result = $Result.'Gynowars: Crash Ball';
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
        $Default = 'This section is dedicated to projects centered in the Gynowars universe.';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                The Gynowars RPG is a pokemon-like tactical RPG.  
				The protagonist uses creatures to fight battles against other creatures to progress through the storyline.
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                Gynowars: Battle Arena is a CCG that pits teams of creatures against each other 
						in an arena-like environment.  There are several scenarios to run, to include:
						</br>
						Death Match, Ring the Bell, and Head Hunt.
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                Gynowars: Crash Ball is a turn based strategy board game.  Basically it\'s gridiron with Gynos..
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
            <a href=\'http://htkb.dyndns.org/Section2/Section1/index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section1/index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section1/index.asp\'>ASP Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section1/index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/Section2/Section1/index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section1/index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section1/index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Section2/Section1/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section1/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section1/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section1/Project1.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section1/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section1/Project1.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section1/Project2.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section1/Project2.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section1/Project2.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project2.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section1/Project2.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project2.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project2.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project2.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project2.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project2\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section1/Project2.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section1/Project3.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section1/Project3.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section1/Project3.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section1/Project3.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section1/Project3.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section1/Project3.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section1/Project3.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section1/Project3.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section1/Project3.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section1/Project3\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section1/Project3.html\'>Apache SSI</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>