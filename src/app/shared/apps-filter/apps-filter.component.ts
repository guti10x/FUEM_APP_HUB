import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './apps-filter.component.html',
  styleUrl: './app-filter.component.scss'
})
export class AppsFilterComponent {
  // Input introducido
  searchText: string = '';

  // Enviar el input de búsqueda al padre cada vez q se modifica el input
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  // Detecta cambios en el input y emite el nuevo valor
  onSearch() {
    this.search.emit(this.searchText);  
  }
}
