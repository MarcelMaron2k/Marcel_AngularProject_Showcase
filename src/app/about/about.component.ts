import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  panelTheme = 'plight';
  textTheme = 'tlight';
  clicked = false;
  name = "Marcel Maron";
  id = "ID: 322221565";
  picURL = "/assets/person.jpg" 
  darkModeClick(){
    this.clicked = !this.clicked;
    if (this.clicked){
      this.panelTheme = "pdark";
      this.textTheme = "tdark";
      return;
    }
    this.panelTheme = "plight";
    this.textTheme = "tlight";
  }
}
