import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  logged = false;
  userData : Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
   }

   //Signing Up method
   SignUp(Email: string,password: string)
   {
     this.angularFireAuth.auth.createUserWithEmailAndPassword(Email,password).then(
       res =>
       {
         console.log("Signed Up",res);
         this.logged=true;
       }
     ).catch(error =>
      {
        console.log("Error :",error.message);
      });

   }
    //Signing In method
    signIn(Email: string,password: string)
    {
      this.angularFireAuth.auth.signInWithEmailAndPassword(Email,password).then(
        res =>
        {
          console.log("welcome home :",res);
          this.logged=true;
        }
        
      ).catch(
        error =>
        {
          console.log("error Signing In", error.message);
        }
      );
      
    }
    //Loging Out method
    LogOut()
    {
      this.angularFireAuth.auth.signOut();
      this.logged=false;
    }

    //SignUp with Google Method
    SignUpGoogle()
    {
 
     this.AuthLogin(new auth.GoogleAuthProvider);
 
    }

    //Authentificated Login
    AuthLogin(Provider)
    {
     this.angularFireAuth.auth.signInWithPopup(Provider).then(
       res =>
       {
         console.log("Signed In with google",res);
       }
     ).catch(
       error =>
       {
         console.log("error Signing In", error.message);
       }
     );
    }
}
