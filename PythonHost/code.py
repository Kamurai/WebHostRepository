import web

urls = (
  '/', 'index',
  '/index', 'index',
  '/AboutUs', 'AboutUs',
  '/Media', 'Media',
  '/Minecraft', 'Minecraft')

app = web.application(urls, globals(), autoreload=True)
render = web.template.render('templates/')#, base='Layout')

class index:
    def GET(self):
        return render.Layout(0, 0, "Main.css")

class AboutUs:
    def GET(self):
        return render.Layout(1, 0, "Main.css")

class Media:
    def GET(self):
        return render.Layout(2, 0, "Main.css")

class Minecraft:
    def GET(self):
        return render.Layout(3, 0, "Main.css")

		
		
		
		
		
		
		
		
		
		
		
if __name__ == "__main__":
    app.run()