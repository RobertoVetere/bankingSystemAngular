import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-account-holder',
  templateUrl: './create-account-holder.component.html',
  styleUrls: ['./create-account-holder.component.css']
})
export class CreateAccountHolderComponent {
  name: string = '';
  userName: string = '';
  password: string = '';
  dateOfBirth: string = '';
  mailingAddressStreet: string = '';
  mailingAddressPostalCode: string = '';
  mailingAddressCity: string = '';
  mailingAddressCountry: string = '';
  sameAddress: boolean = false;
  isFormValid: boolean;
  holderCreated: boolean;
  primaryAddressStreet: string = '';
  primaryAddressPostalCode: string = '';
  primaryAddressCity: string = '';
  primaryAddressCountry: string = '';

  constructor(private http: HttpClient, private datePipe: DatePipe) { 
    this.isFormValid = true;
    this.holderCreated = false;
  }

  createAccountHolder() {
    if (this.name && this.userName && this.dateOfBirth) {
      let formattedDateOfBirth = this.datePipe.transform(this.dateOfBirth, 'yyyy-MM-dd');
      let accountHolderData = {
        name: this.name,
        userName: this.userName,
        dateOfBirth: formattedDateOfBirth,
        mailingAddress: {
          address: this.mailingAddressStreet,
          postalCode: parseInt(this.mailingAddressPostalCode),
          city: this.mailingAddressCity,
          country: this.mailingAddressCountry
        },
        primaryAddress: this.sameAddress ? {
          address: this.mailingAddressStreet,
          postalCode: parseInt(this.mailingAddressPostalCode),
          city: this.mailingAddressCity,
          country: this.mailingAddressCountry
        } : {
          address: this.primaryAddressStreet,
          postalCode: parseInt(this.primaryAddressPostalCode),
          city: this.primaryAddressCity,
          country: this.primaryAddressCountry
        }
      };

      this.http.post('http://localhost:8080/admin/create-account-holder', accountHolderData).subscribe(
        (response) => {
          console.log('Titular de cuenta creado exitosamente:', response);
          this.holderCreated = true;
          this.name = '';
          this.userName = '';
          this.dateOfBirth = '';
          this.mailingAddressStreet = '';
          this.mailingAddressPostalCode = '';
          this.mailingAddressCity = '';
          this.mailingAddressCountry = '';
          this.primaryAddressStreet = '';
          this.primaryAddressPostalCode = '';
          this.primaryAddressCity = '';
          this.primaryAddressCountry = '';
          this.isFormValid = true;
        },
        (error) => {
          console.log('Error al crear el titular de cuenta:', error);
          // Aquí puedes manejar los errores de creación del titular de cuenta, como mostrar un mensaje de error al usuario.
        }
      );
    } else {
      this.isFormValid = false;
      return; // Detener el envío del formulario
    }
  }
}