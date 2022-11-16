import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/User';
import { Product } from 'src/app/models/Product';


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
  llave:any;
  public user : User=new User();
  public product : Product=new Product();

  constructor(private api: ProductsService, private cartService: CartService, private sanitizer: DomSanitizer, private cartItemsService : CartItemsService, private usersService : UsuarioService,) {}

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

  addToCart (id: Number) {
    this.llave= localStorage.getItem('llave');
    this.cartItemsService.addToUserCart(this.llave !=null ? this.llave: 0 , id.toString()).subscribe(res => {
        
    })
}
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
