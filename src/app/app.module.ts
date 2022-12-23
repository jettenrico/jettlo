import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PageStudentListComponent } from './pages/page-student-list/page-student-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageStudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyA2YI5a0l_btUpfiQpynijzIXkQ_KuJ5M4",
        authDomain: "test-api-451e5.firebaseapp.com",
        databaseURL: "https://test-api-451e5-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "test-api-451e5",
        storageBucket: "test-api-451e5.appspot.com",
        messagingSenderId: "615135976216",
        appId: "1:615135976216:web:fdb0826d00721f5b64dc6d",
        measurementId: "G-7HW6PT41CL"
      }
    ),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
