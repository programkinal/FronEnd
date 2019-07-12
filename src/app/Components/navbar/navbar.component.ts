import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean = false
  @ViewChild('refresh') refresh:ElementRef;

  constructor(private router: Router) { }
  public rol = localStorage.getItem('decode');

  ngOnInit() {
    this.getAuth();
    console.log(this.rol)
  }
  getAuth(){
    // this.getAuth();
    if(localStorage.getItem('auth') == 'true'){
      this.isLogged = true
      // this.getAuth();
    
    }else{
      this.isLogged = false
    }
  }

  onLogout(){
    this.rol = ''
    localStorage.setItem('auth', 'false');
    this.router.navigateByUrl('/Login');
    this.getAuth();
    
  }
  login(){
    var login = localStorage.getItem('login');
    if(login == 'true'){
      this.getAuth();
    }
    
  }
}
