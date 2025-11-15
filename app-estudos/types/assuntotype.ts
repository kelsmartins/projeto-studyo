import { UUID } from "crypto";

export type AssuntoType = {
    id: string;
    dataAgendada: Date;
    assunto: string;
    contexto?: string;
    linkFonteDigital?: string;
    arquivosFonteDigital?: File[]
}
