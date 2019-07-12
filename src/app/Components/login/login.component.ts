import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from 'src/app/services/navbar.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User
  nameUser = ''
  password = ''
  form = new FormGroup({
    nameUser: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
  });
  @ViewChild('refresh') refresh:ElementRef;

  constructor(public rest: UserService, private tost: ToastrService,private router: Router, private navbarServices: NavbarService) { 
    this.rest.login(this.user)
    this.user = new User('','','');
  }

  ngOnInit() {
    
  }

  onSubmit(){
    // console.log(this.nameUser + ' ' + this.password)
    this.rest.login(this.user).subscribe(res =>{
      if(res.message == 'Error'){
        this.tost.error('Error al inciar seccion', 'Error');
      }else{
        if(res.toke){
          this.refresh.nativeElement.click();
          // console.log(res.toke);
          localStorage.setItem('token',res.toke);
          // this.router.navigateByUrl('/')
          let toke = localStorage.getItem('token');
          localStorage.setItem('auth','true');
          let auth = localStorage.getItem('auth');
          console.log(toke)
          console.log(auth)
          // this.component.getAuth();
          this.router.navigateByUrl('/')
          // localStorage.setItem('login','true');
          var token1 = localStorage.getItem('token');
          var token = jwt_decode(token1);
          localStorage.setItem('decode',token.rol);
          console.log(token)
          
        }else if(res.message == 'Error en tu contrasena'){
          this.tost.error("Error en tu contraseña", "Error")
        }
      }
    })
  }

}
