import { Injectable } from '@angular/core';
import { Laptop } from '../../models/laptop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  laptops: Laptop[] = []
  url : string = "http://localhost:3000/laptops"
  headers = {"content-type" : "application/json"}

  constructor(private http:HttpClient) {
    this.refresh()
  }
  select() : Observable<any>{
    return this.http.get(this.url);
  }

  refresh(){
    this.select().subscribe(
      (data)=>this.laptops=data
    )
  }
  insert(laptop : Laptop) : Observable<any> {
    let body = JSON.stringify(laptop)
    return this.http.post(this.url,body,{headers:this.headers})
  }
  update(laptop : Laptop) : Observable<any> {
    let body = JSON.stringify(laptop)
    return this.http.put(this.url+"/"+laptop.id,body,{headers:this.headers})
  }

  getLaptops(){
    return this.laptops
  }

  getPopularLaptops(){
    let popular:Laptop[];
    let laptops = this.getLaptops();
    popular = laptops.sort((a,b)=>(b.pop - a.pop)).slice(0,5);
    return popular;
  }

  getLaptopById(id:number){
    return this.laptops.find((a)=>{return a.id==id})
  }

  getLaptopByManufacturer(manufacturer : String):Laptop[]{ // Category search
    let laptops = this.getLaptops();
    let newLaptops:Laptop[] = [];
    if (manufacturer == "All"){
      return laptops;
    }
    for(let item of laptops){
      if (item.manufacturer == manufacturer){
        newLaptops.push(item);
      }
    }    
    return newLaptops;
  }
}
