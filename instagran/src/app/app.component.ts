import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagran';

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyCT3K2iNcpIzaW_VIMq1L4kUirwHGQ1cBg",
      authDomain: "jta-instagran-clone-947e1.firebaseapp.com",
      databaseURL: "https://jta-instagran-clone-947e1.firebaseio.com",
      projectId: "jta-instagran-clone-947e1",
      storageBucket: "jta-instagran-clone-947e1.appspot.com",
      messagingSenderId: "1058314493874",
      appId: "1:1058314493874:web:a3423fbf72777627304eab",
      measurementId: "G-NZLST363PF"
    };
    firebase.initializeApp(firebaseConfig);
  }


}


