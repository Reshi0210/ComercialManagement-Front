import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacturaComponent } from './update-factura.component';

describe('UpdateFacturaComponent', () => {
  let component: UpdateFacturaComponent;
  let fixture: ComponentFixture<UpdateFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFacturaComponent]
    });
    fixture = TestBed.createComponent(UpdateFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
