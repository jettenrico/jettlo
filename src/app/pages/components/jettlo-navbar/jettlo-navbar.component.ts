import { Component } from '@angular/core';
import { JettloService } from 'src/app/services/jettlo.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-jettlo-navbar',
  templateUrl: './jettlo-navbar.component.html',
  styleUrls: ['./jettlo-navbar.component.css']
})
export class JettloNavbarComponent {

  constructor(public jettloService: JettloService, private toasterService:ToasterService){}

  onInit():void{
    this.jettloService.init();
    this.toasterService.showToast = true;
    this.toasterService.message = "Data Dummy Berhasil Ditambahkan!"
  }
}
