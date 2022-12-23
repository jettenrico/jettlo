import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IJettlo, PLAN } from '../interfaces/i-jettlo';

@Injectable({
  providedIn: 'root'
})
export class JettloService {
  collection:string = "Tasks";


  constructor(private firestore: AngularFirestore) { }

  init(){
    let payload = {
      title: "Your Title",
      description: "Your Description",
      status: PLAN
    } as IJettlo;
    this.firestore.collection(this.collection).add(payload);
  }

  // create(ijettlo: IJettlo){
  //   return this.firestore.collection(this.collection)
  //     .add(ijettlo);
  // }

  all(status:string) {
    return this.firestore.collection(this.collection, ref => ref.where('status', '==', status))
      .snapshotChanges();
  }

  update(id:string, ijettlo: IJettlo){
    return this.firestore.doc(`${this.collection}/` + id)
      .update(ijettlo);
  }

  delete(id:string){
    return this.firestore.doc(`${this.collection}/` + id)
    .delete();
  }
}
