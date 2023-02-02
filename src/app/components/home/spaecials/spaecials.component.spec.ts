import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaecialsComponent } from './spaecials.component';

describe('SpaecialsComponent', () => {
  let component: SpaecialsComponent;
  let fixture: ComponentFixture<SpaecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaecialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
