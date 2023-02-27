import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientComponent } from './client/client.component';
import { PagesModule } from '../pages/pages.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ClientsListComponent, ClientComponent, SearchComponent],
  imports: [CommonModule],
  exports: [ClientsListComponent, ClientComponent],
})
export class ComponentsModule {}
