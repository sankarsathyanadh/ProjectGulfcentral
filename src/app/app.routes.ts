import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { Userdashboard } from './userdashboard/userdashboard';



export const routes: Routes = [
   { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {path : 'Login' , component : Login},
  {path : 'Home', component : Home},
  {path : 'Signup', component : Signup},
  {
    path : "Dashboard", component : Dashboard ,
     children : [
             { path: "UserDashboard" , component : Userdashboard}
     ]

  }

];
