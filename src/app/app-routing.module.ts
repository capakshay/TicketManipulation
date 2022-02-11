import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddTicketComponent,
  },
  {
    path: 'edit/:id',
    component: EditTicketComponent,
  },
  {
    path: 'list',
    component: ListTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
