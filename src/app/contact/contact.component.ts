import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatButton, MatFormField, MatInput, MatLabel, MatError],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private http: HttpClient) {}

  formSubmissionSuccessful: boolean = false;
  formSubmissionFailed: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formSubmissionUrl = "https://formspree.io/f/xovazqab"
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      const formData = this.contactForm.value;

      const body = new URLSearchParams();
      body.set('name', formData.name!);
      body.set('email', formData.email!);
      body.set('subject', formData.subject!);
      body.set('message', formData.message!);

      this.http.post(formSubmissionUrl, body.toString(), {
        headers,
        responseType: "text"
      }).subscribe({
        next: res => {
          console.log(`Submit successful: ${res}`)
          this.formSubmissionSuccessful = true;
          this.formSubmissionFailed = false;
        },
        error: err => {
          console.log(`Submit unsuccessful: ${err}`)
          this.formSubmissionSuccessful = false;
          this.formSubmissionFailed = true;
        }
      })
    }
  }
}
