import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  isConfirmRequestPopupOpened: boolean = false;
  isRequestFormPopupOpened: boolean = false;

  showConfirmRequest() {
    this.isRequestFormPopupOpened = false;
    this.isConfirmRequestPopupOpened = true;
  }

  closeConfirmPopup() {
    this.isConfirmRequestPopupOpened = false;
  }
}
