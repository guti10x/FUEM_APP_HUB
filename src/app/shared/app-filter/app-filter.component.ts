import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './app-filter.component.html',
  styleUrl: './app-filter.component.scss'
})
export class AppFilterComponent {
  // input app a buscar
  searchText: string = '';  

  // Emite el texto de búsqueda al componente padre
  @Output() search = new EventEmitter<string>(); 

  onSearch() {
    this.search.emit(this.searchText);  
  }
}
