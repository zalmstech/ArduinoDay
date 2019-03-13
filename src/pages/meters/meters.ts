import { CommandsServiceProvider } from './../../providers/commands-service-provider/commands-service-provider';
import { Component } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MetersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-meters',
  templateUrl: 'meters.html',
})
export class MetersPage {
  public usuario:string='danielz';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _commandService:CommandsServiceProvider,
              public _alertCtrl:AlertController,public _http: Http) {
  }
  
  public leitura ={temperatura:0, umidade: 0};

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetersPage');
  }

  lerTemperatura(){

    
    let headers=new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    let api =`192.168.1.51:3333/arduinoday/pegarleituras?name=${this.usuario}`;
      
    

    this._http.get(api,options).toPromise().then((result:any)=>{
        debugger;
        this.leitura = result;

    }).catch( (error) =>{

      this._alertCtrl.create({
        title: 'Retorno',
        message: 'Erro ao obter medidas',
        buttons: [{ text: 'Ok'}]
      }).present();
      return;
      
    });
     
    
      

  }

}
