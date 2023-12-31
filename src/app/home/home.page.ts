import { Component } from '@angular/core';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public loaderService: LoaderService) {}
}
