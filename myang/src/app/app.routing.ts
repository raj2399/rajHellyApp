import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangepassComponent } from './changepass/changepass.component';
const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile/:email',component:ProfileComponent},
  {path:'EditProfile/:email',component:UpdateComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'changepass',component:ChangepassComponent}
 ];
 export const routing =RouterModule.forRoot(arr);

