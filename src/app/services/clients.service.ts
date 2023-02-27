import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // private resultsNumber = 5;
  // private pageNumber = 1;
  // private userEndpoint = `https://randomuser.me/api/?results=${this.resultsNumber}&page=${this.pageNumber}'`;

  constructor(private http: HttpClient) {}

  fetchClients( results?: number, pages?: number ): any {
    return this.http.get<{ [key: string]: any }>(`https://randomuser.me/api/?results=${results}&page=${pages}&inc=name,location,picture,email,phone`, {
      // params: new HttpParams().set('pageSize', pages).set('results', results).set('page', 4)
    }).pipe(
      map((responseData) => {
        console.log('e', responseData);
        
        const clientsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            clientsArray.push(responseData[key]);
          }
        }
        console.log(clientsArray)

        return clientsArray;
      })
    );
  }

  // updateResultsNumber(resultsNumber: number) {
  //   this.resultsNumber = resultsNumber;
  //   console.log(this.resultsNumber)

  //   // this.fetchClients();
  // }

  // updatePageNumber(pageNumber: number) {
  //   this.pageNumber = pageNumber;

  //   // this.fetchClients();
  // }
}
