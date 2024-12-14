import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubPageComponent } from './pages/hub-page/hub-page.component';
import { AppCardComponent } from './shared/app-card/app-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HubPageComponent,
    AppCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
