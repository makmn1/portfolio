import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatButton,
    NgOptimizedImage,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
