import { Component, OnInit } from '@angular/core';
import { Factura } from '../models/factura';
import { FacturaService } from '../services/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {



  constructor(private facturaService:FacturaService,private route:Router) { }


  ngOnInit(): void {
    this.getAll();
   
  }

  facturas!:Factura[];




  getAll(){
    this.facturaService.getAll().subscribe(data=>{this.facturas=data})


  }

  update(id:Number){
    this.route.navigate(["dashboard/update",id]);
    }

    delete(id:Number){

      if (confirm("Esta a punto de borrar la factura de forma permanente,desea continuar?")){
      this.facturaService.delete(id).subscribe(data=>{
        this.getAll();
        console.log(data);
    
      });}

}
}
