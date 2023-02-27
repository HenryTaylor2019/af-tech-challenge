import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private userEndpoint = "https://randomuser.me/api/?results=20&page=1'";

  constructor(private http: HttpClient) {}

}
