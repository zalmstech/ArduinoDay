import { CommandsServiceProvider } from './../../providers/commands-service-provider/commands-service-provider';
import { Component } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  public usuario:string='danielz';
  public led1IsOn:boolean=false;
  public led2IsOn:boolean=false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _commandService:CommandsServiceProvider,public _alertCtrl:AlertController,
              public _http: Http) {
  }

  //Método para ligar e desligar as lampadas através de requisição HTTP
  ligarLed(){
      
      //Seta as configurações de retorno no header como Json
      let headers=new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      //Rota da API em node
      let api = 'http://192.168.1.51:3333/arduinoday/ligarled';
      
      //Criação do obj Json que será enviado no body
      let body = JSON.stringify({name:this.usuario,led1IsOn:this.led1IsOn,led2IsOn: this.led2IsOn});
      debugger
      
      //Requisição Http Para a API
      this._http.post(api,body,options).toPromise().then((result:any)=>{
          
          console.log(result)

      }).catch((error)=>{

        this._alertCtrl.create({
          title: 'Retorno',
          message: 'Erro no envio do comando',
          buttons: [{ text: 'Ok'}]
        }).present();
        return;
        
      });
                  

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}
