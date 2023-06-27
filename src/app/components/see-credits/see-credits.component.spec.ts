import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCreditsComponent } from './see-credits.component';

describe('SeeCreditsComponent', () => {
  let component: SeeCreditsComponent;
  let fixture: ComponentFixture<SeeCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeCreditsComponent]
    });
    fixture = TestBed.createComponent(SeeCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
