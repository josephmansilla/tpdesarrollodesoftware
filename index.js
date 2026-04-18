import bodyParser from "body-parser";
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { readFileSync } from 'fs'
import { parse } from 'yaml'
import { z } from "zod";

const app = express();
const port = 20000;
const spec = parse(readFileSync("./docs.yaml", "utf-8"));
const PATH_MEDICAL_V1 = "/v1/sweet_medical";

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));


const PATH_DISPONIBILIDAD = PATH_MEDICAL_V1 + "disponibilidadMedico";
const PATH_MEDICO = PATH_MEDICAL_V1 + "medico";
const PATH_SEDE = PATH_MEDICAL_V1 + "sede";
const PATH_PRACTICA = PATH_MEDICAL_V1 + "practica";
const PATH_ESPECIALIDAD = PATH_MEDICAL_V1 + "especialidad";
const PATH_TURNO = PATH_MEDICAL_V1 + "turno";

// TODO: query params: ?medico/1+?sede/medrano+?obraSocial/up

app.get(PATH_DISPONIBILIDAD, medicoController.verDisponibilidades);
app.get(PATH_DISPONIBILIDAD + "/:id", medicoController.verDisponibilidad);

app.post(PATH_MEDICO, medicoController.crearMedico);
app.put(PATH_MEDICO + "/:id", medicoController.modificarMedico);
app.delete(PATH_MEDICO + "/:id", medicoController.eliminarMedico);

app.post(PATH_SEDE, sedeController.crearSede);
app.put(PATH_SEDE + "/:id", sedeController.modificarSede);
app.delete(PATH_SEDE + "/:id", sedeController.eliminarSede);

app.post(PATH_PRACTICA, practicaController.crearPractica);
app.put(PATH_PRACTICA + "/:id", practicaController.modificarPractica);
app.delete(PATH_PRACTICA + "/:id", practicaController.eliminarPractica);

app.post(PATH_ESPECIALIDAD, especialidadController.crearEspecialidad);
app.put(PATH_ESPECIALIDAD + "/:id", especialidadController.modificarEspecialidad);
app.delete(PATH_ESPECIALIDAD + "/:id", especialidadController.eliminarEspecialidad);


app.post(`${PATH_MEDICAL_V1}/disponibilidad`, disponibilidadController.crearDisponibilidad);
app.delete(`${PATH_MEDICAL_V1}/bajaDisponibilidad`, disponibilidadController.bajaDisponibilidad);
// TODO: Sería un delete, pero si no queremos borrar de una la disponbilidad horaria, sino marcar
// TODO: como aBorrar y luego borrar con algo interno de nuestro back. Podría ser un patch para ese caso

app.post(PATH_TURNO, turnoController.crearTurno);
app.delete(PATH_TURNO + "/:id", turnoController.bajaTurno);
