import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { Client } from 'src/app/models/client.model';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let mockClient: Client = 
    {
      isSelected: false,
      name: { first: 'John', last: 'Doe', title: 'mr' },
      email: '',
      gender: '',
      id: { name: '', value: '' },
      phone: '',
      location: {} as any,
      picture: {} as any,
    }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: mockClient },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the clientData input correctly', () => {
    expect(component.clientData).toEqual(mockClient);
  });

  it('should call dialogRef.close when onCloseModal is called', () => {
    spyOn(component.dialogRef, 'close');
    component.onCloseModal();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});