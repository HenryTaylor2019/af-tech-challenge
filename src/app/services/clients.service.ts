import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private userEndpoint = "https://randomuser.me/api/?results=20&page=1'";

  constructor(private http: HttpClient) {}

  fetchClients(): any {
    return this.http.get<{ [key: string]: any }>(this.userEndpoint).pipe(
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
