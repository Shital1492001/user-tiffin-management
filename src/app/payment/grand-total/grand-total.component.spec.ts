import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandTotalComponent } from './grand-total.component';

describe('GrandTotalComponent', () => {
  let component: GrandTotalComponent;
  let fixture: ComponentFixture<GrandTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
