import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosListarComponent } from './formularios-listar.component';

describe('FormulariosListarComponent', () => {
  let component: FormulariosListarComponent;
  let fixture: ComponentFixture<FormulariosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
