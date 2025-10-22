import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { Userdashboard } from './userdashboard/userdashboard';
import { Servicesgulfcentral } from './servicesgulfcentral/servicesgulfcentral';
import { Usercreation } from './usercreation/usercreation';



export const routes: Routes = [
   { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {path : 'Login' , component : Login},
  {path : 'Home', component : Home},
  {path : 'Signup', component : Signup},
  {
    path : "Dashboard", component : Dashboard ,
     children : [
             { path: "UserDashboard" , component : Userdashboard},
             {path: "Servicegulfcentral" , component : Servicesgulfcentral},
             {path :"Usercreation" , component : Usercreation }
     ]

  }

];
