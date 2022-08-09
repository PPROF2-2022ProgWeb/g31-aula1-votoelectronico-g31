import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show:boolean = false;

  toggleCollapse() {
    this.show = !this.show
  }

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

}
