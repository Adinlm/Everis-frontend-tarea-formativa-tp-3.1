import { Component, OnInit } from '@angular/core';
import {Alumno} from './alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent  {
  alumnoArray: Alumno[] = [
    {id: 1, rut: '21549562-4', name: 'Anibal', lastname: 'Muñoz', edad: 13, curso: 'Octavo basico ', promedio: 4.3 },
    {id: 2, rut: '23479563-k', name: 'Carla', lastname: 'Vergara', edad: 15, curso: 'Segundo medio', promedio: 6.7 },
    {id: 1, rut: '19364582-4', name: 'Michelle', lastname: 'Ceron', edad: 11, curso: 'Sexto basico ', promedio: 7.0 },
    {id: 1, rut: '21593586-4', name: 'Marco', lastname: 'Calderon', edad: 15, curso: 'Segundo medio ', promedio: 3.3 },
  ];

  alumnoArrayrep: Alumno[] = [
    {id: 1, rut: '21593586-4', name: 'Marco', lastname: 'Calderon', edad: 15, curso: 'Segundo medio ', promedio: 3.3 },
  ];

  alumnoArrayapr: Alumno[] = [
    {id: 1, rut: '19364582-4', name: 'Michelle', lastname: 'Ceron', edad: 11, curso: 'Sexto basico ', promedio: 7.0 },

  ];
 /* Se le pasa un alumno en blanco al formulario.*/
  selectedAlumno: Alumno = new Alumno();

  abrirparaEditar(alumno: Alumno){
    /* Verifica que al seleccionar un elemento de la lista
    los campos del formulario sea iguales a ese elemento para editarlos*/
    this.selectedAlumno = alumno;
  }

  agregarEditar(){

    /* Si el id es igual a 0, significa que no hay nada seleccionado*/
    if(this.selectedAlumno.id === 0){
      /* Se le suma 1 elemento mas al arreglo de alumnos.*/
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      /* Se le agrega ese nuevo elemento al arreglo de alumnos.*/
      this.alumnoArray.push(this.selectedAlumno);
      if(this.selectedAlumno.promedio < 4){
        this.selectedAlumno.id = this.alumnoArrayrep.length + 1;
        this.alumnoArrayrep.push(this.selectedAlumno);
      }else{
        this.selectedAlumno.id = this.alumnoArrayapr.length + 1;
        this.alumnoArrayapr.push(this.selectedAlumno);
      }
    }
    /* Se deja en blanco el formulario una vez agregados los datos.*/
    this.selectedAlumno = new Alumno();
  }

  borrar(){
    if(confirm('¿Estas seguro de querer eliminarlo?')){
      this.alumnoArray = this.alumnoArray.filter( x => x != this.selectedAlumno);
      this.selectedAlumno = new Alumno();
    }


  }

}