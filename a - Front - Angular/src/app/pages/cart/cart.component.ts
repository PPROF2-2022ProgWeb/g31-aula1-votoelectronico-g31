import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { User } from 'src/app/models/User';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number = 0;
  llave:any;
  user : User=new User();
  cartItems : CartItem[]=[];
  ;


  constructor(private cartService: CartItemsService, private router : Router, 
    private usersService : UsuarioService,
    ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
    }
    this.llave= localStorage.getItem('llave');
 
    this.cartService.getUserCart(this.llave !=null ? this.llave: 0 ).subscribe((cartItems : CartItem[]) => {
      this.cartItems = cartItems;
      console.log(cartItems)
  })

  }

  getItems () {
    this.llave= localStorage.getItem('llave');
    this.cartService.getUserCart(this.llave !=null ? this.llave: 0 ).subscribe((cartItems : CartItem[]) => {
        this.cartItems = cartItems;
    })
}
  
  removeItem(item: any) {
    this.cartService.deleteUserCartItem(this.user.id.toString(), item.product.id.toString()).subscribe(res => {
      console.log(res)
      this.getItems()
  })
  }
 // emptycart() {
   // this.cartService.removeAll();
  //}
}
