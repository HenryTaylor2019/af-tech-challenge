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

import {MatTableDataSource} from '@angular/material/table'

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
  public pageSize = 5;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  // Card is whatever type you use for your datasource, DATA is your data
  dataSource: MatTableDataSource<Client> = new MatTableDataSource<Client>(this.filteredClients);
  constructor(private changeDetectorRef: ChangeDetectorRef){}
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
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
