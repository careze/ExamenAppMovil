import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  verAsignatura() {
    // Navegar a la página de asignatura
    this.navCtrl.navigateForward('/asignatura');
  }

}
