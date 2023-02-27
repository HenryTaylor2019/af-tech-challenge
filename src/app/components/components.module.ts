import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientComponent } from './client/client.component';



@NgModule({
  declarations: [
    ClientsListComponent,
    ClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
