import { Component } from '@angular/core';

@Component({
  selector: 'form-add-app',
  templateUrl: './form-add-app.component.html',
  styleUrl: './form-add-app.component.scss'
})
export class FormAddAppComponent {

  isModalOpen = false;

  // Form variables inputs
  formData: { [key: string]: string } = {
    name: '',
    description: '',
    department: '',
    userName: '',
    email: ''
  };

  // Campos del formulario
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
    
    const { name, description, department, userName, email } = this.formData;
  
    // Comprobar si todos los campos están inicializados (no vacíos)
    if (!name || !description || !department || !userName || !email) {
      alert('Por favor, rellena todos los campos.');
      return;
    }
  
    // Validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@formulauem\.es$/;
    if (!emailRegex.test(email)) {
      alert('El correo electrónico debe tener el formato correcto y ser de dominio @formulauem.es.');
      return;
    }
  
    // Crear el asunto y el cuerpo del correo
    const subject = 'Sugerencia de nueva aplicación';
    const body = `
      Nombre de la aplicación: ${name}\n
      Descripción: ${description}\n
      Departamento: ${department}\n
      Nombre: ${userName}\n
      Correo electrónico: ${email}
    `;
  
    // Crear el enlace mailto con los datos del formulario
    const mailtoLink = `mailto:daniel.gutierrez@formulauem.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Abrir el cliente de correo con los campos predefinidos
    window.location.href = mailtoLink;
  
    // Cerrar el modal después de enviar el formulario
    this.closeModal();
  }  
  
}