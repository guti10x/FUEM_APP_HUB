import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HubPageComponent } from './pages/hub-page/hub-page.component';
import { AppCardComponent } from './shared/app-card/app-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppFilterComponent } from './shared/app-filter/app-filter.component';
import { FormAddAppComponent } from './shared/form-add-app/form-add-app.component';
import { CsvDataPlotterAppPageComponent } from './pages/csv-data-plotter-app-page/csv-data-plotter-app-page.component';
import { CodeAssmblerAppPageComponent } from './pages/code-assmbler-app-page/code-assmbler-app-page.component';
import { TableComponent } from './shared/table/table.component';
import { FiltoTablaComponent } from './shared/filto-tabla/filto-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HubPageComponent,
    AppCardComponent,
    HeaderComponent,
    FooterComponent,
    AppFilterComponent,
    FormAddAppComponent,
    CsvDataPlotterAppPageComponent,
    CodeAssmblerAppPageComponent,
    TableComponent,
    FiltoTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
