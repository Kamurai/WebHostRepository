<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Renley';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Warring Nations';
        }
        else if($Page==2)
        {
            $Result = $Result.'Psychodom: The One Empire';
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
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section4/Project1.php\'>Warring Nations</a></br></br>
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section4/Project2.php\'>Psychodom: The One Empire</a></br></br>
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
        $Default = 'Renley';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Warring Nations';
        }
        else if($Page==2)
        {
            $Result = $Result.'Psychodom: The One Empire';
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
        $Default = 'This section is dedicated to projects centered in the Renley universe.';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Warring Nations is a Tactical RPG involving squad based battles.  
						Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.  
				The protagonist is tasked with investigating various situations leading 
				to a conspiracy about who is really ruling the continent.
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
            <a href=\'http://htkb.dyndns.org/Section2/Section4/index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section4/index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section4/index.asp\'>ASP Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section4/index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/Section2/Section4/index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section4/index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section4/index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Section2/Section4/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
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
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section4/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section4/Project1.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section4/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section4/Project1.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project2.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section4/Project2.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section4/Project2.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project2.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section4/Project2.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project2.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project2.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project2.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project2.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project2\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section4/Project2.html\'>Apache SSI</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>