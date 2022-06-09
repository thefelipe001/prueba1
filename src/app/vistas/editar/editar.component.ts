import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteI } from 'src/app/modelos/paciente.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router,private api:ApiService) { }

  datosPacientes!:PacienteI;
  editarForm = new FormGroup({
  'Nombre':new FormControl('')
});
  ngOnInit(): void {
    let f="";

    let pacienteId=this.activerouter.snapshot.paramMap.get('id');
    let token=this.getToken();
    this.api.getSinglePactient(pacienteId).subscribe(data=>{
      this.datosPacientes=data;
      

  
this.editarForm??[0].forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
})

      this.editarForm.setValue({
        'Nombre':this.datosPacientes.Nombre??null

      });



      
    //    this.editarForm.setValue({
    //    'Nombre': this.datosPacientes.Nombre,
    //     'correo': this.datosPacientes.Correo,
    //     'dni': this.datosPacientes.DNI,
    //     'direccion': this.datosPacientes.Direccion,
    //    'codigoPostal': this.datosPacientes.CodigoPostal,
    //    'genero': this.datosPacientes.Genero,
    //    'telefono': this.datosPacientes.Telefono,
    //    'token': token,
    //    'pacienteId': pacienteId,
    //    'fechaNacimiento': this.datosPacientes.FechaNacimiento
    //  });

      //  console.log(this.editarForm.value);


    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
