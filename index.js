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

app.get("/healthCheck", (req, res) => {
    res.status(200).json({mensaje:"Todo marcha bien!"})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get(`${PATH_MEDICAL_V1}/disponibilidadMedico`, medicoController.verDisponibilidad);
app.post(`${PATH_MEDICAL_V1}/medico`, medicoController.crearMedico);
app.put(`${PATH_MEDICAL_V1}/medico`, medicoController.modificarMedico);
app.delete(`${PATH_MEDICAL_V1}/medico`, medicoController.eliminarMedico);

app.post(`${PATH_MEDICAL_V1}/sede`, sedeController.crearSede);
app.put(`${PATH_MEDICAL_V1}/sede`, sedeController.modificarSede);
app.delete(`${PATH_MEDICAL_V1}/sede`, sedeController.eliminarSede);

app.post(`${PATH_MEDICAL_V1}/practica`, practicaController.crearPractica);
app.put(`${PATH_MEDICAL_V1}/practica`, practicaController.modificarPractica);
app.delete(`${PATH_MEDICAL_V1}/practica`, practicaController.eliminarPractica);

app.post(`${PATH_MEDICAL_V1}/especialidad`, especialidadController.crearEspecialidad);
app.put(`${PATH_MEDICAL_V1}/especialidad`, especialidadController.modificarEspecialidad);
app.delete(`${PATH_MEDICAL_V1}/especialidad`, especialidadController.eliminarEspecialidad);


app.post(`${PATH_MEDICAL_V1}/disponibilidad`, disponibilidadController.crearDisponibilidad);
app.delete(`${PATH_MEDICAL_V1}/bajaDisponibilidad`, disponibilidadController.bajaDisponibilidad);
// TODO: Sería un delete, pero si no queremos borrar de una la disponbilidad horaria, sino marcar
// TODO: como aBorrar y luego borrar con algo interno de nuestro back. Podría ser un patch para ese caso

app.post(`${PATH_MEDICAL_V1}/turno`, turnoController.crearTurno);
app.delete(`${PATH_MEDICAL_V1}/turno`, turnoController.bajaTurno);
