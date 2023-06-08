import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  {
    path:'',
    component: InfoComponent
  },
  {
    path: 'salary',
    component:SalaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
