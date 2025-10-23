import { Component } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visaapplication',
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, RouterModule],
  templateUrl: './visaapplication.html',
  styleUrl: './visaapplication.css'
})
export class Visaapplication {

}
