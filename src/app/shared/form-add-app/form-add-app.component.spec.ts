import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAppComponent } from './form-add-app.component';

describe('FormAddAppComponent', () => {
  let component: FormAddAppComponent;
  let fixture: ComponentFixture<FormAddAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
