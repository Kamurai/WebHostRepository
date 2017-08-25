<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Global Antarrea';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Team Tactical: Crash Ball';
        }
        else if($Page==2)
        {
            $Result = $Result.'Wars of Antarrea';
        }
        else if($Page==3)
        {
            $Result = $Result.'Revolutions: Invading Nations';
        }
        else if($Page==4)
        {
            $Result = $Result.'Revolutions: Rebellion Against the Fist';
        }
        else if($Page==5)
        {
            $Result = $Result.'Revolutions: Return to Arms';
        }
        else if($Page==6)
        {
            $Result = $Result.'Revolutions: Post Wars';
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
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section1/Project1.php\'>Team Tactial: Crash Ball</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section1/Project2.php\'>Wars of Antarrea</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section1/Project3.php\'>Revolutions: Invading Nations:</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section1/Project4.php\'>Revolutions: Rebellion Against the Fist</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section1/Project5.php\'>Revolutions: Return to Arms</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section1/Project6.php\'>Revolutions: Post Wars</a></br></br>
				<a class=\'navlinkB\' href='../Section2/index.php\'>Grendol:</a></br></br>
				<a class=\'navlinkB\' href='../Section3/index.php\'>Utopia:</a></br></br>
				<a class=\'navlinkB\' href='../Section4/index.php\'>Elvia:</a></br></br>
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
        $Default = 'Global Antarrea';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Team Tactical: Crash Ball';
        }
        else if($Page==2)
        {
            $Result = $Result.'Wars of Antarrea';
        }
        else if($Page==3)
        {
            $Result = $Result.'Revolutions: Invading Nations';
        }
        else if($Page==4)
        {
            $Result = $Result.'Revolutions: Rebellion Against the Fist';
        }
        else if($Page==5)
        {
            $Result = $Result.'Revolutions: Return to Arms';
        }
        else if($Page==6)
        {
            $Result = $Result.'Revolutions: Post Wars';
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
			Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>
			Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>
			Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>
			Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>
			Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>
			Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>
		';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                Wars of Antarrea is a table-top game where two or more armies battle for supremacy.
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.
            ';
        }
        else if($Page==4)
        {
            $Result = $Result.'
                Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.
            ';
        }
        else if($Page==5)
        {
            $Result = $Result.'
                Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.
            ';
        }
        else if($Page==6)
        {
            $Result = $Result.'Revolutions is a Tactical RPG with Post Wars as its 4th story arc.';
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
            <a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/index.asp\'>ASP Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section1/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project1.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project1.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project2.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project2.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project2.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project2.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project2.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project2.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project2.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project2.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project2.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project2\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project2.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
				<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project3.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project3.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project3.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project3.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project3.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project3.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project3.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project3.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project3.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project3\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project3.html\'>Apache SSI</a><br>

            ';
        }
        else if($Page==4)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project4.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project4.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project4.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project4.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project4.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project4.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project4.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project4.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project4.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project4\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project4.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==5)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project5.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project5.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project5.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project5.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project5.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project5.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project5.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project5.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project5.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project5\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project5.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==6)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project6.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project6.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project6.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project6.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section5/Section1/Project6.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project6.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project6.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project6.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project6.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project6\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project6.html\'>Apache SSI</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>