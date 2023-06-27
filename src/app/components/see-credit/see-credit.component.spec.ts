import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCreditComponent } from './see-credit.component';

describe('SeeCreditComponent', () => {
  let component: SeeCreditComponent;
  let fixture: ComponentFixture<SeeCreditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeCreditComponent]
    });
    fixture = TestBed.createComponent(SeeCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
