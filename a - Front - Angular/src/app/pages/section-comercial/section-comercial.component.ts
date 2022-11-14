import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-section-comercial',
  templateUrl: './section-comercial.component.html',
  styleUrls: ['./section-comercial.component.css'],
})
export class SectionComercialComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';

  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a: any) => {
        if (a.category === 'jewelery') {
          a.category = 'gratis';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtoCart(item: any) {
    this.cartService.addtoCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
