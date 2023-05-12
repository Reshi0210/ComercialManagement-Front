import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ContractsComponent } from './contracts/contracts.component';


const routes: Routes = [

  
  {path:"",redirectTo:"/dashboard",pathMatch:"full"}
  ,{path:"dashboard",component:DashBoardComponent,
  children:[{ path:"contracts",component:ContractsComponent}]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
