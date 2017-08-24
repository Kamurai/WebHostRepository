import web
import Universal
import Navigation
import Content
import Versions

    
urls = (
    '/favicon.ico', 'icon',
    '/', 'index',
    '/index', 'index',
    '/AboutUs', 'AboutUs',
    '/Media', 'Media',
    '/Minecraft', 'Minecraft',
    '/Section1/index', 'Section1',
    '/Section1/Project7', 'Section1P7',
    '/Section1/Section2/index', 'Section1_2',
    '/Section1/Section4/index', 'Section1_4',
    '/Section1/Section5/index', 'Section1_5',
    '/Section1/Section6/index', 'Section1_6',
    '/Section1/Section6/Project1', 'Section1_6P1',
    '/Section1/Section6/Project2', 'Section1_6P2',
    '/Section1/Section6/Project3', 'Section1_6P3',
    '/Section1/Section6/Project4', 'Section1_6P4',
    '/Section1/Section6/Project5', 'Section1_6P5',
    '/Section2/index', 'Section2',
    '/Section2/Project2', 'Section2P2',
    '/Section2/Project3', 'Section2P3',
    '/Section2/Project7', 'Section2P7',
    '/Section2/Project8', 'Section2P8',
    '/Section2/Project9', 'Section2P9',
    '/Section2/Project10', 'Section2P10',
    '/Section2/Project11', 'Section2P11',
    '/Section2/Project12', 'Section2P12',
    '/Section2/Project13', 'Section2P13',
    '/Section2/Project14', 'Section2P14',
    '/Section2/Project15', 'Section2P15',
    '/Section2/Section1/index', 'Section2_1',
    '/Section2/Section1/Project1', 'Section2_1P1',
    '/Section2/Section1/Project2', 'Section2_1P2',
    '/Section2/Section1/Project3', 'Section2_1P3',
    '/Section2/Section4/index', 'Section2_4',
    '/Section2/Section4/Project1', 'Section2_4P1',
    '/Section2/Section4/Project2', 'Section2_4P2',
    '/Section2/Section5/index', 'Section2_5',
    '/Section2/Section5/Section1/index', 'Section2_5_1',
    '/Section2/Section5/Section1/Project1', 'Section2_5_1P1',
    '/Section2/Section5/Section1/Project2', 'Section2_5_1P2',
    '/Section2/Section5/Section1/Project3', 'Section2_5_1P3',
    '/Section2/Section5/Section1/Project4', 'Section2_5_1P4',
    '/Section2/Section5/Section1/Project5', 'Section2_5_1P5',
    '/Section2/Section5/Section1/Project6', 'Section2_5_1P6',
    '/Section2/Section5/Section2/index', 'Section2_5_2',
    '/Section2/Section5/Section2/Project1', 'Section2_5_2P1',
    '/Section2/Section5/Section2/Project2', 'Section2_5_2P2',
    '/Section2/Section5/Section3/index', 'Section2_5_3',
    '/Section2/Section5/Section3/Project1', 'Section2_5_3P1',
    '/Section2/Section5/Section4/index', 'Section2_5_4',
    '/Section2/Section5/Section4/Project1', 'Section2_5_4P1',
    '/Section2/Section6/index', 'Section2_6',
    '/Section2/Section6/Project1', 'Section2_6P1',
    '/Section2/Section6/Section2/index', 'Section2_6_2',
    '/Section2/Section6/Section2/Project1', 'Section2_6_2P1',
    '/Section2/Section6/Section2/Section2/index', 'Section2_6_2_2',
    '/Section2/Section6/Section2/Section2/Project1', 'Section2_6_2_2P1',
    '/Section2/Section6/Section2/Section2/Project2', 'Section2_6_2_2P2',
    '/Section2/Section6/Section2/Section2/Project3', 'Section2_6_2_2P3',
    '/Section2/Section6/Section2/Section2/Project4', 'Section2_6_2_2P4',
    '/Section2/Section6/Section2/Section2/Project5', 'Section2_6_2_2P5',
    '/Section2/Section6/Section2/Section2/Project6', 'Section2_6_2_2P6',
    '/Section2/Section6/Section2/Section2/Project7', 'Section2_6_2_2P7',
    '/Section2/Section6/Section2/Section2/Project8', 'Section2_6_2_2P8',
    '/Section2/Section6/Section2/Section2/Project9', 'Section2_6_2_2P9',
    '/Section2/Section6/Section2/Section2/Project10', 'Section2_6_2_2P10',
    '/Section2/Section6/Section2/Section2/Project11', 'Section2_6_2_2P11',
    '/Section3/index', 'Section3',
    '/Section3/Project1', 'Section3_1',
    '/Section3/Project2', 'Section3_2',
    '/Section3/Project3', 'Section3_3',
    '/Section3/Project4', 'Section3_4',
    '/Section3/Project5', 'Section3_5'
)

common_globals = {'getHead': Universal.getHead,
                    'getCSS': Universal.getCSS,
                    'getHeader': Universal.getHeader,
                    'getLogo': Universal.getLogo,
                    'getNavBar': Universal.getNavBar,
                    'getFooter': Universal.getFooter,
                    'getNavigation': Navigation.getNavigation,
                    'getContent': Content.getContent,
                    'getVersions': Versions.getVersions
                    }


app = web.application(urls, globals(), autoreload=True)
render = web.template.render('templates/')#, base='Layout')

static = web.template.render('static/')

Main = web.template.render('templates/', globals=common_globals)
Section1 = web.template.render('templates/Section1/')
Section1_2 = web.template.render('templates/Section1/Section2/')
Section1_4 = web.template.render('templates/Section1/Section4/')
Section1_5 = web.template.render('templates/Section1/Section5/')
Section1_6 = web.template.render('templates/Section1/Section6/')
Section2 = web.template.render('templates/Section2/')
Section2_1 = web.template.render('templates/Section2/Section1/')
Section2_4 = web.template.render('templates/Section2/Section4/')
Section2_5 = web.template.render('templates/Section2/Section5/')
Section2_5_2 = web.template.render('templates/Section2/Section5/Section2/')
Section2_5_3 = web.template.render('templates/Section2/Section5/Section3/')
Section2_5_4 = web.template.render('templates/Section2/Section5/Section4/')
Section2_6 = web.template.render('templates/Section2/Section6/')
Section2_6_2 = web.template.render('templates/Section2/Section6/Section2/')
Section2_6_2_2 = web.template.render('templates/Section2/Section6/Section2/Section2/')
Section3 = web.template.render('templates/Section3/')

class static:
    def GET(self):
        return static()

#class icon:
#    def GET(self):
#        return static.favicon()

class index:
    def GET(self):
        vPage = '0'
        vLevel = '0'
        vSection = '0'
        #vHead = Universal.getHead(vSection)
        #vHeader = Universal.getHeader()
        #vNavBar = Universal.getNavBar()
        #vNavigation = Navigation.getNavigation(vLevel)
        #vContent = Content.getContent(vLevel)
        #vVersions = Versions.getVersions(vLevel)
        #vFooter = Universal.getFooter()
        return Main.Layout(vPage, vLevel, vSection)
        
class AboutUs:
    def GET(self):
        vPage = '1'
        vLevel = '0'
        vSection = '0'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Media:
    def GET(self):
        vPage = '2'
        vLevel = '0'
        vSection = '0'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Minecraft:
    def GET(self):
        vPage = '3'
        vLevel = '0'
        vSection = '0'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section1:
    def GET(self):
        vPage = '0'
        vLevel = '1'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
    
class Section1P7:
    def GET(self):
        vPage = '7'
        vLevel = '1'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section1_2:
    def GET(self):
        vPage = '0'
        vLevel = '1_2'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section1.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section1_4:
    def GET(self):
        vPage = '0'
        vLevel = '1_4'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section1.Section4.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section1_5:
    def GET(self):
        vPage = '0'
        vLevel = '1_5'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section1.Section5.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section1_6:
    def GET(self):
        vPage = '0'
        vLevel = '1_6'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section1.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section1_6P1:
    def GET(self):
        vPage = '1'
        vLevel = '1_6'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section1.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section1_6P2:
    def GET(self):
        vPage = '2'
        vLevel = '1_6'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section1.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section1_6P3:
    def GET(self):
        vPage = '3'
        vLevel = '1_6'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section1.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section1_6P4:
    def GET(self):
        vPage = '4'
        vLevel = '1_6'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section1.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section1_6P5:
    def GET(self):
        vPage = '5'
        vLevel = '1_6'
        vSection = '1'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section1.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2:
    def GET(self):
        vPage = '0'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2P2:
    def GET(self):
        vPage = '2'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P3:
    def GET(self):
        vPage = '3'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P7:
    def GET(self):
        vPage = '7'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P8:
    def GET(self):
        vPage = '8'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P9:
    def GET(self):
        vPage = '9'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P10:
    def GET(self):
        vPage = '10'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P11:
    def GET(self):
        vPage = '11'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P12:
    def GET(self):
        vPage = '12'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P13:
    def GET(self):
        vPage = '13'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P14:
    def GET(self):
        vPage = '14'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2P15:
    def GET(self):
        vPage = '15'
        vLevel = '2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_1:
    def GET(self):
        vPage = '0'
        vLevel = '2_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_1P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_1P2:
    def GET(self):
        vPage = '2'
        vLevel = '2_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_1P3:
    def GET(self):
        vPage = '3'
        vLevel = '2_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_4:
    def GET(self):
        vPage = '0'
        vLevel = '2_4'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section4.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_4P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_4'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section4.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_4P2:
    def GET(self):
        vPage = '2'
        vLevel = '2_4'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section4.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5:
    def GET(self):
        vPage = '0'
        vLevel = '2_5'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_5_1:
    def GET(self):
        vPage = '0'
        vLevel = '2_5_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_5_1P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_5_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_1P2:
    def GET(self):
        vPage = '2'
        vLevel = '2_5_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_1P3:
    def GET(self):
        vPage = '3'
        vLevel = '2_5_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_1P4:
    def GET(self):
        vPage = '4'
        vLevel = '2_5_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_1P5:
    def GET(self):
        vPage = '5'
        vLevel = '2_5_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_1P6:
    def GET(self):
        vPage = '6'
        vLevel = '2_5_1'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section1.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_2:
    def GET(self):
        vPage = '0'
        vLevel = '2_5_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_5_2P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_5_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_2P2:
    def GET(self):
        vPage = '2'
        vLevel = '2_5_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_3:
    def GET(self):
        vPage = '0'
        vLevel = '2_5_3'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_5_3P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_5_3'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_5_4:
    def GET(self):
        vPage = '0'
        vLevel = '2_5_4'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section4.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_5_4P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_5_4'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section5.Section4.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6:
    def GET(self):
        vPage = '0'
        vLevel = '2_6'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_6P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_6'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2:
    def GET(self):
        vPage = '0'
        vLevel = '2_6_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_6_2P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_6_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2:
    def GET(self):
        vPage = '0'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section2_6_2_2P1:
    def GET(self):
        vPage = '1'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P2:
    def GET(self):
        vPage = '2'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P3:
    def GET(self):
        vPage = '3'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P4:
    def GET(self):
        vPage = '4'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P5:
    def GET(self):
        vPage = '5'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P6:
    def GET(self):
        vPage = '6'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P7:
    def GET(self):
        vPage = '7'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P8:
    def GET(self):
        vPage = '8'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P9:
    def GET(self):
        vPage = '9'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P10:
    def GET(self):
        vPage = '10'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section2_6_2_2P11:
    def GET(self):
        vPage = '11'
        vLevel = '2_6_2_2'
        vSection = '2'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section2.Section6.Section2.Section2.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section3:
    def GET(self):
        vPage = '0'
        vLevel = '3'
        vSection = '3'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel)
        vVersions = Versions.getVersions(vLevel)
        vFooter = Universal.getFooter()
        #return render.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        return Main.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)
        
class Section3_1:
    def GET(self):
        vPage = '1'
        vLevel = '3'
        vSection = '3'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section3_2:
    def GET(self):
        vPage = '2'
        vLevel = '3'
        vSection = '3'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section3_3:
    def GET(self):
        vPage = '3'
        vLevel = '3'
        vSection = '3'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section3_4:
    def GET(self):
        vPage = '4'
        vLevel = '3'
        vSection = '3'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

class Section3_5:
    def GET(self):
        vPage = '5'
        vLevel = '3'
        vSection = '3'
        vHead = Universal.getHead(vSection)
        vHeader = Universal.getHeader()
        vNavBar = Universal.getNavBar()
        vNavigation = Navigation.getNavigation(vLevel)
        vContent = Content.getContent(vLevel+'_'+vPage+'P')
        vVersions = Versions.getVersions(vLevel+'_'+vPage+'P')
        vFooter = Universal.getFooter()
        return Main.Section3.Layout(vHead, vHeader, vNavBar, vNavigation, vContent, vVersions, vFooter)

if __name__ == '__main__':
    app.run()