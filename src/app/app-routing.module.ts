import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './intermediate-contract/search/search.component';
import { CreateEventComponent } from './intermediate-contract/create/create-event/create-event.component';
import { CreateGlobalRegistrationComponent } from './intermediate-contract/create/create-global-registration/create-global-registration.component';
import { SearchEventsComponent } from './intermediate-contract/search/search-events/search-events.component';
import { SearchDocumentsComponent } from './intermediate-contract/search/search-documents/search-documents.component';
import { SearchEventsListComponent } from './intermediate-contract/search/search-events/search-events-list/search-events-list.component';
import { ModifyEventComponent } from './intermediate-contract/search/search-events/modify-event/modify-event.component';
import { SearchDocumentsListComponent } from './intermediate-contract/search/search-documents/search-documents-list/search-documents-list.component';
import { CreateEventResultsComponent } from './intermediate-contract/create/create-event/create-event-results/create-event-results.component';
import { CreateListEventComponent } from './intermediate-contract/create/create-event/create-list-event/create-list-event.component';
import { ModifyActivityComponent } from './intermediate-contract/search/search-events/modify-activity/modify-activity.component';


const routes: Routes = [
  { path: 'createevent', component: CreateEventComponent, children: [
    { path: 'createeventresults', component: CreateEventResultsComponent}
  ]},
  { path: 'createglobalregistration', component: CreateGlobalRegistrationComponent},
  { path: 'searchevents', component: SearchEventsComponent},
  { path: 'searchdocuments', component: SearchDocumentsComponent},
  { path: 'searcheventslist', component: SearchEventsListComponent},
  { path: 'modifyevent', component: ModifyEventComponent},
  { path: 'searchdocumentslist', component: SearchDocumentsListComponent},
  { path: 'createlistevent', component: CreateListEventComponent},
  { path: 'modifyactivity', component: ModifyActivityComponent}
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
