import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorComponent } from './contributor/contributor.component';
import { SharedModule } from '@gaxon/modules';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: 'invitation/contributor',
    component: ContributorComponent,
    data: {
      title: "Invitation Contributor",
      breadcrumb: "Invitation Contributor"
    }
  },
  {
    path: 'invitation/user',
    component: UserComponent,
    data: {
      title: "Invitation User",
      breadcrumb: "Invitation User"
    }
  }
];

@NgModule({
  declarations: [ContributorComponent, UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class InvitationModule { }