import { Component } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent {

    students = [
        {nombre:"Pedro",apellido:"Garcia", fechaNacimiento:new Date(1994,2,15), estado:"activo",condicion:"promocionado"},
        {nombre:"Juan",apellido:"Rodriguez", fechaNacimiento:new Date(1990,4,16), estado:"activo",condicion:"regular"},
        {nombre:"Ivana",apellido:"Paez", fechaNacimiento:new Date(1992,5,21), estado:"activo",condicion:"libre"},
        {nombre:"Luis",apellido:"Machado", fechaNacimiento:new Date(1990,4,16), estado:"baja",condicion:"libre"},
        {nombre:"Roxana",apellido:"Santucho", fechaNacimiento:new Date(1993,8,25), estado:"activo",condicion:"promocionado"},
        {nombre:"Juan",apellido:"Zapata", fechaNacimiento:new Date(1990,5,2), estado:"baja",condicion:"regular"},
        {nombre:"Sabrina",apellido:"Lopez", fechaNacimiento:new Date(1992,8,26), estado:"activo",condicion:"regular"},
    ];
}

