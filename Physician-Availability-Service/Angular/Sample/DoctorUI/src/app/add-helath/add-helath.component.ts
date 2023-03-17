import { Component } from '@angular/core';

@Component({
  selector: 'app-add-helath',
  templateUrl: './add-helath.component.html',
  styleUrls: ['./add-helath.component.css']
})
export class AddHelathComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
