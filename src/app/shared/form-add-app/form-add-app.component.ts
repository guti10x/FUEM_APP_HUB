import { Component } from '@angular/core';

@Component({
  selector: 'form-add-app',
  templateUrl: './form-add-app.component.html',
  styleUrl: './form-add-app.component.scss'
})
export class FormAddAppComponent {

  isModalOpen = false;

  // Añadir la firma de índice para permitir el acceso dinámico a las propiedades
  formData: { [key: string]: string } = {
    name: '',
    description: '',
    department: '',
    userName: '',
    email: ''
  };

  // Definir los campos del formulario
  formFields = [
    { label: 'Tu nombre', name: 'userName', type: 'text' },
    { label: 'Tu Correo electrónico', name: 'email', type: 'email' },
    { label: 'Departamento al que perteneces', name: 'department', type: 'text' },
    { label: 'Nombre de la aplicación', name: 'name', type: 'text' },
  ];

  // Función para abrir el modal
  openModal(event: Event): void {
    event.preventDefault();
    this.isModalOpen = true;
  }

  // Función para cerrar el modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Función para enviar el formulario
  submitForm(): void {
    console.log(this.formData);
    this.closeModal();
  }
}