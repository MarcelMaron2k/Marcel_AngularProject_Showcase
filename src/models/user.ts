import { spec } from "node:test/reporters";

export class User{
    email:string;
    password:string;
    name:string;
    birthdate:string;
    gender:string;
    logo:string;
    isAdmin:boolean;
    constructor(email:string, password:string, name:string, birthdate:string, gender:string, isAdmin:boolean){
        this.email = email;
        this.password = password;
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
        this.isAdmin = isAdmin; 
        
        if (gender == "male"){
            this.logo = "assets/male.png";
        }else{
            this.logo = "assets/female.png";
        }
    }
}