import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    users : User[] = [];

    url : string = "http://localhost:3000/users"
    headers = {"content-type" : "application/json"}
  
    constructor(private http:HttpClient) {
        this.refresh()
    }
    select() : Observable<any>{
        return this.http.get(this.url);
    }

  refresh(){
    this.select().subscribe(
      (data)=>this.users=data
    )
  }
    registerUser(email:string, password:string, name:string, date:string, gender:string){
        if (this.getUser(email) instanceof User){
            return false;
        }
        let user = new User(email, password, name, date, gender, false)
        let body = JSON.stringify(user)
        return this.http.post(this.url,body,{headers:this.headers})
    }

    loginUser(email:string, password:string){
        let user = this.getUser(email);
        console.log(user)
        if (!(user == null)){
            if (user.password === password){
                return user
            }
        }

        return null;
    }

    getUser(email:string){
        let obj = this.users.find(user => user.email === email)
        if (obj == null){return undefined}
        
        let user = new User(obj.email, obj.password, obj.name,obj.birthdate, obj.gender, obj.isAdmin)
        
        return user;
    }
}
