import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from '../bussines/contributors/contributors.component';
import { DataComponent } from '../bussines/data/data.component';
import { ItemsComponent } from '../bussines/items/items.component';
import { PaymentSetupComponent } from '../bussines/payment-setup/payment-setup.component';
import { ReportComponent } from '../bussines/report/report.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      title: "Products",
      breadcrumb: "Products"
    }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: {
      title: "Orders",
      breadcrumb: "Orders"
    }
  },
  {
    path: '',
    component: ContributorsComponent,
    data: {
      title: "Contributors",
      breadcrumb: "Contributors"
    }
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
export class SupplierRoutingModule { }
