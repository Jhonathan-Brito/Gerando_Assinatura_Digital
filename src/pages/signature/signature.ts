import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavParams, NavController  } from 'ionic-angular'

import { SignaturePad } from 'angular2-signaturepad';





@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;


  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
  }

  public signatureImage: string
  public signaturePadOptions: Object = {
    'minWidth' : 1,
    'canvasWidth' : 340,
    'canvasHeigth' : 200,
  };

  canvasResize() {
    let canvas = document.querySelector('canvas');    
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeigth', canvas.offsetHeight);
  }

  ngAfterViewInit() {
    console.log("aberto!");
    this.signaturePad.clear();
    // this.canvasResize();
  }

  drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    console.log(this.signatureImage);
    this.navCtrl.push(HomePage, {signatureImage: this.signatureImage});
  };

  drawClear() {
    this.signaturePad.clear();
  }
 
  drawCancel() {
    this.navCtrl.push(HomePage, {signatureImage: ''});
  }

}
