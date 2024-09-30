import {booleanAttribute, Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navigation-item',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.css'
})
export class NavigationItemComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() link!: string;
  @Input({transform: booleanAttribute}) isNavBarItem: boolean = false;
}
