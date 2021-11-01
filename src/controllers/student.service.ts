/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { students } from "../db"; //Mock db
import { v4 as uuid } from "uuid"; //Paquete instalado para generar ids
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from "./dto/student.dto";

@Injectable()
export class StudentService {
  private students = students; //Privado para no poder llamarlo fuera de la clase porque no interesa llamar a ese metodo, si no al getStudents()
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentsById(studentId: string): FindStudentResponseDto {
    //Va si llaves porque solo devuelve un estudiante
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    //Creamos un objeto estudiante nuevo, le añadimos un id y le pasamos por payload lo que es el body de la peticion recibida.
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent); //Lo pusheamos a la base de datos mockeada
    return newStudent; // devolvemos el estudiante nuevo
  }

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updateStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((param) => {
      if (param.id === studentId) {
         updateStudent = {
          id: studentId,
          ...payload,
        };
        return updateStudent;
      } else return param;
    });
    this.students = updatedStudentList;

    return updateStudent;
  }
}
