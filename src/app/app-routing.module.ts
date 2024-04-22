import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalleComponent } from './pages/salle/salle.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetComponent } from './pages/reset/reset.component';
import { EmailComponent } from './pages/email/email.component';
import { CompteComponent } from './pages/compte/compte.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path : 'salle' , component : SalleComponent
  },
  {
    path : 'reservation' , component : ReservationComponent
  },
  
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'signup' , component : SignupComponent
  },
  {
    path : 'reset' , component : ResetComponent
  },
  {
    path : 'email' , component : EmailComponent
  },
  {
    path : 'compte' , component : CompteComponent
  },
  {
    path : '' , component : HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
