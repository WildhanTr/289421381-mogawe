import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { QuestionnaireComponent } from './questionnaire.component';


const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent,
    data: {
      title: "Form",
      breadcrumb: "Form"
    }
  },
  {
    path: 'form/:id',
    component: FormComponent,
    data: {
      title: "Form",
      breadcrumb: "Form"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
