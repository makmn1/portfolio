import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../navigation/nav-rail/navigation.component";
import {FooterComponent} from "../footer/footer.component";
import {NavBarComponent} from "../navigation/nav-bar/nav-bar.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    NavBarComponent,
    ThemeToggleComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  isSmallScreen: boolean = false;
  hideThemeToggle: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });

    this.router.events.subscribe(() => {
      this.hideThemeToggle = this.router.url === '/app/resume'
    })
  }
}
