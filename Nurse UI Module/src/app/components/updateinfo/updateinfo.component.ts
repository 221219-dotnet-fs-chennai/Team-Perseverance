import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  updateform = new FormGroup({
    bp: new FormControl('', [Validators.required,Validators.pattern('^[1-9][0-9]{1,2}\\/[1-9][0-9]{1,2}$')]),
    rate: new FormControl('', [Validators.required,Validators.pattern('^(6[0-9]|[7-9][0-9]|1[01][0-9]|120)$')]),
    spo2: new FormControl('', [Validators.required,Validators.pattern('^(9[0-9]|100)%$')])
  });

  update() {
    if (this.updateform.valid) {
      console.warn(this.updateform.value);
    } else {
      // show error message
      console.log('Invalid form');
    }
  }

  get bp() {
    return this.updateform.get('bp');
  }

  get rate() {
    return this.updateform.get('rate');
  }

  get spo2() {
    return this.updateform.get('spo2');
  }

  getErrorMessage(formControlName: string) {
    if (this.updateform.get(formControlName)?.hasError('required')) {
      return 'This field is required';
    } else if (this.updateform.get(formControlName)?.hasError('pattern')) {
      if (formControlName === 'bp') {
        return 'Please enter a valid blood pressure reading in the format of systolic/diastolic (e.g. 120/80)';
      } else if (formControlName === 'rate') {
        return 'Please enter a valid heart rate reading between 60 and 120 bpm';
      } else if (formControlName === 'spo2') {
        return 'Please enter a valid SpO2 reading between 90% and 100%';
      } else {
        return 'Invalid input';
      }
    }
    return '';
  }
}
