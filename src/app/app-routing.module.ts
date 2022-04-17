import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { PagenofoundComponent } from './pagenofound/pagenofound.component';




const routes: Routes=[ 
  //path :'/dashboard' está en PagesRouting
  //path :'/auth' está en AuthRouting
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:PagenofoundComponent},
  
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
