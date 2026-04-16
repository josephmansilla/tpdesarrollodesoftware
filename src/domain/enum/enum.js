import {values} from "lodash-es";

export class EstadoTurnoEnumEnum {
    nombre;
    orden;

    static fromString(token) {
        return values(EstadoTurnoEnum).find(est => est.nombre === token);
    }

    constructor(estado, orden) {
        this.estado = estado;
        this.orden = orden;
    }
}

EstadoTurnoEnumEnum.DISPONIBLE = new EstadoTurnoEnumEnum("DISPONIBLE", 0);
EstadoTurnoEnum.RESERVADO = new EstadoTurnoEnum("RESERVADO", 1);
EstadoTurnoEnum.CONFIRMADO = new EstadoTurnoEnum("CONFIRMADO", 2);
EstadoTurnoEnum.CANCELADO = new EstadoTurnoEnum("CANCELADO", 3);
EstadoTurnoEnum.REALIZADO = new EstadoTurnoEnum("REALIZADO", 4);

const EstadoTurnoEnumValores = Object.values(EstadoTurnoEnum)
    .filter(e => e instanceof EstadoTurnoEnum)
    .map(e => e.nombre);

export class NivelCoberturaEnum {
    nombre;
    orden;

    static fromString(token) {
        return values(NivelCoberturaEnum).find(est => est.nombre === token);
    }

    constructor(estado, orden) {
        this.estado = estado;
        this.orden = orden;
    }
}

NivelCoberturaEnum.DISPONIBLE = new NivelCoberturaEnum("TOTAL", 0);
NivelCoberturaEnum.PARCIAL = new NivelCoberturaEnum("PARCIAL", 1);
NivelCoberturaEnum.NO_CUBIERTA = new NivelCoberturaEnum("NO_CUBIERTA", 2);

const NivelCoberturaEnumValores = Object.values(NivelCoberturaEnum)
    .filter(e => e instanceof NivelCoberturaEnum)
    .map(e => e.nombre);

export class DiaSemanaEnum {
    nombre;
    orden;

    static fromString(token) {
        return values(EstadoTurnoEnum).find(est => est.nombre === token);
    }

    constructor(estado, orden) {
        this.estado = estado;
        this.orden = orden;
    }
}

DiaSemanaEnum.LUNES = new DiaSemanaEnum("LUNES", 0);
DiaSemanaEnum.MARTES = new DiaSemanaEnum("MARTES", 1);
DiaSemanaEnum.MIERCOLES = new DiaSemanaEnum("MIERCOLES", 2);
DiaSemanaEnum.JUEVES = new DiaSemanaEnum("JUEVES", 3);
DiaSemanaEnum.VIERNES = new DiaSemanaEnum("VIERNES", 4);
DiaSemanaEnum.SABADO = new DiaSemanaEnum("SABADO", 5);
DiaSemanaEnum.DOMINGO = new DiaSemanaEnum("DOMINGO", 6);

const DiaSemanaEnumValores = Object.values(DiaSemanaEnum)
    .filter(e => e instanceof DiaSemanaEnum)
    .map(e => e.nombre);