import { Component } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-toasters',
  templateUrl: './toasters.component.html',
  styleUrls: ['./toasters.component.css']
})
export class ToastersComponent {
  constructor(public toast: ToasterService){};
}
