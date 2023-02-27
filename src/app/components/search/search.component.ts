import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() public clients: Client[] = [];
  @Output() public searchDataEvent = new EventEmitter();

  submitSearch(searchTerm): void {
    this.searchDataEvent.emit(searchTerm);
  }
}
