import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientComponent } from './client/client.component';
import { PagesModule } from '../pages/pages.module';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientComponent,
    SearchComponent,
    HeaderComponent,
    DialogComponent,
  ],
  imports: [CommonModule, MatDialogModule],
  exports: [
    ClientsListComponent,
    ClientComponent,
    SearchComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule {}