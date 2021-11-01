/* eslint-disable prettier/prettier */
import { Controller, Get, Put, Param } from "@nestjs/common";
import {
  TeacherResponseDto,
  CreateTeacherDto,
  UpdateTeacherDto,
  FindTeacherResponseDto,
} from "./dto/teacher.dto";
import { FindStudentResponseDto, StudentResponseDto } from "./dto/student.dto";
import { TeacherService } from "./teacher.service";

@Controller("teachers")
export class TeachersControllers {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }
  @Get("/:teacherId")
  getTeacher_ById(
    @Param("teacherId") teacherId: string
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacher_Byid(teacherId);
  }
  @Get("/:teacherId/students")
  getTeacher_ById_students(
    @Param("teacherId") teacherId: string
  ): FindStudentResponseDto[] {
    return this.teacherService.getTeacher_ById_students(teacherId);
  }
  @Put("/:teacherId/students/:studentId")
  putStudentBy_teacherId(
    @Param("teacherId") teacherId: string,
    @Param("studentId") studentId: string
  ): StudentResponseDto {
    return this.teacherService.putStudentBy_teacherId(teacherId, studentId);
  }
}
