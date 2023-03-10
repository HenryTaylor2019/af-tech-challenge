import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  fetchClients(results?: number): any {
    return this.http
      .get<{ [key: string]: any }>(
        `https://randomuser.me/api/?results=${results}&inc=name,location,picture,email,phone&noinfo`
      )
      .pipe(
        map((responseData) => {
          const clientsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              responseData[key].map((client) => {
                client.isSelected = false
              })
              clientsArray.push(responseData[key]);
            }
          }
          return clientsArray;
        })
      );
  }
}
