import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-eng',
  templateUrl: './header-eng.component.html',
  styleUrls: ['./header-eng.component.css']
})
export class HeaderEngComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
