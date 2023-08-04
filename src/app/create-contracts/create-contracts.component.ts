import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../services/contract.service';
import { Contract } from '../models/contract';

@Component({
  selector: 'app-create-contracts',
  templateUrl: './create-contracts.component.html',
  styleUrls: ['./create-contracts.component.css']
})
export class CreateContractsComponent {

  constructor(private router:Router,private contractService:ContractService){};

  contract:Contract=new Contract();

  onSubmit() {
   
    }

  save(){
    this.contractService.save(this.contract).subscribe(data=>{console.log(data)
     alert("Datos salvados con exito")
     this.router.navigate(["dashboard/contracts"]);
    
    })
  }

}
