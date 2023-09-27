import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(
    public loadingController: LoadingController,
    private navCtrl: NavController
  ) {}
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje que se mostrará en el loader
      duration: 2000,
      cssClass: 'custom-loader',
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss(); // Cierra el componente loader.
      this.navCtrl.navigateForward('/contact'); // Redirige a la otra vista.
    }, 3000);
  }

  // Llamar a esta función para mostrar el loader
  mostrarLoader() {
    this.presentLoading();
  }
  ngOnInit() {}
}
