import {medicoSchema} from "../domain/medico/medico.js";

export const medicos = [];

export const MedicoController = {

    crearMedico(req, res) {
        const result = medicoSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json(result.error);
        }

        const nuevoMedico = result.data;

        const medicoExistente = medicos.find(
            m => m.nombre === nuevoMedico.nombre
        );

        if(medicoExistente){
            return res.status(400).json({
                error: "Ya existe ese medico"
            });
        }

        medicos.push(nuevoMedico);

        res.status(201).json(nuevoMedico)
    },

    verDisponibilidad(req, res) {
        const { id } = req.params;

        const medico = medicos.find(m => m.id === id);

        if(!medico){
            return res.status(404).json({
                error: "Medico no encontrado"
            });
        }

        res.status(200).json(medico.disponibilidades);
    },

    verDisponibilidades(req, res){
        const disponibilidades = medicos.map(m =>({
            medicoId: m.id,
            nombre: m.nombre,
            disponibilidades: m.disponibilidades
        }));

        res.status(200).json(disponibilidades);
    }
};