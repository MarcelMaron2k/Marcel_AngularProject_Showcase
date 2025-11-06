import { Component } from '@angular/core';
import { Laptop } from '../../models/laptop';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  laptop : Laptop | undefined
  constructor(private location: Location, private actRoute:ActivatedRoute,private router:Router, private products:ProductsService){
    let id=actRoute.snapshot.params["id"]
    let res = this.products.getLaptopById(id)
    if(res!=null){
      this.laptop = res
    }
  }
  Back(): void {
    this.location.back();
  }
}
