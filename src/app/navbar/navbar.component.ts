import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
    logged:boolean = false;
    isAdmin:boolean = false;
    logo:string = "";
    constructor(private router:Router){
        if ((typeof sessionStorage == 'undefined')) {
            return;
        }
        this.router.events.subscribe((val:any)=>{
            if(val.url){
                if(sessionStorage.getItem('user')){
                    this.logged = true
                }
                if(sessionStorage.getItem('isAdmin')){
                    this.isAdmin = true
                }

                this.logo = sessionStorage.getItem('image') || "assets/male.png";
            }
        })
    }

    logout() {
        this.logged = false;
        if ((typeof sessionStorage == 'undefined')){return;}
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('isAdmin')
        sessionStorage.removeItem('image')

    }
}
