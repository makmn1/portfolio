import {Component, Input} from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {UrlTree} from "@angular/router";

@Component({
  selector: 'app-work-card',
  standalone: true,
    imports: [
        MatAnchor,
        NgOptimizedImage
    ],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css'
})
export class WorkCardComponent {

  @Input()
  imageUrl: string = "";

  @Input()
  imageAltText: string = "";

  @Input()
  title: string = "Default title";

  @Input()
  subtitle: string = "";

  @Input()
  description: string = "";

  @Input()
  primaryLink: any[] | string | UrlTree | null | undefined;

  @Input()
  secondaryLink: any[] | string | UrlTree | null | undefined;

  @Input()
  primaryActionText: string = "";

  @Input()
  secondaryActionText: string = "";
}
