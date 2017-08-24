<!DOCTYPE html>
<html>
	<script language="JavaScript" src="../../Universal.js" runat="server"></script>
	<script language="JavaScript" src="../../DataMethod.js" runat="server"></script>
	<script language="JavaScript" src="../Layout.js" runat="server"></script>
	<script language="JavaScript" src="Custom.js" runat="server"></script>
	
	<%
		dim vPage, vLevel, vExtension
		vPage = 1
		vLevel = 2
		vExtension = 1
		Response.Write("<head>")
			Call WriteHeader(vLevel)
        Response.Write("</head>")
		Response.Write("<body bgcolor='#000000' link='#C0C0C0' vlink='#808080' alink='#FF0000'>")
			Call WriteWebpage(vPage, vLevel, vExtension)
		
		Dim adoCon, rs, driver, url, dbName, dbUsername, dbPassword
		driver = "oracle.jdbc.driver.OracleDriver"
		url = "jdbc:oracle:thin:@localhost:1521:xe"
		dbName = "Test"
		dbUsername = "kamurai"
		dbPassword = "bluezer0"
		
		Set adoCon = Server.CreateObject("ADODB.Connection")
		adoCon.Open( "Driver="+driver+";Server="+url+";Database="+dbName+";UID="+dbUsername+";PWD="+dbPassword+";")
		
		Dim rowID, col, sqlStatement
		rowID = "Red"
		col = "1"
		if(col <= 0) then
			sqlStatement =+ "indext "
		else
			sqlStatement =+ "color "
		end if
		sqlStatement =+ "from test where "
		
		if(col <= 0) then
			sqlStatement =+ "indext "
		else
			sqlStatement =+ "color "
		end if
		
		sqlStatement =+ "= '" + rowID + "'"
		
		set rs = server.createobject("adodb.recordset")
		
		Response.Write("Start")
		'Response.Write(rs("color"))
		Response.Write("End")
		
		adoCon.Close()
			
		Response.Write("</body>")
	%>
</html>