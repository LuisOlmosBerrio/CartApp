import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Products } from '../services/Interfaces/Products';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  public cart: Products[] = [];

  constructor(
    private readonly cartService: CartService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(product: Products) {
    this.cartService.removeProduct(product);
    this.cart = this.cartService.getCart();
  }

  async checkout() {
    if (this.cart.length > 0) {
      const alert = await this.alertController.create({
        header: 'Payment Successful',
        message: 'Your payment has been processed successfully.',
        buttons: ['OK'],
      });

      await alert.present();

      
      this.cartService.clearCart();
      this.cart = [];
    } else {
      const alert = await this.alertController.create({
        header: 'Empty Cart',
        message: 'There are no products in the cart.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
