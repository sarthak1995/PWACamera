import { ETasksComponent } from './../../components/e-tasks/e-tasks.component';
import { HangerComponent } from './../../components/hanger/hanger.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'hanger',
    component: HangerComponent
  },
  {
    path: 'eTasks',
    component: ETasksComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
