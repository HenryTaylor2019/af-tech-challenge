import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() public clients: Client[] = [];
  @Input() public resultsOptions: number[];
  @Output() public searchDataEvent = new EventEmitter();
  @Output() public paramsFormData = new EventEmitter();
  public resultsValue: number;

  ngOnInit(): void {}

  submitSearch(searchTerm): void {
    this.searchDataEvent.emit(searchTerm);
  }

  onUpdateResults(): void {
    this.paramsFormData.emit(this.resultsValue);
  }
}
