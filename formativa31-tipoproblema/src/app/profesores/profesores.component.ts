import { Component, OnInit } from '@angular/core';
import {Profesor} from './profesor';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent  {
  profesorArray: Profesor[] = [
    {id: 1, rut: '18558369-4', name: 'Gerardo', lastname: 'Contreras', edad: 28, especialidad: 'Matematicas', sueldo: 600000 },
    {id: 2, rut: '11441610-k', name: 'Maria', lastname: 'Donoso', edad: 45, especialidad: 'Fisica', sueldo: 500000 },
    {id: 3, rut: '19053633-5', name: 'Carlos', lastname: 'Muñoz', edad: 31, especialidad: 'Lenguaje', sueldo: 700000 },
  ];
 /* Se le pasa un profesor en blanco al formulario.*/
  selectedProfesor: Profesor = new Profesor();

  abrirparaEditar(profesor: Profesor){
    /* Verifica que al seleccionar un elemento de la lista
    los campos del formulario sea iguales a ese elemento para editarlos*/
    this.selectedProfesor = profesor;
  }

  agregarEditar(){

    /* Si el empleado es igual a 0, significa que no hay nada seleccionado*/
    if(this.selectedProfesor.id === 0){
      /* Se le suma 1 elemento mas al arreglo de profes.*/
      this.selectedProfesor.id = this.profesorArray.length + 1;
      /* Se le agrega ese nuevo elemento al arreglo de profes.*/
      this.profesorArray.push(this.selectedProfesor);
    }
    /* Se deja en blanco el formulario una vez agregados los datos.*/
    this.selectedProfesor = new Profesor();
  }

  borrar(){
    if(confirm('¿Estas seguro de querer eliminarlo?')){
      this.profesorArray = this.profesorArray.filter( x => x != this.selectedProfesor);
      this.selectedProfesor = new Profesor();
    }


  }

}
