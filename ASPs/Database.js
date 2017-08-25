function SQLServerSetup()
{
	Response.Write("<%@ Import Namespace=\"System.Data.OleDb\" %>");
	Response.Write("<script  runat=\"server\">");
		Response.Write("sub Page_Load");
		Response.Write("dim dbconn,sql,dbcomm,dbread");
		Response.Write("dbconn=New OleDbConnection(\"Provider=Microsoft.Jet.OLEDB.4.0;data source=\"//localhost:1433;DatabaseName=Test\"))");
		Response.Write("dbconn.Open()");
		Response.Write("sql=\"");
			Response.Write("Select * from test");
			//Response.Write(SQLServerGetColors());
		Response.Write("\"");
		Response.Write("dbcomm=New OleDbCommand(sql,dbconn)");
		Response.Write("dbread=dbcomm.ExecuteReader()");
		Response.Write("colors.DataSource=dbread");
		Response.Write("colors.DataBind()");
		Response.Write("dbread.Close()");
		Response.Write("dbconn.Close()");
		Response.Write("end sub");
	Response.Write("</script>");
}


function SQLServerGetColors()
{
	String sqlStatement = "Select ";
	
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
		sqlStatement += "= " + rowID;
	}
	else
	{
		sqlStatement += "color ";
		sqlStatement += "= '" + rowID + "'";
	}

	Return sqlStatement;
}

function SQLServerDataList()
{
	Response.Write("<form runat=\"server\">");
	Response.Write("<asp:DataList");
	Response.Write("id=\"colors\"");
	Response.Write("runat=\"server\"");
	Response.Write("cellpadding=\"2\"");
	Response.Write("cellspacing=\"2\"");
	Response.Write("borderstyle=\"inset\"");
	Response.Write("backcolor=\"#e8e8e8\"");
	Response.Write("width=\"100%\"");
	Response.Write("headerstyle-font-name=\"Verdana\"");
	Response.Write("headerstyle-font-size=\"12pt\"");
	Response.Write("headerstyle-horizontalalign=\"center\"");
	Response.Write("headerstyle-font-bold=\"True\"");
	Response.Write("itemstyle-backcolor=\"#778899\"");
	Response.Write("itemstyle-forecolor=\"#ffffff\"");
	Response.Write("footerstyle-font-size=\"9pt\"");
	Response.Write("footerstyle-font-italic=\"True\">");
}

function SQLServerRepeater()
{
	Response.Write("<form runat=\"server\">");
	Response.Write("<asp:Repeater id=\"colors\" runat=\"server\">");
}
