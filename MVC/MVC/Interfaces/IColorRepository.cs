using System;
using System.Collections.Generic;
using MVC.Models;

namespace MVC.Interfaces
{
    public interface IColorRepository
    {
        IEnumerable<Test> GetColors();
        String GetColorByIndext(String Indext);
        String GetColorByQuery(String Indext);
    }
}
