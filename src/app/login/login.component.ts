import { Component, OnInit } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router'
var colordef = sessionStorage.getItem('username') ? 'red' : 'green';
sessionStorage.getItem('username');
//import {} from ''
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
styles:[`.intro { 
  background-color: ${colordef};
}`],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  constructor(private router: Router) { }
  username :string = null;
  password:string = null;
  colordef:any;
  userlogin(){

    console.log(`user logged in with username :${this.username} and password :${this.password}`);
    sessionStorage.setItem('username',this.username);
    sessionStorage.setItem('password',this.password);
    if((sessionStorage.getItem('username')==null) || (sessionStorage.getItem('password')==null)){
      this.router.navigate(['/login']); 
    }
    else{
      this.router.navigate(['/welcome']); 
    }
   
  }
  logout(){
    sessionStorage.removeItem('password');
  }
  ngOnInit() {
    console.log("login init called");
    console.log("session Item is "+ sessionStorage.getItem('username'));
    if(sessionStorage.getItem('username')==null|| sessionStorage.getItem('password')==null){
      this.router.navigate(['/login']); 
    }
    else{
      this.router.navigate(['/welcome']); 
    }
  }

}
