import { Component } from '@angular/core';
import { Factura } from '../models/factura';
import { Route, Router } from '@angular/router';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-create-factura',
  templateUrl: './create-factura.component.html',
  styleUrls: ['./create-factura.component.css']
})
export class CreateFacturaComponent {


  constructor(private router:Router,private facturaService:FacturaService){};

  factura:Factura=new Factura();

  onSubmit() {
   
    }

  save(){
    this.facturaService.save(this.factura).subscribe(data=>{console.log(data)
     alert("Datos salvados con exito")
     this.router.navigate(["dashboard/facturas"]);
    
    })
  }

}
