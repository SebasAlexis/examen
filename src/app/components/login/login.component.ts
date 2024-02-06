import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  registerUser() {
    const userData = this.registerForm.value;

    // Llama al servicio para enviar la solicitud de registro al backend
    this.userService.addUser(userData).subscribe(
      response => {
        console.log(response.message); // Mensaje de éxito del backend
      },
      error => {
        console.error('Error al registrar usuario', error);
        // Maneja el error de registro
      }
    );
  }
}
