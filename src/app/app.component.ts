import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAXsnAOD7EjZMj0aaigIE7f82XfEAzIGmk",
      authDomain: "ecommerce-f3a19.firebaseapp.com",
      projectId: "ecommerce-f3a19",
      storageBucket: "ecommerce-f3a19.appspot.com",
      messagingSenderId: "248116377058",
      appId: "1:248116377058:web:0bb8488c609183473f35bb",
      measurementId: "G-BWSZ63W8S7"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
