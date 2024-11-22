import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('MenuCardComponent', () => {
  let component: MenuCardComponent;
  let fixture: ComponentFixture<MenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
