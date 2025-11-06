import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
    user?:User;
    constructor(service:UsersService){
        if((typeof sessionStorage == 'undefined')){return;} // because SSR is on, on the server-side sessionStorage isn't defined.
        let userEmail = sessionStorage.getItem("user");
        if (userEmail == null){return;}

        this.user = service.getUser(userEmail);
        if(this.user == null){return;}

    }
}
