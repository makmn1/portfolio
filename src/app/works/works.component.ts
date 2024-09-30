import { Component } from '@angular/core';
import {HomeCardComponent} from "../home/home-card/home-card.component";
import {WorkCardComponent} from "./work-card/work-card.component";
import {fadeInMoveDownAnimation} from "../shared/animations/fadeInMoveDown.animation";
import {ThemeService} from "../../services/theme.service";

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
