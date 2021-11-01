/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { teachers, students } from "src/db";
import { FindStudentResponseDto, StudentResponseDto } from "./dto/student.dto";
import { FindTeacherResponseDto, UpdateTeacherDto } from "./dto/teacher.dto";

@Injectable()
export class TeacherService {
  private teachers = teachers;
  private students = students;
  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacher_Byid(teacherId: string): FindTeacherResponseDto {
    return teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }

  getTeacher_ById_students(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }
  putStudentBy_teacherId(
    teacherId: string,
    studentId: string
  ): StudentResponseDto {
    let updateStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((param) => {
      if (param.id === studentId) {
        updateStudent = {
          ...param,
          teacher: teacherId,
        };
      } else return param;
    });
    this.students = updatedStudentList;

    return updateStudent;
  }
}
