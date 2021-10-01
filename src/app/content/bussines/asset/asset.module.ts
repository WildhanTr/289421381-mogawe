import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset.component';
import { SharedModule } from '@gaxon/modules';
import { CKEditorModule } from 'ngx-ckeditor';

const routes: Routes = [
  {
    path: '',
    component: AssetComponent,
    data: {
      title: "Power Up",
      breadcrumb: "Power Up"
    },
  }
];

@NgModule({
  declarations: [AssetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CKEditorModule
  ]
})
export class AssetModule { }
