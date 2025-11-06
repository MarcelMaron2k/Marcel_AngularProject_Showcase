import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm !: FormGroup;
    constructor(private formBuilder:FormBuilder, private service:UsersService, private router:Router){
        this.registerForm = this.formBuilder.group(
            {
                name: ['', Validators.required],
                mail : ['', Validators.compose([Validators.required, Validators.email])],
                password: ['',Validators.required], 
                passwordRepeat: ['', Validators.required],
                terms : ['',Validators.required],
                gender: ['', Validators.required],
                date: ['', Validators.required],
            },
            { validators: this.confirmPasswordValidator }
        )
    }
    
    
    // custom validator, to check if the passwords match
    confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        if (control.value.password === control.value.passwordRepeat){
            return null
        }
        
        return { PasswordNoMatch: true };
    };    

    register(){
        let mail = this.registerForm.value.mail
        let pass = this.registerForm.value.password
        let name = this.registerForm.value.name;
        let date = this.registerForm.value.date; 
        let gender = this.registerForm.value.gender;

        let result = this.service.registerUser(mail,pass, name, date, gender);
        console.log(result)
        if(result == false){
            alert("Email already registered!");
        }else{
            this.router.navigateByUrl('profile/login')
        }
    }
}
