import { Component, OnInit, ViewChild } from '@angular/core';
import { IonPopover, PopoverController } from '@ionic/angular';
import { CatFactService } from '../services/cat-fact-service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('catPopover', { static: true }) popover!: IonPopover;
  constructor(private popoverController: PopoverController,
     private catFactService: CatFactService,
     private router: Router
    ) {}

  message!:string;

  getRandomFact() {
    this.catFactService.getRandomCatFact(environment.URLBASE + "facts/random").subscribe((data: any) => {
      this.message = data.text;
    });
  }

  
  confirmTranslation() {
    this.router.navigate(['/hechos']);
  }

  // Mostrar el popover
  async showPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: 'ion-popover',
      event: ev,
      translucent: true,
      cssClass: 'custom-popover',
    });
    await popover.present();
  }

ngOnInit() {
  this.getRandomFact();
  setTimeout(() => {
    const popover = document.querySelector('ion-popover');
    if (popover) {
      popover.present();
    }
  }, 5000);
  }
}