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

  // Aplicaciones que coinciden con el input filtrado
  filteredApps = this.apps;

  // Método para actualizar las aplicaciones filtradas en función del texto de búsqueda
  onSearch(searchText: string) {

    const input = searchText.toLowerCase();
  
    this.filteredApps = this.apps.filter(app => {
      const normalizedTitle = app.title.toLowerCase();
      console.log('normalizedTitle:', normalizedTitle);

      // Comprobar si el título empieza con el texto de búsqueda
      return normalizedTitle.startsWith(input);
    });
  }
}
