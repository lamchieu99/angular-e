import { Component, Input } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent {
  @Input('product') products: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-carts') shoppingCart: ShoppingCart;

  categories$;
  product = {};
  id;

  constructor(
    private cartService: ShoppingCartService,
     private router: Router,
     private route: ActivatedRoute,
     private categoryService: CategoryService,
     private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }
  addToCart() {
    this.cartService.addToCart(this.products);
  }


}
