import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConfigurationFormComponent } from './configuration-form.component';
import { WebSocketService } from '../../services/websocket.service';

describe('ConfigurationFormComponent', () => {
  let component: ConfigurationFormComponent;
  let fixture: ComponentFixture<ConfigurationFormComponent>;
  let webSocketService: WebSocketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationFormComponent ],
      imports: [ FormsModule ],
      providers: [
        {
          provide: WebSocketService,
          useValue: {
            sendMessage: jasmine.createSpy('sendMessage')
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationFormComponent);
    component = fixture.componentInstance;
    webSocketService = TestBed.inject(WebSocketService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send configuration on submit', () => {
    component.totalTickets = 100;
    component.ticketReleaseRate = 10;
    component.customerRetrievalRate = 5;
    component.maxTicketCapacity = 200;

    component.onSubmit();

    expect(webSocketService.sendMessage).toHaveBeenCalledWith({
      totalTickets: 100,
      ticketReleaseRate: 10,
      customerRetrievalRate: 5,
      maxTicketCapacity: 200
    });
  });
});