import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
 

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title: "Bussines - Create",
      breadcrumb: "Create"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinesRoutingModule { }
