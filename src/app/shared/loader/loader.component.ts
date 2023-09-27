import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(public loaderService: LoaderService) {}

  // Llamar a esta función para mostrar el loader
  get slideCurrent() {
    return this.loaderService.currentSlide;
  }
  ngOnInit() {}
}
