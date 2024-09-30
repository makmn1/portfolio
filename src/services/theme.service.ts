import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeKey = 'preferred-theme';

  readonly lightThemeClass = 'light-theme';
  readonly darkThemeClass = 'dark-theme';

  constructor() {
    const preferredTheme = localStorage.getItem(this.themeKey);

    if (preferredTheme) {
      this.enableTheme(preferredTheme);
    } else {
      const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.enableTheme(prefersDarkTheme ? 'dark-theme' : 'light-theme');
    }
  }

  private enableTheme(themeClass: string) {
    document.body.classList.add(themeClass);
  }

  private disableTheme(themeClass: string) {
    document.body.classList.remove(themeClass);
  }

  private replaceTheme(themeToReplace: string, newTheme: string) {
    this.disableTheme(themeToReplace);
    this.enableTheme(newTheme);
  }

  private isThemeActive(themeClass: string): boolean {
    return document.body.classList.contains(themeClass);
  }

  toggleTheme() {
    if (this.isThemeActive(this.lightThemeClass)) {
      this.replaceTheme(this.lightThemeClass, this.darkThemeClass);
      localStorage.setItem(this.themeKey, this.darkThemeClass);
    } else if (this.isThemeActive(this.darkThemeClass)) {
      this.replaceTheme(this.darkThemeClass, this.lightThemeClass);
      localStorage.setItem(this.themeKey, this.lightThemeClass);
    } else {
      throw new Error("Cannot toggle theme. No known themes currently active.")
    }
  }

  get currentTheme() {
    if (this.isThemeActive(this.lightThemeClass)) {
      return this.lightThemeClass;
    } else if (this.isThemeActive(this.darkThemeClass)) {
      return this.darkThemeClass;
    } else {
      throw new Error("No known themes currently active.")
    }
  }
}
