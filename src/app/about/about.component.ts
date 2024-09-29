import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {fadeInMoveDownAnimation} from "../shared/animations/fadeInMoveDown.animation";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatProgressBar,
    MatProgressSpinner
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeInMoveDownAnimation]
})
export class AboutComponent {

  animationDone = false;

  onAnimationDone() {
    this.animationDone = true;
  }
}
