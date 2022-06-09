import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from 'src/app/modelos/login.Interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import {ListaPacienteI} from 'src/app/modelos/listapacientes.interface';
import { PacienteI } from 'src/app/modelos/paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="https://api.solodata.es/";

  constructor(private httpClient:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direcccion=this.url+"auth";
    return this.httpClient.post<ResponseI>(direcccion,form);

  }

  getAllPatients(page:number):Observable<ListaPacienteI[]>
  {
   let direcccion =this.url+"pacientes?page=" + page;
    return this.httpClient.get<ListaPacienteI[]>(direcccion);
  }

  getSinglePactient(id:any):Observable<PacienteI>{
    let direcccion=this.url+"pacientes?id="+id;
    return this.httpClient.get<PacienteI>(direcccion);
  }
  
}
