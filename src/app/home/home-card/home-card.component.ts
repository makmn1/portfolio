import {Component, Input} from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {RouterLink, UrlTree} from "@angular/router";
import {fadeInMoveDownAnimation} from "../../shared/animations/fadeInMoveDown.animation";

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [
    MatAnchor,
    RouterLink
  ],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
  animations: [fadeInMoveDownAnimation]
})
export class HomeCardComponent {

  @Input()
  title: string = "Default title";

  @Input()
  description: string = "";

  @Input()
  link: any[] | string | UrlTree | null | undefined;

  @Input()
  navigateText: string = "Go to";

  animationDone = false;

  onAnimationDone() {
    this.animationDone = true;
  }
}
