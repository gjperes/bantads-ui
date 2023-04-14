import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedComponentComponent } from './scoped-component.component';

describe('ScopedComponentComponent', () => {
  let component: ScopedComponentComponent;
  let fixture: ComponentFixture<ScopedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
