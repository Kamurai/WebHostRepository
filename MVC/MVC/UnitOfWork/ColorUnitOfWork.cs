using System;
using MVC.Models;
using MVC.Repositories;
using MVC.Interfaces;

namespace MVC.UnitOfWork
{
    /*
    public class ColorUnitOfWork : IDisposable
    {
        private SQLServerConnectionString context = new SQLServerConnectionString();
        private ColorRepository Color;

        public ColorRepository getColorRepository
        {
            get
            {
                if(this.Color == null)
                {
                    this.Color = new ColorRepository(context);
                }
                return Color;
            }
        }
    




    }*/
}