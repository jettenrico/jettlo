import { Component, OnInit } from '@angular/core';
import { IJettlo, PLAN, TODO } from 'src/app/interfaces/i-jettlo';
import { JettloService } from 'src/app/services/jettlo.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnInit {
  jettlos: IJettlo[] = [];
  statusTodo:string = "Todo";
  statusDone:string = "Done";
  showToast:boolean = false;

  constructor(private jettloService: JettloService, private toaster: ToasterService){}

  ngOnInit(): void {
    this.onAll();
  }
  
  onAll():void{
    this.jettloService.all(PLAN).subscribe(
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
    this.toaster.showToast = true;
    this.toaster.message = "TEST";
  }

  onRemove(id:string){
    this.jettloService.delete(id);
    this.toaster.showToast = true;
    this.toaster.message = "TEST";
  }
}
