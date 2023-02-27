import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientComponent } from './client/client.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [ClientsListComponent, ClientComponent],
  imports: [CommonModule],
  exports: [ClientsListComponent, ClientComponent],
})
export class ComponentsModule {}
