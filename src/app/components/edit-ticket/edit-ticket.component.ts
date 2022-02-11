import { TicketsService } from './../../tickets.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  datePickerConfig!: Partial<BsDatepickerConfig>;

  constructor(private ticket: TicketsService, private router: ActivatedRoute) {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(),
        dateInputFormat: 'YYYY-MM-DD',
      }
    );
  }

  editTicket = new FormGroup({
    ticket_id: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    tdate: new FormControl(''),
  });

  // message: boolean = false;

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.ticket
      .getTicketById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        //   console.log(result[0]);
        let dateStrip = result[0].tdate;

        this.editTicket = new FormGroup({
          ticket_id: new FormControl(result[0].ticket_id),
          description: new FormControl(result[0].description),
          priority: new FormControl(result[0].priority),
          tdate: new FormControl(dateStrip.substring(0, 10)),
        });
      });
  }

  UpdateData() {
    console.log(this.editTicket.value);
    this.ticket
      .updateTicketData(
        this.router.snapshot.params['id'],
        this.editTicket.value
      )
      .subscribe((result: any) => {
        console.log(result);
      });
  }
}
