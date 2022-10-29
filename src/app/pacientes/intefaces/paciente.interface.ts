export interface Paciente {
    rut: string;
    nombbre: string;
    apellido: string;
}

export interface Receta {
    fecha: Date;
    od: Ojo;
    oi: Ojo;
    diagnostico: string;
    observacion: string;
}

export interface Ojo {
    esf: number;
    cil: number;
    a: number;
}