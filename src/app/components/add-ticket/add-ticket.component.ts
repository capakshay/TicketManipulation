import { TicketsService } from './../../tickets.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css'],
})
export class AddTicketComponent implements OnInit {
  datePickerConfig!: Partial<BsDatepickerConfig>;

  constructor(private ticket: TicketsService) {
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

  addTicket = new FormGroup({
    description: new FormControl('', Validators.required),
    priority: new FormControl(''),
    tdate: new FormControl(''),
  });

  get description() {
    // console.log(this.addTicket.get('description'));

    return this.addTicket.get('description');
  }
  // message: boolean = false;

  ngOnInit(): void {}

  SaveData() {
    // console.log(this.datePickerConfig);
    this.ticket.saveUserData(this.addTicket.value).subscribe((result) => {
      // console.log(result);
      // this.message = true;
    });
  }
}
