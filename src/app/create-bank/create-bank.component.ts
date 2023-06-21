import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {
  bankName: string = '';
  userName: string = '';
  password: string = '';
  isFormValid: boolean;
  bankCreated: boolean;

  constructor(private http: HttpClient) { 
    this.isFormValid = true;
    this.bankCreated = false;
  }

  createBank() {
    if (this.bankName && this.userName && this.password) {
      const bankData = {
        name: this.bankName,
        userName: this.userName,
        password: this.password
      };
    
      this.http.post('http://localhost:8080/bank/create-bank', bankData).subscribe(
        (response) => {
          console.log('Banco creado exitosamente:', response);
          this.bankCreated = true;
          this.bankName = '';
          this.userName = '';
          this.password = '';        
          this.isFormValid = true;
        },
        (error) => {
          console.log('Error al crear el banco:', error);
          // Aquí puedes manejar los errores de creación del banco, como mostrar un mensaje de error al usuario.
        }
      );
    } else {
      this.isFormValid = false;
      return; // Detener el envío del formulario
    }
  }


}