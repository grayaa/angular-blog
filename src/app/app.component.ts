import { Component } from '@angular/core';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyB18HCU7QvnMPELSoQKdfMy4bWt6NEAM_c',
      authDomain: 'blog-8e5a9.firebaseapp.com',
      databaseURL: 'https://blog-8e5a9.firebaseio.com',
      projectId: 'blog-8e5a9',
      storageBucket: 'blog-8e5a9.appspot.com',
      messagingSenderId: '113583934555'
    };
    firebase.initializeApp(config);
  }






}
