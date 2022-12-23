import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageJettloComponent } from './pages/page-jettlo/page-jettlo.component';

const routes: Routes = [
  {
    path: '',
    component: PageJettloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
