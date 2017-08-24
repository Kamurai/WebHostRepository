<!DOCTYPE html>
<html>
	<script language="JavaScript" src="../../Universal.js" runat="server"></script>
	<script language="JavaScript" src="../Layout.js" runat="server"></script>
	<script language="JavaScript" src="Custom.js" runat="server"></script>
	<%
		dim vPage, vLevel, vExtension
		vPage = 3
		vLevel = 2
		vExtension = 1
		Response.Write("<head>")
			Call WriteHeader(vLevel)
        Response.Write("</head>")
		Response.Write("<body bgcolor='#000000' link='#C0C0C0' vlink='#808080' alink='#FF0000'>")
			Call WriteWebpage(vPage, vLevel, vExtension)
		Response.Write("</body>")
	%>
</html>