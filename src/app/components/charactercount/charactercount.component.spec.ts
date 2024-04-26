import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactercountComponent } from './charactercount.component';

describe('CharactercountComponent', () => {
  let component: CharactercountComponent;
  let fixture: ComponentFixture<CharactercountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactercountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
