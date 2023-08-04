import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from '../services/contract.service';
import { Contract } from '../models/contract';


@Component({
  selector: 'app-update-contracts',
  templateUrl: './update-contracts.component.html',
  styleUrls: ['./update-contracts.component.css']
})
export class UpdateContractsComponent implements OnInit  {

  constructor(private router:Router,private contractService:ContractService,private aroute: ActivatedRoute){};
  onSubmit() {
   
  }

  
  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.contractService.getById(this.id).subscribe(data=>{this.contract=data})

    
  }

 

  contract:Contract=new Contract();
  id!: number;

save(){
  this.contractService.save(this.contract).subscribe(data=>{console.log(data)
   alert("Datos salvados con exito")
   this.router.navigate(["dashboard/contracts"]);
  
  })
}

}
