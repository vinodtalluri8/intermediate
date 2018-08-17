import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  { path:'create', component: CreateComponent},
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
