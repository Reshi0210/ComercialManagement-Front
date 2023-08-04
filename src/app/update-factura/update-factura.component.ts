import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaService } from '../services/factura.service';
import { Factura } from '../models/factura';

@Component({
  selector: 'app-update-factura',
  templateUrl: './update-factura.component.html',
  styleUrls: ['./update-factura.component.css']
})
export class UpdateFacturaComponent implements OnInit {

  constructor(private router:Router,private facturaService:FacturaService,private aroute: ActivatedRoute){};

  factura:Factura=new Factura();
  id!: number;


  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.facturaService.getById(this.id).subscribe(data=>{this.factura=data})

    
  }

  onSubmit() {
   
  }

save(){
  this.facturaService.update(this.id,this.factura).subscribe(data=>{console.log(data)
   alert("Datos salvados con exito")
   this.router.navigate(["dashboard/facturas"]);
  
  })
}
}
