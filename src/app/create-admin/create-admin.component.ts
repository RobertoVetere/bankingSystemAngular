import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  name: string = '';
  userName: string = '';
  password: string = '';
  isFormValid: boolean = true;
  adminCreated: boolean = false;

  constructor(private http: HttpClient) { 
    this.isFormValid = true;
    this.adminCreated = false;
  }

  createAdmin() {
    if (this.name && this.userName && this.password) {
      const adminData = {
        name: this.name,
        userName: this.userName,
        password: this.password
      };
    
      this.http.post('http://localhost:8080/bank/create-admin', adminData).subscribe(
        (response) => {
          console.log('Administrador creado exitosamente:', response);
          this.adminCreated = true;
          this.name = '';
          this.userName = '';
          this.password = '';        
          this.isFormValid = true;
        },
        (error) => {
          console.log('Error al crear el administrador:', error);
          // Aquí puedes manejar los errores de creación del administrador, como mostrar un mensaje de error al usuario.
        }
      );
    } else {
      this.isFormValid = false;
      return; // Detener el envío del formulario
    }
  }
}