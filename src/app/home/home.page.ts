import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment';
import { Products , Category } from '../services/Interfaces/Products';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public product: Products[] = [];
  public Categories!: Category;
  url = environment.URL_BASE + 'Products';

  constructor(
    private readonly httpSrv: HttpService,
    private readonly CTR: NavController
  ) {}

  async ngOnInit() {
    this.product = await this.httpSrv.get<Products[]>(this.url);
    this.Categories = await this.httpSrv.get<Category>(
      this.url + '/Categories'
    );
  }

  async OptionSelected(event: any) {
    if (event.detail.value != 'all') {
      this.product = await this.httpSrv.get<Products[]>(
        this.url + '/category/' + event.detail.value
      );
    } else {
      this.ngOnInit();
    }
  }

  public Navegate(id: number) {
    this.CTR.navigateForward('details/' + id);
  }
}
