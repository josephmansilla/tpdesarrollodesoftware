import { z } from "zod"

export const sedeSchema = z.object({
    nombre: z.string().min(3).max(20),
    direccion: z.string().min(6).max(150),
})

class Sede {
    constructor (nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}