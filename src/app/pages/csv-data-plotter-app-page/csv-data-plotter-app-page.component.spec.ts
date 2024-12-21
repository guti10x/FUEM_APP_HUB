import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvDataPlotterAppPageComponent } from './csv-data-plotter-app-page.component';

describe('CsvDataPlotterAppPageComponent', () => {
  let component: CsvDataPlotterAppPageComponent;
  let fixture: ComponentFixture<CsvDataPlotterAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvDataPlotterAppPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsvDataPlotterAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
