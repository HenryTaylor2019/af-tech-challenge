import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  fetchClients(results?: number, pages?: number): any {
    return this.http
      .get<{ [key: string]: any }>(
        `https://randomuser.me/api/?results=${results}&page=${pages}&inc=name,location,picture,email,phone`,
        {
          // params: new HttpParams().set('pageSize', pages).set('results', results).set('page', 4)
        }
      )
      .pipe(
        map((responseData) => {
          const clientsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              clientsArray.push(responseData[key]);
            }
          }
          return clientsArray;
        })
      );
  }
}
