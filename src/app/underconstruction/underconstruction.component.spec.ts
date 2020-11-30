import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderconstructionComponent } from './underconstruction.component';

describe('UnderconstructionComponent', () => {
  let component: UnderconstructionComponent;
  let fixture: ComponentFixture<UnderconstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderconstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
