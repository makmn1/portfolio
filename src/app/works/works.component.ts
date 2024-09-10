import { Component } from '@angular/core';
import {HomeCardComponent} from "../home/home-card/home-card.component";
import {WorkCardComponent} from "./work-card/work-card.component";

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    HomeCardComponent,
    WorkCardComponent
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
