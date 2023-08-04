import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 request:LoginRequest=new LoginRequest();

 onSubmit(){

  /*this.loginService.login(this.request).subscribe(data=>{console.log(data)
  
    localStorage.setItem("token",data.authToken)
  },
  (error)=>{
    error.status==401? alert("Credenciales Incorrectas"):alert("Error")
  
  
  
  })*/

}}
