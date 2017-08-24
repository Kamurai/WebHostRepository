def getHead(vSection):
	vResult = '<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">'
	vResult += '<link href=' + getCSS(vSection) + ' rel=\"stylesheet\" type="text/css">'
	return vResult
	
def getCSS(vSection):
	if vSection == '1':
		vResult = '/static/Section1/Section1.css'
	elif vSection == '2':
		vResult = '/static/Section2/Section2.css'
	elif vSection == '3':
		vResult = '/static/Section3/Section3.css'
	else:
		vResult = '/static/Main.css'
	return vResult

def getHeader():
	vResult = '<img id=\"idLogo\" src=' + getLogo() + '>'
	return vResult

def getLogo():
	return "/static/logo_HouseThatKamuraiBuilt_blueonblack.jpg"

def getNavBar():
	vResult = '<a class=\'navBar\' href=\'/index\'>Home</a>'
	vResult += '<a class=\'navBar\' href=\'/Section1/index\'>Web Programming</a>'
	vResult += '<a class=\'navBar\' href=\'/Section2/index\'>Private Projects</a>'
	vResult += '<a class=\'navBar\' href=\'/Section3/index\'>Downloadable Projects</a>'
	return vResult

def getFooter():
	vResult = '<p id=\'idFooterContent\'>'
	vResult += '	Copyright 2012 All rights reserved<br>'
	vResult += '	House That Kamurai Built<br>'
	vResult += '</p>'
	vResult += '<p id=\'idFooterManagement\'>'
	vResult += '	Website managed by Kamurai.'
	vResult += '</p>'
	return vResult
	
