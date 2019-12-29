import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private router: Router,private comp:AppComponent) { }

  AdminName : String;
  AdminPass : String;
  ngOnInit() {
  }

  AdminSignIn(AdminName,AdminPass){
    if((AdminName == 'userAdmin') && (AdminPass == 'passAdmin'))
    {
      this.router.navigate(['/ProductManagement']);
      
    }

  }
  LogoutAdmin()
  {
    this.router.navigate(['/']);
    this.comp.admin = false;
  }
}

