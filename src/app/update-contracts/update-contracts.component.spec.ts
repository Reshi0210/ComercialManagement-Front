import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContractsComponent } from './update-contracts.component';

describe('UpdateContractsComponent', () => {
  let component: UpdateContractsComponent;
  let fixture: ComponentFixture<UpdateContractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateContractsComponent]
    });
    fixture = TestBed.createComponent(UpdateContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
