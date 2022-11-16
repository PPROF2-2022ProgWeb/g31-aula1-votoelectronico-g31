import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-section-comercial',
  templateUrl: './section-comercial.component.html',
  styleUrls: ['./section-comercial.component.css'],
})
export class SectionComercialComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  imagen:any;


  constructor(private api: ProductsService, private cartService: CartService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;

      for (let product of this.productList) {
        product.imageUrl = product.image ? 'data:image/jpeg;base64,' + product.image :
        "../../../../assets/images/product-placeholder.png";
        
    }

      this.productList.forEach((a: any) => {
       // if (a.category === 'jewelery') {
         // a.category = 'gratis';
        //}
        let objectURL = 'data:image/png;base64,' + a.image;
        this.imagen = this.sanitizer.bypassSecurityTrustUrl(objectURL);
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
