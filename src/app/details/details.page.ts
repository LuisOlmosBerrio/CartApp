import { Component, OnInit } from '@angular/core';
import { Products } from '../services/Interfaces/Products';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public product!: Products;
  fire: number = 1;

  constructor(
    private readonly httpSrv: HttpService,
    private readonly Routd: ActivatedRoute,
    private readonly cartService: CartService
  ) {}

  async ngOnInit() {
    this.Routd.params.subscribe(async (Routd) => {
      const url = environment.URL_BASE + 'Products/' + Routd['id'];
      this.product = await this.httpSrv.get<Products>(url);
      console.log(this.product);

      this.fire = Math.floor(this.product.rating.rate);
    });
  }
  addToCart() {
    this.cartService.addToCart(this.product);
    alert('Product added to cart');
  }
}
