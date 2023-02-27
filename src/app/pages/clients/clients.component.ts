import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  public clients: Client[] = [];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.onGetClientData();
  }

  onGetClientData(): void {
    this.clientsService
      .fetchClients()
      .pipe(
        map((speakerData) => {
          this.clients = speakerData[0];
        })
      )
      .subscribe();
  }
}


