import { Component } from '@angular/core';
import {ThemeService} from "../../../services/theme.service";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
    MatIcon,
    MatTooltip
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {

  constructor(private themeService: ThemeService) {}

  get currentThemeIconName() {
    if (this.themeService.currentTheme === this.themeService.lightThemeClass) {
      return 'light_mode';
    } else if (this.themeService.currentTheme === this.themeService.darkThemeClass) {
      return 'dark_mode';
    } else {
      console.error("Unrecognized theme from Theme Service found");
      return '';
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get toolTipText() {
    let themeToSwitchTo;
    if (this.themeService.currentTheme === this.themeService.lightThemeClass) {
      themeToSwitchTo = 'dark theme';
    } else if (this.themeService.currentTheme === this.themeService.darkThemeClass) {
      themeToSwitchTo = 'light theme';
    } else {
      console.error("Unrecognized theme from Theme Service found");
      return '';
    }

    return `Click to switch to ${themeToSwitchTo}`
  }
}
