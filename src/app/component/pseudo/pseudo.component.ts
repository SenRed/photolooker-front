import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pseudo',
  templateUrl: './pseudo.component.html',
  styleUrls: ['./pseudo.component.css']
})
export class PseudoComponent {
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.uploadForm = this.formBuilder.group({
      pseudo: ['']
    });
  }
}
