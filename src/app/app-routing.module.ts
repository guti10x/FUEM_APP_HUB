import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubPageComponent } from './pages/hub-page/hub-page.component';
import { CsvDataPlotterAppPageComponent } from './pages/csv-data-plotter-app-page/csv-data-plotter-app-page.component';
import { CodeAssmblerAppPageComponent } from './pages/code-assmbler-app-page/code-assmbler-app-page.component';


const routes: Routes = [
    { path: 'AppStore', component:  HubPageComponent},  // Ruta al hug de aplicaciiones (AppStore)
    { path: 'NexusCSVDataPlotterApp', component:  CsvDataPlotterAppPageComponent},  // Ruta a la app Nexus CSV Data Plotter
    { path: 'CodeAssemblerApp', component:  CodeAssmblerAppPageComponent},  // Ruta a la app CodeAssembler
    { path: '', redirectTo: 'AppStore', pathMatch: 'full' },  // Redirigir al hub  si la ruta está vacía (AppStore)
    { path: '**', redirectTo: 'AppStore' }  // Redirigir al hub para cualquier ruta desconocida (AppStore)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}