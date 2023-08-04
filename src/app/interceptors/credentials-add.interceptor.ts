import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CredentialsAddInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    console.log("*************************Interceptor********************************")

    let requestClone=request;

   


  
    requestClone=request.clone(
    {
      headers:request.headers.set( 'Authorization',`Basic cmFmYToxMjM=`)
    



   }
   );




    return next.handle(requestClone);
  }
}
