import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Auth } from './resolver/auth.resolver';

const routes: Routes = [
  {
    path : '',
    children : [
      {
      path : 'main',
      loadChildren : ()=> import('./main/main.module').then(m=> m.MainModule),
      canActivate : [Auth]
      },
      {
        path : 'auth',
        loadChildren : ()=> import('./authentication/authentication.module').then(m=> m.AuthenticatonModule),
        
        },
        {
      path : '**',
      redirectTo : 'auth',
      pathMatch : 'full'
       }
    ]
  }
  // {
  //   path : 'main',
  //   loadChildren : ()=> import('./main/main.module').then(m=> m.MainModule)
  // },
  // {
  //   path : '',
  //   redirectTo : 'main'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
