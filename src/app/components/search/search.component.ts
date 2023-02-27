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
  @Output() public searchDataEvent = new EventEmitter();
  @Output() public paramsFormData = new EventEmitter();
  public options = [1, 2, 3, 4, 5, 6, 7, 10, 100];
  public paramsForm = new FormGroup({
    results: new FormControl('', Validators.required),
    pages: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    
  }

  submitSearch(searchTerm): void {
    this.searchDataEvent.emit(searchTerm);
  }

  onUpdateResults(): void {
    if(this.paramsForm.valid) {
      this.paramsFormData.emit(this.paramsForm.value)
    }
  }

  onUpdatePageNumber(inputData): void {}
}
