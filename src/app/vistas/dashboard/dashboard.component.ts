import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaPacienteI } from 'src/app/modelos/listapacientes.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pacientes:ListaPacienteI[]=[];
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {

    this.api.getAllPatients(1).subscribe(data =>{
     this.pacientes=data;
     window.localStorage.clear();
    })
  }

  editarPaciente(id:any){
   this.router.navigate(["editar",id]);
  }

  nuevoPaciente(){
    this.router.navigate(["nuevo"]);
  }

}
