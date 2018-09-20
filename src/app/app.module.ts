import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { MockDataService } from "./intermediate-contract/services/mock-data.service";
import { CreateComponent } from "./intermediate-contract/create/create.component";
import { SearchComponent } from "./intermediate-contract/search/search.component";
import { CreateEventComponent } from "./intermediate-contract/create/create-event/create-event.component";
import { CreateGlobalRegistrationComponent } from "./intermediate-contract/create/create-global-registration/create-global-registration.component";
import { SearchEventsComponent } from "./intermediate-contract/search/search-events/search-events.component";
import { SearchDocumentsComponent } from "./intermediate-contract/search/search-documents/search-documents.component";
import { SearchEventsListComponent } from "./intermediate-contract/search/search-events/search-events-list/search-events-list.component";
import { ModifyEventComponent } from "./intermediate-contract/search/search-events/modify-event/modify-event.component";
import { SearchDocumentsListComponent } from "./intermediate-contract/search/search-documents/search-documents-list/search-documents-list.component";
import { CreateEventResultsComponent } from "./intermediate-contract/create/create-event/create-event-results/create-event-results.component";
import { CreateListEventComponent } from "./intermediate-contract/create/create-event/create-list-event/create-list-event.component";
import { ModifyActivityComponent } from "./intermediate-contract/search/search-events/modify-activity/modify-activity.component";


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent,
    CreateEventComponent,
    CreateGlobalRegistrationComponent,
    SearchEventsComponent,
    SearchDocumentsComponent,
    SearchEventsListComponent,
    ModifyEventComponent,
    SearchDocumentsListComponent,
    CreateEventResultsComponent,
    CreateListEventComponent,
    ModifyActivityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    AngularFontAwesomeModule,
    SharedModule,
    HttpClientModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    TableModule,
    AccordionModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
