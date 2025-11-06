import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm : FormGroup
    constructor(private formBuilder:FormBuilder, private service:UsersService, private router:Router){
        this.loginForm = this.formBuilder.group(
          {
            mail : ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required],
            robot : ['',Validators.required]
          }
        )
      }
      
    login(){
        let mail = this.loginForm.value.mail
        let pass = this.loginForm.value.password
        let result = this.service.loginUser(mail,pass)
        if (typeof sessionStorage == "undefined"){return;}
        if(result==null)
            alert("wrong user mail or password")
        else{
            sessionStorage.setItem('user', mail)
            sessionStorage.setItem('isAdmin', (String)(result.isAdmin))
            sessionStorage.setItem('image', result.logo)
            this.router.navigateByUrl('profile/user')
        }
    }
}
