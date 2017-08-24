<?php
	function SQLServerMethod($rowID, $col)
	{
		$sqlStatement = "Select ";
		$result = "";
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "from test where ";        
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "= '" . $rowID . "'";
		
		
		$conObj = openSQLServerConnection();
		
		$rs = sqlsrv_query($conObj, $sqlStatement);
		
		if($rs != false)
		{
			$row = sqlsrv_fetch_array($rs);
			
			if($col <= 0)
			{
				$result = $row["Index"];
			}
			else
			{
				$result = $row["color"];
			}
			
			sqlsrv_free_stmt($rs);
			sqlsrv_close($conObj);
			
		}
		else
		{
			echo $sqlstatement;
		}
		
		return $result;
	}

	function openSQLServerConnection()
	{
		$driver = "org.apache.derby.jdbc.EmbeddedDriver";
		$url = "localhost\SQLEXPRESS";
		$port = "1433";
		$dbName = "Test";
		$dbUsername = "Kamurai";
		$dbPassword = "bluezer0";
		
		$connArray = array("Database"=>$dbName, "UID"=>$dbUsername, "PWD"=>$dbPassword);
		
		echo $url.", ".$port;
		$conObj = sqlsrv_connect($url.", ".$port, $connArray);
		
		if($conObj)
		{
			echo "Cunt";
		}
		else
		{
			echo "</br>Balls";
		}
		
		
		return $conObj;
	}
	
	function closeSQLServerConnection($conObj)
	{
		$conObj->close();
	}
	
	function SQLServerExpressMethod($rowID, $col)
	{
		$sqlStatement = "Select ";
		$result = "";
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "from test where ";        
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "= '" . $rowID . "'";
		
		$conObj = openSQLServerExpressConnection();
		
		$rs = mssql_query($conObj, $sqlStatement);
		
		if($rs != false)
		{
			$row = mssql_data_seek($rs, 0);
			
			if($col <= 0)
			{
				$result = $row["Index"];
			}
			else
			{
				$result = $row["color"];
			}
			
			mssql_free_result($rs);
			mssql_close($conObj);
			
		}
		
		return $result;
	}

	function openSQLServerExpressConnection()
	{
		$driver = "org.apache.derby.jdbc.EmbeddedDriver";
		$url = "localhost\SQLExpress";
		$port = "1433";
		$dbName = "Test";
		$dbUsername = "Kamurai";
		$dbPassword = "bluezer0";
		
		$conObj = mssql_connect($url, $dbUsername, $dbPassword);
		
		return $conObj;
	}
	
	function closeSQLServerExpressConnection($conObj)
	{
		$conObj->close();
	}
	
	function DerbyMethod($rowID, $col)
	{
		$sqlStatement = "Select ";
		$result = "";
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "from test where ";        
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "= '" . $rowID . "'";
		
		$conObj = openMySQLConnection();
		
		$rs = mysqli_query($conObj, $sqlStatement);
		
		if($rs != false)
		{
			$row = mysqli_fetch_array($rs);
			
			if($col <= 0)
			{
				$result = $row["Index"];
			}
			else
			{
				$result = $row["color"];
			}
			
			$conObj->close();
			
		}
		
		return $result;
	}

	function openDerbyConnection()
	{
		$driver = "org.apache.derby.jdbc.EmbeddedDriver";
		$url = "localhost";
		$port = "1527";
		$dbName = "Test";
		$dbUsername = "Kamurai";
		$dbPassword = "bluezer0";
		
		$DSN = "DRIVER={IBM DB2 ODBC DRIVER};PROTOCOL=TCPIP;"."DATABASE=".$dbName.";HOSTNAME=".$url.";PORT=".$port.";UID=".$dbUsername.";PWD=".$dbPassword;
		
		$conObj = new PDO("ODBC:".$DSN);

		return $conObj;
	}
	
	function closeDerbyConnection($conObj)
	{
		$conObj->close();
	}
	
	function MySQLMethod($rowID, $col)
	{
		$sqlStatement = "Select ";
		$result = "";
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "from test where ";        
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "`Index` ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "= '" . $rowID . "'";
		
		$conObj = openMySQLConnection();
		
		$rs = mysqli_query($conObj, $sqlStatement);
		
		if($rs != false)
		{
			$row = mysqli_fetch_array($rs);
			
			if($col <= 0)
			{
				$result = $row["Index"];
			}
			else
			{
				$result = $row["color"];
			}
			
			$conObj->close();
			
		}
		
		return $result;
	}

	function openMySQLConnection()
	{
		$driver = "com.mysql.jdbc.Driver";
		$url = "localhost:3307/";
		$dbName = "test";
		$dbUsername = "Test";
		$dbPassword = "bluezer0";
		
		$conObj = new mysqli($url, $dbUsername, $dbPassword, $dbName);

		if ($conObj->connect_error) 
		{
			die("Connection failed: " . $conObj->connect_error);
		} 

		return $conObj;
	}
	
	function closeMySQLConnection($conObj)
	{
		$conObj->close();
	}

	function OracleMethod($rowID, $col)
	{
		$sqlStatement = "Select ";
		$result = "";
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "indext ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "from test where ";        
		
		if($col <= 0)
		{
			$sqlStatement = $sqlStatement . "indext ";
		}
		else
		{
			$sqlStatement = $sqlStatement . "color ";
		}

		$sqlStatement = $sqlStatement . "= '" . $rowID . "'";
		
		$conObj = openOracleConnection();
		
		$stid = oci_parse($conObj, $sqlStatement);
		
		oci_execute($stid);
		
		$row = oci_fetch_array($stid, OCI_BOTH);
		
		if($col <= 0)
		{
			$result = $row[0];
		}
		else
		{
			$result = $row[0];
		}		
		
		oci_free_statement($stid);
		oci_close($conObj);
		
		return $result;
	}
	
	function openOracleConnection()
	{
		$driver = "oracle.jdbc.driver.OracleDriver";
		$url = "jdbc:oracle:thin:@localhost:1521:xe";
		$dbName = "Test";
		$dbUsername = "kamurai";
		$dbPassword = "bluezer0";
		
		$conObj = oci_connect($dbUsername, $dbPassword, $url+"/"+$dbName);
		if (!$conObj || $conObj == null) 
		{
			$e = oci_error();
			trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
		}
		
		return $conObj;
	}

	function closeOracleConnection($conObj)
	{
		$conObj->close();
	}
?>