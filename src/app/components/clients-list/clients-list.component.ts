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
  @Input() public pageSize: number
  @Input() public clients: Client[] = [];
  @Input() public filteredClients: Client[] = [];
  @Output() public openDialog = new EventEmitter<Client>();
  @Output() public selectedClient = new EventEmitter<Client>();
  @Output() public currentItemsToShow = new EventEmitter<Client[]>()
 
  ngOnInit() {
  }

  onPageChange($event) {
    this.currentItemsToShow.emit($event)
  }

  onOpenDialog(client: Client) {
    this.openDialog.emit(client);
  }

  onAddRemoveClient(client: Client) {
    this.selectedClient.emit(client);
  }
}
