import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectData } from './collect-data';

describe('CalculationComponent', () => {
  let component: CollectData;
  let fixture: ComponentFixture<CollectData>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectData]
    });
    fixture = TestBed.createComponent(CollectData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
