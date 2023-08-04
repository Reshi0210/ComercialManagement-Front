import { Injectable } from '@angular/core';
import { Contract } from '../models/contract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseUrls } from '../statics/base-urls';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpc:HttpClient) { }

  getAll():Observable <Contract []>{
    return this.httpc.get<Contract []>(`${BaseUrls.localUrl+"/contracts/findAll"}`);
  }
  
    save(Contract:Contract):Observable<Contract>{
      return this.httpc.post<Contract>(`${BaseUrls.localUrl+"/contracts/create"}`,Contract);
  }


  update(id:number,Contract:Contract):Observable<Object>{
    return this.httpc.put(`${BaseUrls.localUrl+"/contracts/update"}/${id}`,Contract);
}

  delete(id:Number):Observable<object>{
     return this.httpc.delete(`${BaseUrls.localUrl+"/contracts/delete"}/${id}`)
}

getById(id:number):Observable<Contract>{
  return this.httpc.get<Contract>(`${BaseUrls.localUrl+"/contracts/findById"}/${id}`);
}

deleter(id:Number):Observable<object>{
  return this.httpc.delete(`${BaseUrls.localUrl+"/contracts/delete"}/${id}`)
}
}
