import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage,
    RouterLink,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private themeService: ThemeService) {}

  get currentTheme(): 'light' | 'dark' {
    if (this.themeService.currentTheme === this.themeService.darkThemeClass) {
      return 'dark';
    } else {
      return 'light';
    }
  }
}
