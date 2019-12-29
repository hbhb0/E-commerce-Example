import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authentification: AuthentificationService,private router: Router) { }

  loggering = this.authentification.logged;
  
  ngOnInit() {
    this.loggering = this.authentification.logged;
    console.log(this.loggering);
  }
  SignOut()
  {
    this.router.navigate(['/Login']);
    this.authentification.LogOut();
  }

}
