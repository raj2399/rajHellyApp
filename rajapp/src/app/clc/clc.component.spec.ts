import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcComponent };

describe('ClcComponent', () => {
  let component: ClcComponent;
  let fixture: ComponentFixture<ClcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
