import { Component } from '@angular/core';
import {HomeCardComponent} from "../home/home-card/home-card.component";
import {WorkCardComponent} from "./work-card/work-card.component";
import {fadeInMoveDownAnimation} from "../shared/animations/fadeInMoveDown.animation";

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    HomeCardComponent,
    WorkCardComponent
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
  animations: [fadeInMoveDownAnimation]
})
export class WorksComponent {
  animationDone = false;

  onAnimationDone() {
    this.animationDone = true;
  }
}
