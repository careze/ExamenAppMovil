import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario:string = "";
  contrasena:string = "";

  constructor(private router:Router) { }

ngOnInit() {


}
/* Resetea los valores escritos */
onReset() {
  this.usuario = '';
  this.contrasena = '';
}

/* Conecta los valores para ingresar */
 onLogin(){  
      if (this.usuario == "") {
        alert("Debe ingresar un usuario");
        return;
      }
      if (this.contrasena == "") {
        alert("Debe ingresar una contraseña");
        return;
      }
      /* Cambiar a sigla de la asignatura :PGY4121-001D */
      if (this.usuario == "PGY4121-001D" && this.contrasena == "PGY4121-001D") {
        
        this.router.navigateByUrl('/menu');
      }else{
        alert("Usuario o contraseña incorrecta.")
      }   
    }

/* Boton animado */
animateButton() {
  const button = document.getElementById('animatable-button');   
    if (button) {
        button.classList.add('clicked');
        setTimeout(() => {
        button.classList.remove('clicked');
      }, 300); 
    }
  }
  
  
  
} 