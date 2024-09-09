import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {WorksComponent} from "./works/works.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "works", component: WorksComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent },
];
