import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../../authentification.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  Email :string;
  password :string;
  constructor(public authentification: AuthentificationService) { }

  ngOnInit() {
  }
  SignUp()
  {
    this.authentification.SignUp(this.Email,this.password);
    this.Email = '';
    this.password = '';
  }
  /*
  SignIn()
  {
    this.authentification.signIn(this.Email,this.password);
    this.Email = '';
    this.password = '';
  }
  SignOut()
  {
    this.authentification.LogOut();
  }
  SignGoogle()
  {
    this.authentification.SignUpGoogle();
  }*/

}
