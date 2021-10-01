import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from './contributors/contributors.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { DataComponent } from './data/data.component';
import { ReportComponent } from './report/report.component';
import { ItemsComponent } from './items/items.component';
import { PaymentSetupComponent } from './payment-setup/payment-setup.component';


const routes: Routes = [
  {
    path: '',
    component: ContributorsComponent,
    data: {
      title: "Contributors",
      breadcrumb: "Contributors"
    }
  },
  {
    path: 'assets',
    loadChildren: () => import('@app/content/bussines/asset/asset.module').then(m => m.AssetModule)
  },
  {
    path: 'contributors',
    component: ContributorsComponent,
    data: {
      title: "Contributors",
      breadcrumb: "Contributors"
    }
  },
  {
    path: 'workplace',
    component: WorkplaceComponent,
    data: {
      title: "Workplace",
      breadcrumb: "Workplace"
    }
  },
  {
    path: 'items',
    component: ItemsComponent,
    data: {
      title: "Items",
      breadcrumb: "Items"
    }
  },
  {
    path: 'job',
    loadChildren: () => import('@app/content/bussines/job/job.module').then(m => m.JobModule)
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('@app/content/questionnaire/questionnaire-routing.module').then(m => m.QuestionnaireRoutingModule)
  },
  {
    path: 'data',
    component: DataComponent,
    data: {
      title: "Data",
      breadcrumb: "Data"
    }
  },
  {
    path: 'report',
    component: ReportComponent,
    data: {
      title: "Report",
      breadcrumb: "Report"
    }
  },
  {
    path: 'payment',
    component: PaymentSetupComponent,
    data: {
      title: "Payment Setup",
      breadcrumb: "Payment Setup"
    }
  },
  {
    path: 'form',
    loadChildren: () => import('@app/content/form/bussines/bussines.module').then(m => m.BussinesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinesRoutingModule { }
