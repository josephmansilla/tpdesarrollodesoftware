import { z } from "zod"
import { especialidadSchema } from "./especialidad.js"
import { practicaSchema } from "./practica.js"
import { sedeSchema } from "./sede.js"
import { disponibilidadHorariaSchema } from "./disponibilidadHoraria.js"

export const medicoSchema = z.object({
    //usuario: usuarioSchema,
    matricula: z.string().min(5).max(20),
    nombre: z.string().min(3).max(50),
    especialidades: z.array(especialidadSchema),
    practicas: z.array(practicaSchema),
    sedes: z.array(sedeSchema),
    disponibilidades: z.array(disponibilidadHorariaSchema),
});



export class Medico {
    constructor(matricula, nombre, especialidades, practicas, sedes, disponibilidades) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.especialidades = especialidades;
        this.practicas = practicas;
        this.sedes = sedes;
        this.disponibilidades = disponibilidades;
    }


}