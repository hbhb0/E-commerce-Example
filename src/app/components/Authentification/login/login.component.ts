import { Component, OnInit, } from '@angular/core';
import { AuthentificationService } from 'src/app/authentification.service';
import { Router } from '@angular/router';
import { AppComponent } from './../../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggering = this.authentification.logged;
  Email :string;
  password :string;
  constructor(public authentification: AuthentificationService,private router: Router,private comp:AppComponent) { }

  ngOnInit() {
  }
  SignIn()
  {
    if ((this.Email == 'admin') && (this.password == 'pass'))
    {
      this.router.navigate(['/AuthAdmin']);
      this.comp.admin = true;

    }
    this.authentification.signIn(this.Email,this.password);
    this.Email = '';
    this.password = '';
    console.log(this.authentification.logged);
    this.authentification.logged = true;
    console.log(this.authentification.logged);
  }

}
