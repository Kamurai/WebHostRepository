def getNavigation(vLevel):
	if vLevel == '0':
		vResult = '<a class=\'navlinkA\' href=\'/AboutUs\'>About Us</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Media\'>Media</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Minecraft\'>Minecraft!</a></br></br>'
	elif vLevel == '1':
		vResult = '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/index.html\'>Basic HTML</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project1.php\'>PHP</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section2/index\'>Java Script</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project3.shtml\'>Perl</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section4/index\'>Java</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section5/index\'>ASP.Net</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section6/index\'>Databases</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/SSI/Section1/index.html\'>Apache SSI</a></br></br>'
	elif vLevel == '1_2':
		vResult = '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/index.html\'>Basic HTML</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project1.php\'>PHP</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section2/index\'>Java Script</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org/Javascript/Section1/Section2/Project1.html\'>HTML Javascript</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp\'>ASP Javascript</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx\'>ASP.NET Javascript</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project3.shtml\'>Perl</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section4/index\'>Java</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section5/index\'>ASP.Net</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section6/index\'>Databases</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/SSI/Section1/index.html\'>Apache SSI</a></br></br>'
	elif vLevel == '1_4':
		vResult = '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/index.html\'>Basic HTML</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project1.php\'>PHP</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section2/index\'>Java Script</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project3.shtml\'>Perl</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section4/index\'>Java</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp\'>JSP Programming</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml\'>JSF Programming</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section5/index\'>ASP.Net</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section6/index\'>Databases</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/SSI/Section1/index.html\'>Apache SSI</a></br></br>'
	elif vLevel == '1_5':
		vResult = '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/index.html\'>Basic HTML</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project1.php\'>PHP</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section2/index\'>Java Script</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project3.shtml\'>Perl</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section4/index\'>Java</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section5/index\'>ASP.Net</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml\'>Webpage Application</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx\'>Webform Application</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'http://htkb.dyndns.org:81/MVC/Section1_5/Project3\'>MVC Application</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section6/index\'>Databases</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/SSI/Section1/index.html\'>Apache SSI</a></br></br>'
	elif vLevel == '1_6':
		vResult = '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/index.html\'>Basic HTML</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project1.php\'>PHP</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section2/index\'>Java Script</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/Section1/Project3.shtml\'>Perl</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section4/index\'>Java</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section5/index\'>ASP.Net</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section1/Section6/index\'>Databases</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section1/Section6/Project1\'>Oracle</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section1/Section6/Project2\'>Derby</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section1/Section6/Project3\'>MySQL</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section1/Section6/Project4\'>SQL Server</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section1/Section6/Project5\'>Postgres</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'http://htkb.dyndns.org/SSI/Section1/index.html\'>Apache SSI</a></br></br>'
	elif vLevel == '2':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_1':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section1/Project1\'>Gynowars RPG</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section1/Project2\'>Gynowars: Battle Arena CCG</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section1/Project3\'>Gynowars: Crash Ball</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_4':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section4/Project1\'>Warring Nations</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section4/Project2\'>Psychodom: The One Empire</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_5':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section1/index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section2/index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section3/index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section4/index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_5_1':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section1/index\'>Global</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section1/Project1\'>Team Tactial: Crash Ball</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section1/Project2\'>Wars of Antarrea</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section1/Project3\'>Revolutions: Invading Nations:</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section1/Project4\'>Revolutions: Rebellion Against the Fist</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section1/Project5\'>Revolutions: Return to Arms</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section1/Project6\'>Revolutions: Post Wars</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section2/index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section3/index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section4/index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_5_2':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section1/index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section2/index\'>Grendol</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section2/Project1\'>Land of the Orcish Empire: Age of Magic</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section2/Project2\'>Coliseum: Arena</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section3/index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section4/index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_5_3':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section1/index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section2/index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section3/index\'>Utopia</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section3/Project1\'>Avia:Elemental Angels</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section4/index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_5_4':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section1/index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section2/index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section3/index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section5/Section4/index\'>Elvia</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section5/Section4/Project1\'>Nine Card</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_6':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section6/Project1\'>Magic: The Tactical</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section6/Section2/index\'>Warhammer 40K</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_6_2':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section6/Project1\'>Magic: The Tactical</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section6/Section2/index\'>Warhammer 40K</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section6/Section2/Project1\'>Mission!</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section6/Section2/Section2/index\'>HTKB Armies</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '2_6_2_2':
		vResult = '<a class=\'navlinkA\' href=\'/Section2/Section1/index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section4/index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section5/index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Section6/index\'>Editations</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section6/Project1\'>Magic: The Tactical</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Section2/Section6/Section2/index\'>Warhammer 40K</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section6/Section2/Project1\'>Mission!</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Section2/Section6/Section2/Section2/index\'>HTKB Armies</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project1\'>Ad Infinitum</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project2\'>Avia</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project3\'>De Luna</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project4\'>Eve</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project5\'>Geo Marines</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project6\'>Twin Fists</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project7\'>Voboulids</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project8\'>Fungi</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project9\'>Synergy</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project10\'>The Dark</a></br></br>'
		vResult += '			<a class=\'navlinkD\' href=\'/Section2/Section6/Section2/Section2/Project11\'>Vivus Mortem</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project7\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project8\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project9\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project10\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project11\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project12\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project13\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project14\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section2/Project15\'>Conversion</a></br></br>'
	elif vLevel == '3':
		vResult = '<a class=\'navlinkA\' href=\'/Section3/Project1\'>Online Experience Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section3/Project2\'>Game Maker Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section3/Project3\'>Java Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section3/Project4\'>C# Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Section3/Project5\'>C++ Downloads</a></br></br>'
	else:
		vResult = '<a class=\'navlinkA\' href=\'/AboutUs\'>About Us</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Media\'>Media</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Minecraft\'>Minecraft!</a></br></br>'
	return vResult

