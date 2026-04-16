import { z } from "zod"

export const especialidadSchema = z.object({
    nombre: z.string().min(3).max(40),
    duracionTurnoEnMinutos: z.int().nonnegative(),
    costoConsulta: z.number().nonnegative(),
});

class Especialidad {
    constructor(nombre, duracionTurnoEnMinutos, costoConsulta) {
        this.nombre = nombre;
        this.duracionTurnoEnMinutos = duracionTurnoEnMinutos;
        this.costoConsulta = costoConsulta;
    }
}