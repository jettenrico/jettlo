import { Component } from '@angular/core';
import { IJettlo, PLAN, TODO } from 'src/app/interfaces/i-jettlo';
import { JettloService } from 'src/app/services/jettlo.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent {
  jettlos: IJettlo[] = [];
  statusPlan:string = "Plan";
  statusDone:string = "Done";
  showToast:boolean = false;

  constructor(private jettloService: JettloService, private toasterService: ToasterService){}

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
    this.toasterService.showToast = true;
    this.toasterService.message = "Data Berhasil Diubah!";
  }

  onRemove(id:string){
    this.jettloService.delete(id);
    this.toasterService.showToast = true;
    this.toasterService.message = `Task Berhasil Dihapus!`;
  }
}
