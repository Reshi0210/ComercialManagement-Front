import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ContractsComponent } from './contracts/contracts.component';
import { LoginComponent } from './login/login.component';
import { Factura } from './models/factura';
import { FacturasComponent } from './facturas/facturas.component';
import { CreateFacturaComponent } from './create-factura/create-factura.component';
import { UpdateFacturaComponent } from './update-factura/update-factura.component';
import { CreateContractsComponent } from './create-contracts/create-contracts.component';
import { UpdateContractsComponent } from './update-contracts/update-contracts.component';


const routes: Routes = [

   {path:"login",component:LoginComponent}
  ,{path:"",redirectTo:"/login",pathMatch:"full"}
  ,{path:"dashboard",component:DashBoardComponent,
  children:[{path:"contracts",component:ContractsComponent}
           ,{path:"facturas",component:FacturasComponent}
           ,{path:"facturas/create",component:CreateFacturaComponent}
           ,{path:"contracts/createct",component:CreateContractsComponent}
           ,{path:"update/:id",component:UpdateFacturaComponent}
           ,{path:"updatec/:id",component:UpdateContractsComponent}
           
]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
