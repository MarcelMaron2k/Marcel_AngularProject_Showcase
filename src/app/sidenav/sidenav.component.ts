import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidenav',
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Output() manufacturerEvent = new EventEmitter<string>();
  manus = ["All","Dell", "ASUS", "Apple", "HP", "Lenovo"];

  buttonClicked(manu : string){
    this.manufacturerEvent.emit(manu);
  }
}
