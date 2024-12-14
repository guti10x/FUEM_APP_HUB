import { Component } from '@angular/core';

@Component({
  selector: 'app-hub-page',
  templateUrl: './hub-page.component.html',
  styleUrl: './hub-page.component.scss'
})
export class HubPageComponent {
  apps = [
    { image: '../../../assets/csv_data_plotter_app_icon.png', title: 'CSV data plotter app', description: 'Aplicación para analizar, visualizar y exportar los datos almacenados en la SD de Nexus' },
    { image: 'path_to_image_2.jpg', title: 'App 2', description: 'Descripción de la app 2' },
  ];
}
