import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltoTablaComponent } from './filto-tabla.component';

describe('FiltoTablaComponent', () => {
  let component: FiltoTablaComponent;
  let fixture: ComponentFixture<FiltoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltoTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
