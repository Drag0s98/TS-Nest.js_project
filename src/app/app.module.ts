import { Module } from "@nestjs/common";
import { StudentController } from "src/controllers/student.controllers"; //Importamos los controladores
import { TeachersControllers } from "src/controllers/teachers.controllers";
import { StudentService } from "../controllers/student.service";
import { TeacherService } from "src/controllers/teacher.service";

@Module({
  imports: [],
  controllers: [StudentController, TeachersControllers], //Añadimos aqui los controladores
  providers: [StudentService, TeacherService], //Aqui es como añadimos los provider los cuales realmente devuelven la informacion de la base de datos
})
export class AppModule {}
