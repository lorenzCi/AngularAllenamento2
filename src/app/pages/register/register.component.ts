import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onRegister() {
    console.log('Register attempt:', this.registerData);
    // Qui implementerai la logica di registrazione
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Le password non coincidono!');
      return;
    }
    
    if (this.registerData.name && this.registerData.email && this.registerData.password) {
      alert('Registrazione effettuata con successo!');
      // Reset form
      this.registerData = { name: '', email: '', password: '', confirmPassword: '' };
    } else {
      alert('Compila tutti i campi');
    }
  }
}
