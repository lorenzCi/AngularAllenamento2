import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onLogin() {
    console.log('Login attempt:', this.loginData);
    // Qui implementerai la logica di login
    if (this.loginData.email && this.loginData.password) {
      alert('Login effettuato con successo!');
      // Reset form
      this.loginData = { email: '', password: '' };
    } else {
      alert('Inserisci email e password');
    }
  }
}
