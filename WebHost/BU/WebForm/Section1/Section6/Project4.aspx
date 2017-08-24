<%@ Page Title="SQL Server Programming" Language="C#" MasterPageFile="~/Section1/Section6/Template.master" AutoEventWireup="true"
    CodeFile="Project4.aspx.cs" Inherits="_Project1_6_4" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">

<h1>
	<u>SQL Server Programming</u>
</h1>
<div align="center">
	This section is dedicated to SQL Server programming.
    </br>
    </br>
    SQL Server Instance
    </br>
    </br>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SQLServerConnectionString %>" SelectCommand="SELECT * FROM [Test]">
    </asp:SqlDataSource>
    </br>
    </br>
    <asp:GridView
          id="GridView1"
          runat="server"
          DataSourceID="SqlDataSource1">
    </asp:GridView>
    </br>
    </br>
    SQL Server Express Instance
    </br>
    </br>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:SQLServerExpressConnectionString %>" SelectCommand="SELECT * FROM [Test]">
    </asp:SqlDataSource>
    </br>
    </br>
    <asp:GridView
          id="GridView2"
          runat="server"
          DataSourceID="SqlDataSource2">
    </asp:GridView>
    
</div>
    
</asp:Content>