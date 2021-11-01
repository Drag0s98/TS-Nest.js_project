/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller("students") // Indicamos que es un controlador y especificamos la ruta padre entre los parentesis, /students
export class StudentController {

  //Creamos un constructor privado que tenga el provider para poder utilizarlo en el controlador
  constructor(private readonly studentService: StudentService) {}

  @Get() //Indicamos el tipo de peticion la cual es esta clase
  getStudents(): FindStudentResponseDto[]{
    return this.studentService.getStudents(); // Retornamos los datos del provider utilizando el constructor
  }
  @Get("/:studentId") //si queremos añadir un path se añade al especificar la peticion ..../students/hola123
  getStudentById(
    // @Param() params: {studentId: string} //Esto seria el req.params.studentId de express hacemos destructuring y decimos que lo que cogemos es de tipo string
    @Param("studentId") studentId: string //Manera mas simplificada
  ) : FindStudentResponseDto{ //Va sin llaves porque es solo un estudiante
    return this.studentService.getStudentsById(studentId); //Llamamos al provider y le pasamos el id para que haga el .find()
  }
  @Post()
  createStudent(
    @Body() body: CreateStudentDto //Esto seria el req.body
  ): FindStudentResponseDto {
    return this.studentService.createStudent(body); //Le pasamos el body al provider para crear el estudiante nuevo
  }
  @Put("/:studentId")
  updateStudent(
    @Param("studentId") studentId: string, //Primero cogemos el id, el cual podriamos verificar
    @Body() body: UpdateStudentDto // Posteriormente la informacion del body para introducirla
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId); //Le pasamos el body y el id al provider para hacer el update
  }
}
