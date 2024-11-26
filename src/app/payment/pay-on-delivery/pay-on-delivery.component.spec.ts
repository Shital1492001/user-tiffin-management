import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOnDeliveryComponent } from './pay-on-delivery.component';

describe('PayOnDeliveryComponent', () => {
  let component: PayOnDeliveryComponent;
  let fixture: ComponentFixture<PayOnDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayOnDeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayOnDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
