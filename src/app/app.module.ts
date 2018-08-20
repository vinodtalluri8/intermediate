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
import { MockDataService } from "./services/mock-data.service";
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { CreateEventComponent } from './create/create-event/create-event.component';
import { CreateGlobalRegistrationComponent } from './create/create-global-registration/create-global-registration.component';
import { SearchEventsComponent } from './search/search-events/search-events.component';
import { SearchDocumentsComponent } from './search/search-documents/search-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent,
    CreateEventComponent,
    CreateGlobalRegistrationComponent,
    SearchEventsComponent,
    SearchDocumentsComponent
  ],
  imports: [
    BrowserModule,
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
