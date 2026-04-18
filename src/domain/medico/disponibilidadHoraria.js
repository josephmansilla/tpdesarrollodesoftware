import { z } from "zod"

export const disponibilidadHorariaSchema = z.object({
    diaSemana: z.enum(DiaSemanaEnumValores),
    horaDesde: z.string().min(2).max(10),
    horaHasta: z.string().min(2).max(10),
});

class DisponbilidadHoraria {
    constructor(diaSemana, horaDesde, horaHasta) {
        this.diaSemana = diaSemana;
        this.horaDesde = horaDesde;
        this.horaHasta = horaHasta;
    }
}