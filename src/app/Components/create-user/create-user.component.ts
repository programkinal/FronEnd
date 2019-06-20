import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User;
  
  form = new FormGroup({
    nameUser: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
  });
  constructor(public rest: UserService, private totsr: ToastrService, private router: Router) {
    this.rest.Register(this.user);
    this.user = new User('','','');
   }

  ngOnInit() {
  }

  onSubmit(){
    this.rest.Register(this.user).subscribe(res =>{
      if(res.message == 'Ya esta registrado el usuario'){
        this.totsr.error('Ya esta registrado el usuario','Error');
      }else{
        if(res.user && res.user._id){
          this.totsr.success('Se ha guardado correctamente','Guardado');
          this.router.navigateByUrl('Login')
        }else if(res.message == 'Debes de agregar todos los campos'){
          this.totsr.error('Debes de agregar todos los campos')
        }
      }
    })
    console.log('Hola')
  }

}
