/* eslint-disable prettier/prettier */
//Data Transfer Object (DTO)
export class FindTeacherResponseDto {
  id: string;
  name: string;
}

export class TeacherResponseDto {
  id: string;
  name: string;
  student: string;
}

export class CreateTeacherDto {
  name: string;
  student: string;
}

export class UpdateTeacherDto {
  name: string;
  student: string;
}
