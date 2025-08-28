import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-index',
  imports: [CommonModule, LoginComponent, RegisterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  isLogin = true;

  toggleForm() {
    this.isLogin = !this.isLogin;
  }
}
