import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariolibroComponent } from './formulariolibro.component';

describe('FormularioComponent', () => {
  let component: FormulariolibroComponent;
  let fixture: ComponentFixture<FormulariolibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariolibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariolibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
