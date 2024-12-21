import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAssmblerAppPageComponent } from './code-assmbler-app-page.component';

describe('CodeAssmblerAppPageComponent', () => {
  let component: CodeAssmblerAppPageComponent;
  let fixture: ComponentFixture<CodeAssmblerAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeAssmblerAppPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeAssmblerAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
