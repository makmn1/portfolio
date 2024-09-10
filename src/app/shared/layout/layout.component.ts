import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../navigation/navigation.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
