import {Component, OnInit} from '@angular/core';
import * as PDFObject from 'pdfobject';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {

  ngOnInit(): void {
    this.loadPdf();
  }

  loadPdf(): void {
    PDFObject.embed(
      "assets/1705339770_FastTrack%20Blank%20Blankski%20Sept%202023%20-%20Mohamed%20Mohamed.pdf",
      "#resume-view-container"
    );
  }
}
