import {values} from "lodash-es";

export class EstadoTurno {
    nombre;
    orden;

    static fromString(token) {
        return values(EstadoTurno).find(est => est.nombre === token);
    }

    constructor(estado, orden) {
        this.estado = estado;
        this.orden = orden;
    }
}

EstadoTurno.DISPONIBLE = new EstadoTurno("DISPONIBLE", 0);
EstadoTurno.RESERVADO = new EstadoTurno("RESERVADO", 1);
EstadoTurno.CONFIRMADO = new EstadoTurno("CONFIRMADO", 2);
EstadoTurno.CANCELADO = new EstadoTurno("CANCELADO", 3);
EstadoTurno.REALIZADO = new EstadoTurno("REALIZADO", 4);

export class NivelCobertura {
    nombre;
    orden;

    static fromString(token) {
        return values(EstadoTurno).find(est => est.nombre === token);
    }

    constructor(estado, orden) {
        this.estado = estado;
        this.orden = orden;
    }
}

NivelCobertura.DISPONIBLE = new NivelCobertura("TOTAL", 0);
NivelCobertura.PARCIAL = new NivelCobertura("PARCIAL", 1);
NivelCobertura.NO_CUBIERTA = new NivelCobertura("NO_CUBIERTA", 2);

export class DiaSemana {
    nombre;
    orden;

    static fromString(token) {
        return values(EstadoTurno).find(est => est.nombre === token);
    }

    constructor(estado, orden) {
        this.estado = estado;
        this.orden = orden;
    }
}

DiaSemana.LUNES = new NivelCobertura("LUNES", 0);
DiaSemana.MARTES = new NivelCobertura("MARTES", 1);
DiaSemana.MIERCOLES = new NivelCobertura("MIERCOLES", 2);
DiaSemana.JUEVES = new NivelCobertura("JUEVES", 3);
DiaSemana.VIERNES = new NivelCobertura("VIERNES", 4);
DiaSemana.SABADO = new NivelCobertura("SABADO", 5);
DiaSemana.DOMINGO = new NivelCobertura("DOMINGO", 6);