import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsService } from './tickets.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Mypipe } from './customDate.pipe';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    AddTicketComponent,
    EditTicketComponent,
    ListTicketComponent,
    Mypipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
