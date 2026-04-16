import { z } from "zod";
import { EstadoTurnoEnumValores } from "./enum/enum.js";
import { sedeSchema } from "../medico/sede.js";
import { practicaSchema } from "../medico/practica.js";

export const turnoSchema = z.object({
    medico: medicoSchema,
    //paciente: pacienteSchema,
    fechaHora: z.date(),
    sede: sedeSchema,
    practica: practicaSchema,
    estado: z.enum(EstadoTurnoEnumValores),
    historialEstado: z.array(z.enum(EstadoTurnoEnumValores)),
    costo: z.number().nonnegative(),
});

class Turno {
    constructor(medico, paciente, fechaHora, sede, practica,
                estado, historialEstados, costo) {
        this.medico = medico;
        this.paciente = paciente;
        this.fechaHora = fechaHora;
        this.sede = sede;
        this.practica = practica;
        this.estado = estado;
        this.historialEstados = historialEstados;
        this.costo = costo;
    }
}