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
  mostrarLoader(path: string) {
    this.showLoader = true;
    const interval = setInterval(() => {
      this.currentSlideIndex++;
      if (this.currentSlideIndex >= this.slides.length) {
        this.currentSlideIndex = 0;
        this.currentSlide = this.slides[this.currentSlideIndex];
        this.showLoader = false;
        setTimeout(() => {
          this.showLoader = false;
          this.navCtrl.navigateForward(path);
        }, 1000);
      } else {
        this.currentSlide = this.slides[this.currentSlideIndex];
      }
    }, 1000);
  }
  async presentLoading(path: string) {
    const loading = await this.loadingController.create({
      message: 'Validando Datos...',
      duration: 2000,
      cssClass: 'custom-loader',
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.navigateForward(path);
    }, 3000);
  }
}
