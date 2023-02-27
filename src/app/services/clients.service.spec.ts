import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ClientsService } from './clients.service';

describe('ClientsService', () => {
  let service: ClientsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientsService],
    });
    service = TestBed.inject(ClientsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch clients from the API', () => {
    const mockResponse = {
      results: [
        {
          isSelected: false,
          name: { first: 'John', last: 'Doe', title: 'mr' },
          dob: { date: '', age: 100 },
          email: '',
          gender: '',
          cell: '',
          id: { name: '', value: '' },
          login: {},
          phone: '',
          location: {} as any,
          nat: '',
          picture: {} as any,
          registered: {} as any
        },
      ],
    };

    service.fetchClients().subscribe((clients) => {
      expect(clients).toEqual(mockResponse.results);
    });

    const req = httpMock.expectOne('https://randomuser.me/api/?results=20&page=1');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
