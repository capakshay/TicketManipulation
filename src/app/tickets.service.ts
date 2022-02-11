import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  url = 'http://localhost:3300/users';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.url);
  }

  saveUserData(data: any) {
    //console.log(data);
    return this.http.post(this.url, data);
  }

  delelteTicket(id: any) {
    // console.log(`${this.url}/${id}`);
    return this.http.delete(`${this.url}/${id}`);
  }

  getTicketById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateTicketData(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
