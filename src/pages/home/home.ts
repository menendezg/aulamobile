import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationsPage } from '../../pages/notifications/notifications';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm = this.fb.group(
    {
      email:    ["",Validators.required],
      password: ["",Validators.required]
    }
  );

  constructor(public fb: FormBuilder, 
              navCtrl: NavController, 
              private nav: NavController,
              private toastCtrl: ToastController ){

        
              }

  // Functions 

  homeToast(){
  /*
      
    homeToast - Toast para el componente Home.
    
  */
    let toast = this.toastCtrl.create({
      message : 'El usuario ingresado no existe',
      duration: 3000,
      position:'bottom'
    });   
    toast.onDidDismiss(() => {
    console.log('Dismissed toast');
    });
      
    toast.present();
      
    }

  login(){
  
    /* function login v 0.0.1.210817

    Esta funcion puede ser binded a Un boton submit, al principio del form. 
    La funcion toma los distintos objetos del formulario
    y los guarda en el objeto json declarado en la clase.   
  
    */  
    console.log(event);
    console.log(this.loginForm.value);
    
    // logica hard coded 
  
      if (this.loginForm.value.email == "menendez.gabriel@gmail.com" &&
          this.loginForm.value.password == "123456") {
            
            /*
              Segun ionic. 
              el root Page es el que puede llamar al side menu. 
              el resto, no. 

              entonces trabaja de la siguiente manera. 
              Cuando es un hijo, de la pagina en la q estoy 
              uso el metodo push

              cuando va ser un nuevo padre.. como en el caso de login 
              donde la pagina a la que me deriva es padre del resto. 
              tengo que decirle al framework que esta nueva pagina 
              es root. 

               se hace con el metodo setRoot del objeto nav. 
            */



          //this.nav.push(NotificationsPage);   
          this.nav.setRoot(NotificationsPage);  
      } else {
          this.homeToast();
      }
      
  }




}
