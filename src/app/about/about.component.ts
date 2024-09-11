import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {fadeInMoveDownAnimation} from "../shared/animations/fadeInMoveDown.animation";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatProgressBar,
    MatProgressSpinner
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeInMoveDownAnimation]
})
export class AboutComponent implements AfterViewInit {

  firstParagraphTextLoading: boolean = true;
  secondParagraphTextLoading: boolean = true;
  profileImageLoading: boolean = true;
  loadingAnimationDone: boolean = false;

  firstParagraphText: string = ""
  secondParagraphText: string = ""
  profileImage: string = ""

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.getBioText();
    this.getBioImage();
  }

  checkIfLoadingIsDone() {
    if (!this.firstParagraphTextLoading && !this.secondParagraphTextLoading && !this.profileImageLoading) {
      setTimeout(() => {
        this.loadingAnimationDone = true;
      }, Math.random() * 1000 + 1000);
    }
  }

  getBioText() {
    const baseUrl = "https://api.github.com/repos/makmn1/portfolio/contents/src/assets/bio"
    const firstParagraphUrl = `${baseUrl}/bio_paragraph_1.txt`;
    const secondParagraphUrl = `${baseUrl}/bio_paragraph_2.txt`;

    const headers = new HttpHeaders({
      "X-GitHub-Api-Version": "2022-11-28"
    });

    this.http.get<any>(firstParagraphUrl, { headers }).subscribe({
      next: response => {
        const base64content = response.content;
        this.firstParagraphText = atob(base64content);
      },
      error: error => {
        console.log("Error fetching first paragraph bio content: ", error);
        this.firstParagraphText = "Could not fetch first paragraph from bio"
      },
      complete: () => {
        this.firstParagraphTextLoading = false;
        this.checkIfLoadingIsDone();
      }
    });

    this.http.get<any>(secondParagraphUrl, { headers }).subscribe({
      next: response => {
        const base64content = response.content;
        this.secondParagraphText = atob(base64content);
      },
      error: error => {
        console.log("Error fetching second paragraph bio content: ", error);
        this.secondParagraphText = "Could not fetch second paragraph from bio"
      },
      complete: () => {
        this.secondParagraphTextLoading = false;
        this.checkIfLoadingIsDone();
      }
    });
  }

  getBioImage() {
    const url = "https://api.github.com/repos/makmn1/portfolio/contents/src/assets/Headshot_2024.jpg"

    const headers = new HttpHeaders({
      "X-GitHub-Api-Version": "2022-11-28"
    });

    this.http.get<any>(url, { headers }).subscribe({
      next: response => {
        const base64content = response.content;
        this.profileImage = `data:image/jpeg;base64,${base64content}`;
      },
      error: error => {
        console.error("Error fetching profile image: ", error);
        this.profileImage = "Could not fetch profile image"
      },
      complete: () => {
        this.profileImageLoading = false;
        this.checkIfLoadingIsDone();
      }
    })
  }

  animationDone = false;

  onAnimationDone() {
    this.animationDone = true;
  }
}
