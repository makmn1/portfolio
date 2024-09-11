import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {HomeCardComponent} from "./home-card/home-card.component";
import {fadeInMoveDownAnimation} from "../shared/animations/fadeInMoveDown.animation";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    RouterLink,
    HomeCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeInMoveDownAnimation]
})
export class HomeComponent {
  animationDone = false;

  onAnimationDone() {
    this.animationDone = true;
  }
}
