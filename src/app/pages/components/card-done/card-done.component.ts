import { Component } from '@angular/core';
import { DONE, IJettlo } from 'src/app/interfaces/i-jettlo';
import { JettloService } from 'src/app/services/jettlo.service';

@Component({
  selector: 'app-card-done',
  templateUrl: './card-done.component.html',
  styleUrls: ['./card-done.component.css']
})
export class CardDoneComponent {
  jettlos: IJettlo[] = [];
  constructor(private jettloService: JettloService){}

  ngOnInit(): void {
    this.onAll();
  }
  
  onAll():void{
    this.jettloService.all(DONE).subscribe(
      (data:any) => {
        this.jettlos = data.map((e:any) =>{
          return{
            id: e.payload.doc.id,
            title: e.payload.doc.data()['title'],
            description: e.payload.doc.data()['description'],
            status: e.payload.doc.data()['status']
          } as IJettlo
        })
      }
    )
  }
}
