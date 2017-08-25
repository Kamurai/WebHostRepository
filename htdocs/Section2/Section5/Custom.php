<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Antarrea Projects';
        
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
        $Result = '
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section1/index.php\'>Gynowars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project2.php\'>Assault</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project3.php\'>Mars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section4/index.php\'>Renley</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section5/index.php\'>Antarrea</a></br></br>
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section1/index.php\'>Global</a></br></br>
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section2/index.php\'>Grendol</a></br></br>
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section3/index.php\'>Utopia</a></br></br>
					<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section4/index.php\'>Elvia</a></br></br>
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
        $Default = 'Antarrea Projects';
        
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
        $Default = '
			Global:
			<br/>
			<br/>
			<br/>
				Here are projects based in the Antarrea universe:</br>
			</br>
				Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>
				Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>
				Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>
				Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>
				Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>
				Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>
			</br>
			</br>
					Grendol:
			</br>
			</br>
				Here are projects based in the Grendol universe:</br>
				</br>
				Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>
				Grendol: Coliseum: Arena:                         CCG.</br>
			</br>
			</br>
					Utopia:
			</br>
			</br>
				Here are projects based in the Utopia universe:</br>
			</br>
				Avia: Elemental Angels: Adventure game with RPG elements.</br>
			</br>
			</br>
					Elvia:
			</br>
			</br>
				Here are projects based in the Elvia universe:</br>
			</br>
				Nine Card: Tactical card game.</br>
			</br>
			</br>
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
    
    function Versions($Page)
    {
        $Result = '';
        $Default = '
            <a href=\'http://htkb.dyndns.org/Section2/Section5/index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/index.asp\'>ASP Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/Section2/Section5/index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>