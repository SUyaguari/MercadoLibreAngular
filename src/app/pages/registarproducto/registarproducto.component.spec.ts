import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarproductoComponent } from './registarproducto.component';

describe('RegistarproductoComponent', () => {
  let component: RegistarproductoComponent;
  let fixture: ComponentFixture<RegistarproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
