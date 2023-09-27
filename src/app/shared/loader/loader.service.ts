import { Injectable } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  showLoader = false;
  slides = [
    { image: '../../../assets/icon/favicon.png', text: 'Validando Datos' },
    { image: '../../../assets/icon/loading.jpeg', text: 'Validando Datos..' },
    { image: '../../../assets/icon/loading.png', text: 'Validando Datos...' },
  ];

  currentSlideIndex = 0;
  currentSlide = this.slides[this.currentSlideIndex];
  constructor(
    public loadingController: LoadingController,
    private navCtrl: NavController
  ) {}
  mostrarLoader() {
    this.currentSlide = this.slides[0];
    this.showLoader = true;
    const interval = setInterval(() => {
      this.currentSlideIndex++;
      if (this.currentSlideIndex >= this.slides.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.showLoader = false;
          this.navCtrl.navigateForward('/contact'); // Redirige a la otra vista.
        }, 1000);
      } else {
        this.currentSlide = this.slides[this.currentSlideIndex];
      }
    }, 1500);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Validando Datos...', // Mensaje que se mostrará en el loader
      duration: 2000,
      cssClass: 'custom-loader',
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss(); // Cierra el componente loader.
      this.navCtrl.navigateForward('/contact'); // Redirige a la otra vista.
    }, 3000);
  }
}
