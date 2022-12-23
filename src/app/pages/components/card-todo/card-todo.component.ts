import { Component } from '@angular/core';
import { IJettlo, PLAN, TODO } from 'src/app/interfaces/i-jettlo';
import { JettloService } from 'src/app/services/jettlo.service';

@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent {
  jettlos: IJettlo[] = [];
  statusPlan:string = "Plan";
  statusDone:string = "Done";

  constructor(private jettloService: JettloService){}

  ngOnInit(): void {
    this.onAll();
  }
  
  onAll():void{
    this.jettloService.all(TODO).subscribe(
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

  onUpdate(id:string, jettlo: IJettlo){
    this.jettloService.update(id, jettlo);
  }

  onRemove(id:string){
    this.jettloService.delete(id);
  }
}
