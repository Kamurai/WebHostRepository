<%@ Page Title="MySQL Programming" Language="C#" MasterPageFile="~/Section1/Section6/Template.master" AutoEventWireup="true"
    CodeFile="Project3.aspx.cs" Inherits="_Project1_6_3" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">

<h1>
	<u>MySQL Programming</u>
</h1>
<p align="left">
	This section is dedicated to MySQL programming.
</p>
</br>
</br>
<div align="center">   
    MySQL Instance
    </br>
    </br>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:MySQLConnectionString %>" SelectCommand="SELECT * FROM test" ProviderName="<%$ ConnectionStrings:MySQLConnectionString.ProviderName %>">
    </asp:SqlDataSource>
    </br>
    </br>
    <asp:GridView
          id="GridView1"
          runat="server"
          DataSourceID="SqlDataSource1">
    </asp:GridView>
</div>

</asp:Content>