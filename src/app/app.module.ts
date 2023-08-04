import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCommonModule} from '@angular/material/core';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ContractsComponent } from './contracts/contracts.component';
import { LoginComponent } from './login/login.component';
import { FacturasComponent } from './facturas/facturas.component';
import { CredentialsAddInterceptor } from './interceptors/credentials-add.interceptor';
import { CreateFacturaComponent } from './create-factura/create-factura.component';
import { UpdateFacturaComponent } from './update-factura/update-factura.component';
import { CreateContractsComponent } from './create-contracts/create-contracts.component';
import { UpdateContractsComponent } from './update-contracts/update-contracts.component';



@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ContractsComponent,
    LoginComponent,
    FacturasComponent,
    CreateFacturaComponent,
    UpdateFacturaComponent,
    CreateContractsComponent,
    UpdateContractsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,
    MatTreeModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,
    useClass:CredentialsAddInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
