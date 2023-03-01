import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent {
  @Input() public listType: string;
  @Input() public isFetching: boolean;
  @Input() public filteredClients: Client[] = [];
  @Input() public selectedClients: Client[] = [];
  @Output() public openDialog = new EventEmitter<Client>();
  @Output() public selectedClient = new EventEmitter<Client>();
  public pageSelection: Client[];
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.pageSelection = this.filteredClients;
  }

  public onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.filteredClients.length) {
      endIndex = this.filteredClients.length;
    }
    this.pageSelection = this.filteredClients.slice(startIndex, endIndex);

  }

  onOpenDialog(client: Client) {
    this.openDialog.emit(client);
  }

  onAddRemoveClient(client: Client) {
    this.selectedClient.emit(client);
  }
}
