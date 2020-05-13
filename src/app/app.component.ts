import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBWBVpRzVGgY8sRN9zKg1R3sngyJueOwA8",
      authDomain: "mysecretlibrary-93bf3.firebaseapp.com",
      databaseURL: "https://mysecretlibrary-93bf3.firebaseio.com",
      projectId: "mysecretlibrary-93bf3",
      storageBucket: "mysecretlibrary-93bf3.appspot.com",
      messagingSenderId: "1090829092829",
      appId: "1:1090829092829:web:46ef3fb5c941af8b2a5834",
      measurementId: "G-V1ZVVNH5T0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
