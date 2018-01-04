import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-theme',
  templateUrl: './bbv2-theme.component.html',
  styleUrls: ['./bbv2-theme.component.css']
})
export class Bbv2ThemeComponent implements OnInit {

  constructor(private router:Router) { }
  logout(){
     console.log("Logout function called");
     sessionStorage.clear();
     //sessionStorage.removeItem('password');
      this.router.navigate(['/login']);
      console.log("passwrod in session after removing  "+sessionStorage.getItem('password'));
  }

  ngOnInit() {
  }

}
