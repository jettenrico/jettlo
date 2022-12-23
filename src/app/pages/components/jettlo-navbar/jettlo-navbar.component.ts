import { Component } from '@angular/core';
import { JettloService } from 'src/app/services/jettlo.service';

@Component({
  selector: 'app-jettlo-navbar',
  templateUrl: './jettlo-navbar.component.html',
  styleUrls: ['./jettlo-navbar.component.css']
})
export class JettloNavbarComponent {

  constructor(public jettloService: JettloService){}

  onInit():void{
    this.jettloService.init();
  }
}
