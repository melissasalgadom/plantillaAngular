
import { Component, ViewChild } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  
 /* @ViewChild('f', {static: false}) loginForm: NgForm;

  public correo_electronico = "melissa"; 
  public contrasena = '123';
  constructor(private router: Router,
    private route: ActivatedRoute, private loginService: LoginService) { }


    autenticar(){
      console.log('Autenticando')
      //this.loginService.autenticarService(' Melissa')
    this.loginService.signin(this.correo_electronico, this.contrasena).subscribe(dataFinal => {
    console.log(dataFinal)  
     },
       error => {
         console.log(error)
         
       });
      }
// On submit button click
onSubmit() {
  this.loginForm.reset();
}
// On Forgot password link click
onForgotPassword() {
  this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
}
// On registration link click
onRegister() {
  this.router.navigate(['register'], { relativeTo: this.route.parent });
}*/
}
