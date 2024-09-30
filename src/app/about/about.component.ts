import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {fadeInMoveDownAnimation} from "../shared/animations/fadeInMoveDown.animation";
import {ThemeService} from "../../services/theme.service";

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

  constructor(private themeService: ThemeService) {}

  animationDone = false;

  onAnimationDone() {
    this.animationDone = true;
  }

  get currentTheme(): 'light' | 'dark' {
    if (this.themeService.currentTheme === this.themeService.darkThemeClass) {
      return 'dark';
    } else {
      return 'light';
    }
  }
}
