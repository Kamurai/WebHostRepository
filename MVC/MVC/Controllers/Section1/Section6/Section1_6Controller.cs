using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System;
using System.Data;
using System.Linq;
using System.Web.Mvc;
using MVC.Models;
using MVC.Interfaces;
using MVC.Repositories;
using MVC.Database;
//using PagedList;


namespace MVC.Controllers
{
    public class Section1_6Controller : Controller
    {
        private IColorRepository ColorRepository;

        public Section1_6Controller()
        {
            this.ColorRepository = new ColorRepository(new SQLServerConnectionString());
        }


        public ActionResult Index()
        {
            ViewBag.Message = "";

            return View("~/Views/Section1/Section6/Index.cshtml");
        }

        public ActionResult Project1()
        {
            ViewBag.Message = "";
            return View("~/Views/Section1/Section6/Project1.cshtml");
        }

        public ActionResult Project2()
        {
            ViewBag.Message = "";
            return View("~/Views/Section1/Section6/Project2.cshtml");
        }

        public ActionResult Project3()
        {
            ViewBag.Message = "";
            return View("~/Views/Section1/Section6/Project3.cshtml");
        }

        public ActionResult Project4()
        {
            ViewBag.Message = "";
            return View("~/Views/Section1/Section6/Project4.cshtml");
        }

        public ActionResult Project5()
        {
            ViewBag.Message = "";
            return View("~/Views/Section1/Section6/Project5.cshtml");
        }

        public ActionResult Project6()
        {
            ViewBag.Message = "";
            return View("~/Views/Section1/Section6/Project6.cshtml");
        }
        /*
        public ViewResult Details(String Indext)
        {
            Test ColorVar = ColorRepository.GetColorByIndext("0");
            return View(ColorVar);
        }
        */
        public String Butts()
        {
            string result = "";
            //SQLServerBean quest = new SQLServerBean();
            //result = quest.GetColorByIndext("0");
            result = ColorRepository.GetColorByQuery("0");
            


            return result;
        }

    }
}
