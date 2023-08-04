import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { Router } from '@angular/router';
import { Contract } from '../models/contract';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private contractsService:ContractService,private route:Router) { }


  ngOnInit(): void {
    this.getAll();
   
  }

  contracts!:Contract[];




  getAll(){
    this.contractsService.getAll().subscribe(data=>{this.contracts=data})


  }

  update(id:Number){
    this.route.navigate(["dashboard/updatec",id]);
    }

    delete(id:Number){

      if (confirm("Esta a punto de borrar el contrato de forma permanente,desea continuar?")){
      this.contractsService.delete(id).subscribe(data=>{
        this.getAll();
        console.log(data);
    
      });}

}

}
