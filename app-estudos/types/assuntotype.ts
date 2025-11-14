import { UUID } from "crypto";

export type AssuntoType = {
    id: UUID;
    dataAgendada: Date;
    assunto: string;
    contexto?: string;
    linkRepositorio: string;
    arquivo: File;
    anotacoesRapidas?: string;
}
