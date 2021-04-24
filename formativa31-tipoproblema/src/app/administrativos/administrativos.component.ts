import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.component.html',
  styleUrls: ['./administrativos.component.css']
})
export class AdministrativosComponent implements OnInit {
  formulario1 = new FormGroup({
    rut: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.compose([Validators.required])),
    apellido: new FormControl('', Validators.compose([Validators.required])),
    edad: new FormControl('', Validators.compose([Validators.required])),
  });

  administrativos: Administrativo[] = []
  constructor() { }

  ngOnInit(): void {
    this.administrativos.push(new Administrativo('1234567-8', 'Juan', 'Perez', 25));
  }
  // tslint:disable-next-line: typedef
  agregar(){
    console.log("agregar")
    console.log(this.formulario1.value.rut)
    this.administrativos.push(new Administrativo(this.formulario1.value.rut, this.formulario1.value.nombre, this.formulario1.value.apellido, this.formulario1.value.edad));
    this.formulario1.controls['rut'].setValue("");
    this.formulario1.controls['nombre'].setValue("");
    this.formulario1.controls['apellido'].setValue("");
    this.formulario1.controls['edad'].setValue("");
  }
}
class Administrativo{
  constructor(public rut: string, public nombre: string, public apellido: string, public edad: number){}
}
