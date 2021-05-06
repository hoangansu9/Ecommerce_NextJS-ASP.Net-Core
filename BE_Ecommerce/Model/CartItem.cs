using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BE_Ecommerce.Models
{
    public class CartItem
    {
        public Book _shopping_product { get; set; }
        public int _shopping_quantity { get; set; }

    }
}