import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(public loaderService: LoaderService) {}

  ngOnInit() {}
}
