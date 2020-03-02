import { Component, OnInit } from '@angular/core';
import { DepartamentoModel } from 'src/app/Models/Departamento.Model';
import { DepartamentosService } from 'src/app/Services/departamentos.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styles: []
})
export class DepartamentoListComponent implements OnInit {
  departamentos: DepartamentoModel[];

  constructor(private service:DepartamentosService,
              private router:Router) { }

  ngOnInit() {
    this.obtenerTodos();
  }

  borrarDepartamento(depto:DepartamentoModel){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + depto.Nombre + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.service.eliminar(depto.Id).subscribe(data => {
          if(data != undefined){
            this.service.obtenerTodos().subscribe(datad => {
              if(data !== undefined){
                this.departamentos = datad;                
              }
            });
            Swal.fire({
              title: 'Correcto',
              text: 'Departamento:  ' + depto.Nombre + ' borrado correctamente',
              allowOutsideClick: false
            });
            this.router.navigateByUrl('departamentoListar');
          }
        })
      }
    })


    
  }

  obtenerTodos(){
    this.service.obtenerTodos().subscribe((data)=>{
      if(data !== null){
        this.departamentos = data;
      }
    },(error)=> {
      Swal.fire({
        title:'Error',
        text: error.message,
        allowOutsideClick: false
      })
    })
  }

}
