import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';
import { BaseUrls } from '../statics/base-urls';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private httpc:HttpClient) { }

  getAll():Observable <Factura []>{
    return this.httpc.get<Factura []>(`${BaseUrls.localUrl+"/facturas/findAll"}`);
  }
  
    save(factura:Factura):Observable<Factura>{
      return this.httpc.post<Factura>(`${BaseUrls.localUrl+"/facturas/create"}`,factura);
  }


  update(id:number,factura:Factura):Observable<Object>{
    return this.httpc.put(`${BaseUrls.localUrl+"/facturas/update"}/${id}`,factura);
}

  delete(id:Number):Observable<object>{
     return this.httpc.delete(`${BaseUrls.localUrl+"/facturas/delete"}/${id}`)
}

getById(id:number):Observable<Factura>{
  return this.httpc.get<Factura>(`${BaseUrls.localUrl+"/facturas/findById"}/${id}`);
}

deleter(id:Number):Observable<object>{
  return this.httpc.delete(`${BaseUrls.localUrl+"/facturas/delete"}/${id}`)
}

}
