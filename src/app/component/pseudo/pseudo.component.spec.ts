import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoComponent } from './pseudo.component';

describe('PseudoComponent', () => {
  let component: PseudoComponent;
  let fixture: ComponentFixture<PseudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PseudoComponent]
    });
    fixture = TestBed.createComponent(PseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
