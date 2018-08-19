import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { CreateEventComponent } from "./create/create-event/create-event.component";
import { CreateGlobalRegistrationComponent } from "./create/create-global-registration/create-global-registration.component";

const routes: Routes = [
  { path:'createevent', component: CreateEventComponent},
  { path:'createglobalregistration', component: CreateGlobalRegistrationComponent},
  { path:'search', component: SearchComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
