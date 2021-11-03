import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public signatureImage: string;

  constructor(public navCtrl: NavController,
              public modalController: ModalController,
              public navParams: NavParams) {
              this.signatureImage = navParams.get('signatureImage');

  }

  openSignatureModel() {
    
    setTimeout(() => {
      let modal = this.modalController.create(SignaturePage);
      modal.present();

    }, 200)  
   
  }

}
