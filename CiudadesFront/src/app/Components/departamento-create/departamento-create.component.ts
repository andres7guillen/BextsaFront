import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/Services/departamentos.service';
import { Router } from '@angular/router';
import { DepartamentoModel } from 'src/app/Models/Departamento.Model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styles: []
})
export class DepartamentoCreateComponent implements OnInit {
  depto:DepartamentoModel = new DepartamentoModel();

  constructor(private service:DepartamentosService, private router:Router) { }

  ngOnInit() {
  }

  guardar(f:NgForm){
    Swal.fire({
      title:'Cargando',
      text: 'Guardando información',
      allowOutsideClick: false
    });

    Swal.showLoading();
    if(f.valid){
      this.service.crear(this.depto).subscribe((data) => {
        if(data !== undefined){
          Swal.close();
          this.router.navigateByUrl('departamentoListar');
        }
      },(error)=>{        
        Swal.close();
        Swal.fire({
          title:'Error',
          text: error.message,
          // type: 'info',
          allowOutsideClick: false
        });
      })
    }
   }

}
