import { z } from "zod";
export const practicaSchema = z.object({
    codigo: z.string().min(3).max(10),
    nombre: z.string().min(3).max(50),
    duracionTurnoEnMinutos: z.int().nonnegative(),
    costo: z.number().nonnegative(),
});

class Practica {
    constructor(codigo, nombre, duracionTurnoEnMinutos, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.duracionTurnoEnMinutos = duracionTurnoEnMinutos;
        this.costo = costo;
    }
}