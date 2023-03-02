import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
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
export class ClientsListComponent implements OnInit, OnChanges {
  @Input() public listType: string;
  @Input() public isFetching: boolean;
  @Input() public filteredClients: Client[] = [];
  @Input() public selectedClients: Client[] = [];
  @Output() public openDialog = new EventEmitter<Client>();
  @Output() public switchView = new EventEmitter();
  public pageSelection: Client[];

  constructor() {}
  ngOnInit() {
    this.pageSelection = [...this.filteredClients].slice(0, 5)
  }

  ngOnChanges(): void {
    this.pageSelection = [...this.filteredClients].filter((client)=> {
      return !client.isSelected
    })
  }

  public onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.filteredClients.length) {
      endIndex = this.filteredClients.length;
    }
    this.pageSelection = this.filteredClients.filter((client)=> {
      return !client.isSelected
    }).slice(startIndex, endIndex)
  }

  onOpenDialog(client: Client) {
    this.openDialog.emit(client);
  }


  onDisplaySelected() {
    this.switchView.emit()
  }
}
