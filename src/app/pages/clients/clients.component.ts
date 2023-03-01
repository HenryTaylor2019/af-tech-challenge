import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  public isFetching: boolean;
  public clients: Client[] = [];
  public filteredClients: Client[] = [];
  public selectedClients: Client[] = [];
  public resultsOptions = [5, 10, 15, 20, 25];

  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onGetClientData(results: number): void {
    this.isFetching = true
    this.clientsService
      .fetchClients(results)
      .pipe(
        map((speakerData) => {
          this.isFetching = false;
          this.clients = speakerData[0];
          this.filteredClients = speakerData[0];
        })
      )
      .subscribe();
  }

  onPageChange(event: any ) {
    // const event = data.event
    // this.selectedClients = data.pageSlice

    // const startIndex = event.pageIndex * event.pageSize;
    // let endIndex = startIndex + event.pageSize;
    // if (endIndex > this.filteredClients.length) {
    //   endIndex = this.filteredClients.length;

    // }
    // this.filteredClients = this.filteredClients.slice(startIndex, endIndex);

  }

  onOpenDialog(client: Client) {
    this.dialog.open(DialogComponent, {
      data: client
    });
  }

  onAddClientToList(selectedClient) {
    this.filteredClients.map((client, i) => {
      if (selectedClient.name === client.name) {
        client.isSelected = true;
        this.filteredClients.splice(i, 1);
        this.selectedClients.unshift(client);
      }
    });
  }

  onRemoveClientFromList(selectedClient) {
    this.selectedClients.map((client, i) => {
      if (selectedClient.name === client.name) {
        client.isSelected = false;
        this.selectedClients.splice(i, 1);
        this.clients.unshift(client);
      }
    });
  }

  filterBySearch(eventData): void {
    let searchQuery = eventData.target.value;
    this.filteredClients = this.clients.filter((client) => {
      let firstName = client.name.first.toLocaleLowerCase();
      let lastName = client.name.last.toLocaleLowerCase();
      return (
        firstName.includes(searchQuery.toLowerCase()) ||
        lastName.includes(searchQuery.toLowerCase())
      );
    });
  }
}
