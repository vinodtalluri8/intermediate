import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { CreateEventComponent } from "./create/create-event/create-event.component";
import { CreateGlobalRegistrationComponent } from "./create/create-global-registration/create-global-registration.component";
import { SearchEventsComponent } from "./search/search-events/search-events.component";
import { SearchDocumentsComponent } from "./search/search-documents/search-documents.component";
import { SearchEventsListComponent } from "./search/search-events/search-events-list/search-events-list.component";
import { ModifyEventComponent } from "./search/search-events/modify-event/modify-event.component";
import { SearchDocumentsListComponent } from "./search/search-documents/search-documents-list/search-documents-list.component";


const routes: Routes = [
  { path:'createevent', component: CreateEventComponent},
  { path:'createglobalregistration', component: CreateGlobalRegistrationComponent},
  { path:'searchevents', component: SearchEventsComponent},
  { path:'searchdocuments', component: SearchDocumentsComponent},
  { path:'searcheventslist', component: SearchEventsListComponent},
  { path:'modifyevent', component: ModifyEventComponent},
  { path:'searchdocumentslist', component: SearchDocumentsListComponent}
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
