import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClientsListComponent } from './clients-list.component';
import { Client } from 'src/app/models/client.model';

describe('ClientsListComponent', () => {
  let component: ClientsListComponent;
  let fixture: ComponentFixture<ClientsListComponent>;
  let mockClients: Client[] = [
    {
      isSelected: false,
      name: { first: 'John', last: 'Doe', title: 'mr' },
      email: '',
      gender: '',
      id: { name: '', value: '' },
      phone: '',
      location: {} as any,
      picture: {} as any,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should emit openDialog event when onOpenDialog is called', () => {
    spyOn(component.openDialog, 'emit');
    const mockClient = mockClients[0]
    component.onOpenDialog(mockClient);
    expect(component.openDialog.emit).toHaveBeenCalledWith(mockClient);
  });

  it('should emit selectedClient event when onAddClientToList is called', () => {
    spyOn(component.selectedClient, 'emit');
    const clientId = '1';
    component.onAddClientToList(clientId);
    expect(component.selectedClient.emit).toHaveBeenCalledWith(clientId);
  });
});
