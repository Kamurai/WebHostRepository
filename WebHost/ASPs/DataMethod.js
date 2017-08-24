function OracleMethod(rowID, col)
{
	var sqlStatement = "Select ";
	var result = "";
	
	var rs = new ActiveXObject("ADODB.Recordset");
	var conObj = new ActiveXObject('ADODB.Connection');
	
	
	if(col <= 0)
	{
		sqlStatement += "indext ";
	}
	else
	{
		sqlStatement += "color ";
	}

	sqlStatement += "from test where ";        
	
	if(col <= 0)
	{
		sqlStatement += "indext ";
	}
	else
	{
		sqlStatement += "color ";
	}

	sqlStatement += "= '" + rowID + "'";
	
	openOracleConnection(conObj);
	
	rs.Open(sqlStatement,conObj);
	
	Response.Write(rs(0));
	
	rs.close;
	
	closeOracleConnection()
}

function openOracleConnection(conObj)
{
	var driver = "oracle.jdbc.driver.OracleDriver";
	var url = "localhost:1521:xe";
	//var url = "jdbc:oracle:thin:@htkb.dyndns.org:1521:xe";
	var dbName = "Test";
	var dbUsername = "kamurai";
	var dbPassword = "bluezer0";
    
	
	//var connectionstring="Driver="+driver+";Data Source="+url+";Initial Catalog="+dbName+";User ID="+dbUsername+";Password="+dbPassword+";";//Provider=SQLOLEDB";
	var connectionstring="Driver="+driver+";Data Source="+url+";Initial Catalog="+dbName+";User ID="+dbUsername+";Password="+dbPassword;

	Set OraDatabase = Server.CreateObject("ADODB.Connection");
	OraDatabase.Open "connectionstring"; //dsn=OracleDSN;uid=userid;pwd=password;";
	
	
	//Response.Write("<%");
	//Response.Write("Dim adoCon");
	//Response.Write("Set adoCon = Server.CreateObject('ADODB.Connection')");
	//Response.Write("adoCon.Open 'provider=oraoledb.oracle;data source="+dbName+";user id="+dbUsername+";password="+dbPassword+";plsqlrset=true");
	//Response.Write("%>");
	
	conObj.Open(connectionstring);
}

function openOracleConnectionBU2()
{
	var driver = "oracle.jdbc.driver.OracleDriver";
	var url = "jdbc:oracle:thin:@localhost:1521:xe";
	var dbName = "Test";
	var dbUsername = "kamurai";
	var dbPassword = "bluezer0";
    
	//var conObj = new OracleConnection(); //ActiveXObject('ADODB.Connection');
	//var connectionString = "Provider="+driver+"URL="+url+";";
	//var connectionstring="Driver="+driver+";Data Source="+url+";Initial Catalog="+dbName+";User ID="+dbUsername+";Password="+dbPassword+";";//Provider=SQLOLEDB";

	
	//conObj.Open(connectionString, dbUsername, dbPassword);
	//conObj.Open(connectionstring);
}

function closeOracleConnection()
{
	//conObj.close;
}

