import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {fadeInMoveDownAnimation} from "../shared/animations/fadeInMoveDown.animation";
import {ThemeToggleComponent} from "../shared/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatButton,
    NgOptimizedImage,
    RouterLink,
    MatAnchor,
    ThemeToggleComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  animations: [fadeInMoveDownAnimation]
})
export class LandingComponent {
  animationDone = false;  // Track when animation is done

  // Method to handle animation done event
  onAnimationDone() {
    this.animationDone = true;
  }
}
