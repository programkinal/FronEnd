import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean = false
  constructor(private router: Router) { }

  ngOnInit() {
    this.getAuth();
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
    localStorage.setItem('auth', 'false');
    this.router.navigateByUrl('/Login');
    this.getAuth();
  }

}
