import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../tickets.service';
@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css'],
})
export class ListTicketComponent {
  constructor(private ticket: TicketsService, private modalService: NgbModal) {}
  ticketData: any = [];
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 20],
      processing: true,
    };

    this.ticket.getAllUsers().subscribe((allData) => {
      // console.log(allData);
      this.ticketData = allData;
    });
  }

  openEdit(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
  }

  deleteTicket(ticket_id: any) {
    this.ticket.delelteTicket(ticket_id).subscribe((response) => {
      console.log(response);
    });
    this.ngOnInit();
    this.modalService.dismissAll();
  }
}
