import { API_ENDPOINT } from '../../app/apiendpoint';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AcendeLampadaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommandsServiceProvider {

   constructor(public _http: Http) {
    
  }

  

    lerTemperatura(usuario:string){

      let headers=new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });
      let api = API_ENDPOINT.apiGetTemperatura+`?name=${usuario}`;
      
      return new Promise ((resolve,reject) =>{

              this._http.get(api,options).subscribe((result:any)=>{
                  
                  resolve(result.json());

              },
              (error)=>{
                  reject(error.json());
              });

      });

    }


  

}
