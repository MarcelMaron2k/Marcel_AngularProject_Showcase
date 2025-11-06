import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { Laptop } from '../../models/laptop';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-catalog',
  imports: [ProductsComponent,CommonModule, SidenavComponent, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  laptops :Laptop[] | undefined
  manu : string = "";
  
  constructor(private products:ProductsService){
    this.laptops = products.getLaptops();
  }

  receiveManufacturer(manu : string){
    this.manu = manu;
    this.laptops = this.products.getLaptopByManufacturer(this.manu);
  }
}
