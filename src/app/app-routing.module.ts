import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubPageComponent } from './pages/hub-page/hub-page.component';

const routes: Routes = [
    { path: 'hub', component:  HubPageComponent},  // Ruta al hug de aplicaciiones
    { path: '', redirectTo: 'hub', pathMatch: 'full' },  // Redirigir al hub  si la ruta está vacía
    { path: '**', redirectTo: 'hub' }  // Redirigir al hub para cualquier ruta desconocida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}