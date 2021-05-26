﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using DatingAppShilpaGaur.Entities;

namespace DatingAppShilpaGaur.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options)
             : base(options)
        {
        }
        public DbSet<AppUser> Users { get; set; }
    }
}
