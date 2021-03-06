import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment.component';


const routes: Routes = [
  {
    path: '',
    component: AssignmentComponent,
    data: {
      title: "Assignment",
      breadcrumb: "Assignment"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
