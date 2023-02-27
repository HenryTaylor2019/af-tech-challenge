import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [ClientsComponent]
})
export class PagesModule { }
