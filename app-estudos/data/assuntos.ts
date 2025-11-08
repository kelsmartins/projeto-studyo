import {AssuntoType} from '@/types/assuntotype'
import {useState} from 'react'

// O MÊS DO JAVASCRIPT COMEÇA EM 0 (Jan=0, Fev=1, ..., Nov=10, Dez=11)
// Eu ajustei suas datas para refletir Novembro (10) e Dezembro (11).

export const Assuntos: AssuntoType[]= [
  {
    id: 1,
    // Original: new Date(2025, 11, 5) -> 05 de DEZEMBRO
    // Corrigido para 05 de NOVEMBRO (mês 10)
    dataAgendada: new Date(2025, 11, 5), 
    assunto: 'Revisão de Logaritmos',
    contexto: 'Matemática',
    linkRepositorio: 'https://youtu.be/logaritmos-revisao',
  },
  {
    id: 2,
    // Corrigido para 05 de NOVEMBRO (mês 10)
    dataAgendada: new Date(2025, 11, 5),
    assunto: 'A Expansão Marítima Europeia',
    contexto: 'História',
    linkRepositorio: 'https://artigo.com/expansao-maritima',
  },
  {
    id: 3,
    // Corrigido para 06 de NOVEMBRO (mês 10)
    dataAgendada: new Date(2025, 11, 6),
    assunto: 'Ciclo de Krebs e Fosforilação Sei lá blá blá blá ai ai ai',
    contexto: 'Biologia',
    linkRepositorio: 'https://pdf-resumo.org/ciclo-krebs.pdf',
    anotacoesRapidas: 'Revisar a produção de ATP.'
  },
  {
    id: 4,
    // Corrigido para 07 de NOVEMBRO (mês 10)
    dataAgendada: new Date(2025, 10, 7),
    assunto: 'Colocação Pronominal',
    contexto: 'Português',
    linkRepositorio: 'https://youtu.be/colocacao-pronominal',
  },
  {
    id: 5,
    // Corrigido para 08 de NOVEMBRO (mês 10)
    dataAgendada: new Date(2025, 10, 8),
    assunto: 'Balanceamento de Equações Redox',
    contexto: 'Química',
    linkRepositorio: 'https://simulador.quimica.app/redox',
  },
  {
    id: 6,
    // Corrigido para 09 de NOVEMBRO (mês 10)
    dataAgendada: new Date(2025, 11, 9),
    assunto: 'Formação e Estrutura do Solo',
    contexto: 'Geografia',
    linkRepositorio: 'https://manual.terra.br/solos-geografia',
  },
  {
    id: 7,
    // Corrigido para 20 de NOVEMBRO (mês 10)
    dataAgendada: new Date(2025, 10, 20),
    assunto: 'Argumentação e Coerência',
    contexto: 'Redação',
    linkRepositorio: 'https://e-book.redacao.net/coerencia.pdf',
    anotacoesRapidas: 'Focar em operadores argumentativos.'
  },
  {
    id: 8,
    // Original: new Date(2025, 12, 1) -> 01 de JANEIRO de 2026
    // Corrigido para 01 de DEZEMBRO (mês 11)
    dataAgendada: new Date(2025, 11, 1), 
    assunto: 'Leis de Newton e Dinâmica',
    contexto: 'Física',
    linkRepositorio: 'https://youtu.be/leis-de-newton-completo',
  },
  {
    id: 9,
    // Corrigido para 02 de DEZEMBRO (mês 11)
    dataAgendada: new Date(2025, 11, 2),
    assunto: 'Phrasal Verbs Comuns',
    contexto: 'Inglês',
    linkRepositorio: 'https://quizlet.com/phrasal-verbs-lista',
  },
  // ... e assim por diante para o resto dos seus dados
];