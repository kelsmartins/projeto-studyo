import { UUID } from "crypto";

export type AssuntoType = {
    id: string;
    dataAgendada: Date;
    assunto: string;
    categoria?: string;
    cor?: string;
    notasRapidas?: string;
    linksFonteDigital?: string[];
    arquivosFonteDigital?: File[];
}
