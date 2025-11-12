export type AssuntoType = {
    id: number;
    dataAgendada: Date;
    assunto: string;
    contexto?: string;
    linkRepositorio: string;
    anotacoesRapidas?: string;
}
