import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Style';
  panelOpenState = false;
  constructor(private _bottomSheet: MatBottomSheet) {}

hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
}
