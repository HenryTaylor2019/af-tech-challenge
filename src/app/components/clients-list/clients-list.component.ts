import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client.model';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  @Input() public listType: string;
  @Input() public clients: Client[] = [];
  @Input() public filteredClients: Client[] = [];
  @Output() public openDialog = new EventEmitter<Client>();
  @Output() public selectedClient = new EventEmitter<string>();
  @Output() public paginationData = new EventEmitter<PageEvent>();

  ngOnInit() {

  }

  onOpenDialog(client: Client) {
    this.openDialog.emit(client);
  }

  onAddClientToList(clientId: string) {
    this.selectedClient.emit(clientId);
  }

  handlePageEvent(event: PageEvent) {
    this.paginationData.emit(event);
  }
}
