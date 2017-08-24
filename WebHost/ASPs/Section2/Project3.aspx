<%@ Page Language="Javascript" AutoEventWireup="true" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<script language="javascript" src="../Universal.js" runat="server"></script>
<script language="javascript" src="Layout.js" runat="server"></script>
<script language="javascript" src="Custom.js" runat="server"></script>
<%	
	var vPage  = 3;
	var vLevel = 1;
	var vExtension = 2;
	Response.Write("<head>");
	    WriteHeader(vLevel);
    Response.Write("</head>");
	Response.Write("<body bgcolor='#000000' link='#C0C0C0' vlink='#808080' alink='#FF0000'>");
		WriteWebpage(vPage, vLevel, vExtension);
	Response.Write("</body>");
%>
</html>