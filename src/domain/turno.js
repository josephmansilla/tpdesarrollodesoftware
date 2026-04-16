import { z } from "zod";
import { invalidTurno } from "../exceptions/exceptions";
import { EstadoTurno } from "./enum.js";

export const turnoSchema = z.object({
    medico: medicoSchema,
    paciente: pacienteSchema,
    fechaHora: z.date(),
    sede: sedeSchema,
    practica: practicaSchema,
    estado: z.enum([""]),
    historialEstado: z.enum([""]),
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
        this.costo = estado;
    }
}