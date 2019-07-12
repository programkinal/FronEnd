import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  public isLogged: boolean = false
  constructor(private router: Router) { }

  // getAuth(l){
  //   // this.getAuth();
  //   if(localStorage.getItem('auth') == 'true'){
  //     this.isLogged = true
  //     l = this.isLogged;
  //     // this.getAuth();
  //   }else{
  //     this.isLogged = false
  //     // l = this.isLogged;
  //   }
  // }

  // onLogout(){
  //   localStorage.setItem('auth', 'false');
  //   this.router.navigateByUrl('/Login');
  //   this.getAuth();
  // }
  // login(){
    
  //     this.getAuth();
  //     // console.log('Holalalaa')
    
  // }
}
