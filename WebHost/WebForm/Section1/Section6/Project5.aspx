<%@ Page Title="PostgreSQL Programming" Language="C#" MasterPageFile="~/Section1/Section6/Template.master" AutoEventWireup="true"
    CodeFile="Project5.aspx.cs" Inherits="_Project1_6_5" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">

<h1>
	<u>PostgreSQL Programming</u>
</h1>
<p align="left">
	This section is dedicated to PostgreSQL programming.
</p>
</br>
</br>
<div align="center">   
    PostgreSQL Instance
    </br>
    </br>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:PostgreSQLConnectionString %>" SelectCommand="SELECT * FROM &quot;Test&quot;.&quot;Test&quot;" ProviderName="<%$ ConnectionStrings:PostgreSQLConnectionString.ProviderName %>">
    </asp:SqlDataSource>
    </br>
    </br>
    <asp:GridView
          id="GridView1"
          runat="server"
          DataSourceID="SqlDataSource1" AutoGenerateColumns="False">
        <Columns>
            <asp:BoundField DataField="Index" HeaderText="Index" SortExpression="Index" />
            <asp:BoundField DataField="Color" HeaderText="Color" SortExpression="Color" />
        </Columns>
    </asp:GridView>
</div>
    
</asp:Content>