import {AssuntoType} from '@/types/assuntotype'

// Em /data/assuntos.ts

export const Assuntos: AssuntoType[] = [
  {
    id: '1',
    // Mês 10 = Novembro. HOJE (15/11/2025)
    dataAgendada: new Date(2025, 10, 15),
    assunto: 'Teste para HOJE',
    contexto: 'Testes',
    linkFonteDigital: ['https://youtu.be/logaritmos-revisao', 'https://youtu.be/logaritmos-revisao'],
  },
  {
    id: '2',
    // Mês 10 = Novembro. AMANHÃ (16/11/2025)
    dataAgendada: new Date(2025, 10, 16),
    assunto: 'Teste para AMANHÃ',
    contexto: 'Testes',
    linkFonteDigital: ['https://youtu.be/logaritmos-revisao', 'https://youtu.be/logaritmos-revisao']
  },
  {
    id: '3',
    // Mês 10 = Novembro. DEPOIS DE AMANHÃ (17/11/2025)
    dataAgendada: new Date(2025, 10, 17),
    assunto: 'Teste para DEPOIS DE AMANHÃ',
    contexto: 'Testes',
    linkFonteDigital: ['https://youtu.be/logaritmos-revisao', 'https://youtu.be/logaritmos-revisao']
  },
  {
    id: '4',
    // Mês 10 = Novembro. PRÓXIMOS DIAS (20/11/2025)
    dataAgendada: new Date(2025, 10, 20),
    assunto: 'Teste para PRÓXIMOS DIAS',
    contexto: 'Testes',
    linkFonteDigital: ['https://youtu.be/logaritmos-revisao', 'https://youtu.be/logaritmos-revisao']
  },
  {
    id: '5',
    // Mês 11 = Dezembro. PRÓXIMOS DIAS (05/12/2025)
    dataAgendada: new Date(2025, 11, 5),
    assunto: 'Revisão de Logaritmos (Dezembro)',
    contexto: 'Matemática',
    linkFonteDigital: ['https://youtu.be/logaritmos-revisao', 'https://youtu.be/logaritmos-revisao']
  },
  {
    id: '6',
    // Mês 10 = Novembro. PASSADO (07/11/2025) - Não deve aparecer
    dataAgendada: new Date(2025, 10, 7),
    assunto: 'Colocação Pronominal (Passado)',
    contexto: 'Português',
    linkFonteDigital: ['https://youtu.be/logaritmos-revisao', 'https://youtu.be/logaritmos-revisao']
  },
];