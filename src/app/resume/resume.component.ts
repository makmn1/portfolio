import {Component, OnInit} from '@angular/core';
import * as PDFObject from 'pdfobject';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {

  ngOnInit(): void {
    this.loadPdf();
  }

  loadPdf(): void {
    PDFObject.embed(
      "assets/Mohamed_Mohamed_Resume_2024.pdf",
      "#resume-view-container"
    );
  }

  get supportsPdfs(): boolean {
    return PDFObject.supportsPDFs;
  }
}
