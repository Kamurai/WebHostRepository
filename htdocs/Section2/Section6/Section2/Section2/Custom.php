<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'HTKB Armies';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Ad Infinitum';
        }
        else if($Page==2)
        {
            $Result = $Result.'Avia';
        }
        else if($Page==3)
        {
            $Result = $Result.'De Luna';
        }
        else if($Page==4)
        {
            $Result = $Result.'Eve';
        }
        else if($Page==5)
        {
            $Result = $Result.'Geo Marines';
        }
        else if($Page==6)
        {
            $Result = $Result.'Twin Fists';
        }
        else if($Page==7)
        {
            $Result = $Result.'Voboulids';
        }
        else if($Page==8)
        {
            $Result = $Result.'Fungi';
        }
        else if($Page==9)
        {
            $Result = $Result.'Synergy';
        }
        else if($Page==10)
        {
            $Result = $Result.'The Dark';
        }
        else if($Page==11)
        {
            $Result = $Result.'Vivus Mortem';
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
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section6/index.php\'>Editations</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section6/Project1.php\'>Magic: The Tactical</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section6/Section2/index.php\'>Warhammer 40K</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section6/Section2/Project1.php\'>Mission!</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/index.php\'>HTKB Armies</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project1.php\'>Ad Infinitum</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project2.php\'>Avia</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project3.php\'>De Luna</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project4.php\'>Eve</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project5.php\'>Geo Marines</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project6.php\'>Twin Fists</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project7.php\'>Voboulids</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project8.php\'>Fungi</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project9.php\'>Synergy</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project10.php\'>The Dark</a></br></br>
						<a class=\'navlinkD\' href=\''.Path($Level).'Section2/Section6/Section2/Section2/Project11.php\'>Vivus Mortem</a></br></br>
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
        $Default = 'HTKB Armies';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Ad Infinitum';
        }
        else if($Page==2)
        {
            $Result = $Result.'Avia';
        }
        else if($Page==3)
        {
            $Result = $Result.'De Luna';
        }
        else if($Page==4)
        {
            $Result = $Result.'Eve';
        }
        else if($Page==5)
        {
            $Result = $Result.'Geo Marines';
        }
        else if($Page==6)
        {
            $Result = $Result.'Twin Fists';
        }
        else if($Page==7)
        {
            $Result = $Result.'Voboulids';
        }
        else if($Page==8)
        {
            $Result = $Result.'Fungi';
        }
        else if($Page==9)
        {
            $Result = $Result.'Synergy';
        }
        else if($Page==10)
        {
            $Result = $Result.'The Dark';
        }
        else if($Page==11)
        {
            $Result = $Result.'Vivus Mortem';
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
			This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.
		';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs 
				as they are not known to negotiate.  While some technology has been recovered, it is rare 
				to find anything viable after battles.
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least 
				glide for short times without technological assistance.
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  
				While De Luna are automated vehicles, wreckage has determine that there are seats for 
				pilots.  Theories range from A.I. control to remote communication.
            ';
        }
        else if($Page==4)
        {
            $Result = $Result.'
                The Eve are a race of terrifying beast creatures.  
				These Xenos somewhat resemble large cats.
            ';
        }
        else if($Page==5)
        {
            $Result = $Result.'
				Geo Marines are a specialized Chapter concentrating equipment speciality.
            ';
        }
        else if($Page==6)
        {
            $Result = $Result.'
				This lost Chapter spent far too long stranded outside the reach of civilisation.  
				The Twin Fists specialize in close combat battles.
            ';
        }
        else if($Page==7)
        {
            $Result = $Result.'
				Vouboulids are a plant-like group of entities.  Using a hive structure, 
				these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.
            ';
        }
        else if($Page==8)
        {
            $Result = $Result.'
				These Xenos are unidentifiable as anything other than an advanced form of Fungus.  
				Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.
            ';
        }
        else if($Page==9)
        {
            $Result = $Result.'
				These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.
            ';
        }
        else if($Page==10)
        {
            $Result = $Result.'
				The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.
            ';
        }
        else if($Page==11)
        {
            $Result = $Result.'
				Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans 
				have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to 
				take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death 
				and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to \'turn to ash\'.
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
            <a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/index.asp\'>ASP Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project1.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project1.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project2.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project2.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project2.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project2.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project2.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project2.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project2.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project2\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project2.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project3.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project3.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project3.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project3.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project3.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project3.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project3.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project3\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project3.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==4)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project4.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project4.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project4.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project4.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project4.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project4.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project4.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project4\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project4.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==5)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project5.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project5.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project5.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project5.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project5.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project5.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project5.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project5\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project5.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==6)
        {
			$Result = $Result.'
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project6.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project6.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project6.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project6.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project6.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project6.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project6.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project6\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project6.html\'>Apache SSI</a><br>
			';
        }
		else if($Page==7)
        {
			$Result = $Result.'
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project7.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project7.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project7.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project7.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project7.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project7.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project7.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project7\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project7.html\'>Apache SSI</a><br>
			';
        }
		else if($Page==8)
        {
			$Result = $Result.'
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project8.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project8.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project8.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project8.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project8.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project8.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project8.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project8\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project8.html\'>Apache SSI</a><br>
			';
        }
		else if($Page==9)
        {
			$Result = $Result.'
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project9.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project9.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project9.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project9.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project9.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project9.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project9.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project9\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project9.html\'>Apache SSI</a><br>
			';
        }
		else if($Page==10)
        {
			$Result = $Result.'
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project10.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project10.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project10.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project10.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project10.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project10.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project10.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project10\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project10.html\'>Apache SSI</a><br>
			';
        }
		else if($Page==11)
        {
			$Result = $Result.'
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project11.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project11.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project11.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project11.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project11.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project11.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project11.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project11\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project11.html\'>Apache SSI</a><br>
			';
        }
		else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>