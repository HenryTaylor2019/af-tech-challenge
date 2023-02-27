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
  public filteredClients: Client[] = [];


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
          this.filteredClients = speakerData[0];
        })
      )
      .subscribe();
  }


  filterBySearch(eventData): void {
    let searchQuery = eventData.target.value;

    this.filteredClients = this.clients.filter((speaker) => {
      return (
        speaker.name.first.toLocaleLowerCase().includes(searchQuery) ||
        speaker.name.last.toLocaleLowerCase().includes(searchQuery)
      );
    });
  }
}


