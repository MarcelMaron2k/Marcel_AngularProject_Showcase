import { Component } from '@angular/core';
import { Laptop } from '../../models/laptop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  laptops : Laptop[] | undefined
  constructor(private products:ProductsService){
    this.laptops = products.getPopularLaptops();
  }    
}
