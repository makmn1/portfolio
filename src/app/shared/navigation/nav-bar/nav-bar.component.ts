import { Component } from '@angular/core';
import {NavigationItemComponent} from "../navigation-item/navigation-item.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NavigationItemComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
