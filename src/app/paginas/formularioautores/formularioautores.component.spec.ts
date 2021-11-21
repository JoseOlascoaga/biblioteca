import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioautoresComponent } from './formularioautores.component';

describe('FormularioComponent', () => {
  let component: FormularioautoresComponent;
  let fixture: ComponentFixture<FormularioautoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioautoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioautoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
