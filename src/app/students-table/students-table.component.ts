import { Component } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent {

    students = [
        {nombre:"Pedro",apellido:"Garcia", fechaNacimiento:new Date(1994,2,15), estado:"activo",nota:9},
        {nombre:"Juan",apellido:"Rodriguez", fechaNacimiento:new Date(1990,4,16), estado:"activo",nota:6},
        {nombre:"Ivana",apellido:"Paez", fechaNacimiento:new Date(1992,5,21), estado:"activo",nota:3},
        {nombre:"Luis",apellido:"Machado", fechaNacimiento:new Date(1990,4,16), estado:"baja",nota:2},
        {nombre:"Roxana",apellido:"Santucho", fechaNacimiento:new Date(1993,8,25), estado:"activo",nota:8},
        {nombre:"Juan",apellido:"Zapata", fechaNacimiento:new Date(1990,5,2), estado:"baja",nota:5},
        {nombre:"Sabrina",apellido:"Lopez", fechaNacimiento:new Date(1992,8,26), estado:"activo",nota:5},
    ];

    getCondicion(nota:number):string{
        if (nota>=7){
          return "Promocionado";
        }else if (nota<7 && nota>4){
          return "Regular";
        }else{
          return "Libre";
        }
    }
}

