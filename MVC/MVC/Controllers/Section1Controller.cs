using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCApplication.Controllers
{
    public class Section1Controller : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "";
            return View();
        }

        public ActionResult Project1HTML() //HTML
        {
            ViewBag.Message = "";
            return View("http://htkb.dyndns.org/Section1/Project1.html");
        }
        
        public ActionResult Project1PHP() //PHP
        {
            ViewBag.Message = "";
            return View("http://htkb.dyndns.org/Section1/Project1.php");
        }

        public ActionResult Project3() //Perl
        {
            ViewBag.Message = "";
            return View("http://htkb.dyndns.org/Section1/Project3.shtml");
        }

        public ActionResult Project7()
        {
            ViewBag.Message = "";
            return View();
        }

        public ActionResult Project8()
        {
            ViewBag.Message = "";
            return View();
        }

        public ActionResult Project9()
        {
            ViewBag.Message = "";
            return View();
        }
    }
}
