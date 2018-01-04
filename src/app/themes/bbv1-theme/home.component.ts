import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-theme',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  logout(){
     sessionStorage.removeItem('password');
      this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
