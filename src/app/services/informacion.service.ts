import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Informacion } from '../Informacion';

@Injectable({
  providedIn: 'root'
})

export class InformacionService {
 
  URL_API='../assets/info.json';

  informacion:Informacion[]=[];

  selectedInformacion={regulacion_id:'',regulacion:'',url:'',descripcion:'',tipo:'', institucion_emisora:'', registro_oficial_numero:'', registro_oficial_fecha:'',suscripcion:'',archivo:'',modificado:''}

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando...')
  }

  obtenerDatos() {
    return this.httpclient.get<Informacion[]>(this.URL_API);
  }
}
