import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  @Input() public listType: string;
  @Input() public isFetching: boolean;
  @Input() public filteredClients: Client[] = [];
  @Output() public openDialog = new EventEmitter<Client>();
  @Output() public selectedClient = new EventEmitter<Client>();
  @Output() public pageChange = new EventEmitter<any>();
  public dataSource: any;
  public pageSlice: Client[];
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  constructor() {}

  ngOnInit() {
    this.pageSlice = this.filteredClients;
  }

  public onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.filteredClients.length) {
      endIndex = this.filteredClients.length;
    }
    this.pageSlice = this.filteredClients.slice(startIndex, endIndex);
  }

  onOpenDialog(client: Client) {
    this.openDialog.emit(client);
  }

  onAddRemoveClient(client: Client) {
    this.selectedClient.emit(client);
  }
}
