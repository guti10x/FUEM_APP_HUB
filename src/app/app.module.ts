import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HubPageComponent } from './pages/hub-page/hub-page.component';
import { AppCardComponent } from './shared/app-card/app-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppFilterComponent } from './shared/app-filter/app-filter.component';
import { FormAddAppComponent } from './shared/form-add-app/form-add-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HubPageComponent,
    AppCardComponent,
    HeaderComponent,
    FooterComponent,
    AppFilterComponent,
    FormAddAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
