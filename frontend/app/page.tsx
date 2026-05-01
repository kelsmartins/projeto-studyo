'use client'
import {CardArea} from '@/components/bigcomponents/cardarea';
import { AssuntoType } from '@/types/assuntotype';
import { useState } from 'react';
import { Assuntos} from '@/data/assuntos';
import { FormCard } from '@/components/bigcomponents/formcard';

export default function Home() {

  const [newCardVisible, setNewCardVisible] = useState(false);
  const [assuntos, setAssuntos] = useState<AssuntoType[]>(Assuntos);

  function handleOpenNewCard(){
    setNewCardVisible(true);
  }

  function handleCloseNewCard(){
    setNewCardVisible(false);
  }

  // hospedando imagens em servidor online (banco de dados nao guarda arquivos) - CLOUDINARY
  async function handleSaveNewCard(title: string, date: Date, category?: string, color?: string, quickNotes?: string, links?: string[], files?: File[]) {

    const cardTest: AssuntoType = {
      id: crypto.randomUUID.toString(),
      assunto: title,
      dataAgendada: date,
      categoria: category,
      cor: color,
      notasRapidas: quickNotes,
      linksFonteDigital: links,
      arquivosFonteDigital: files
    }

    setAssuntos(prev => [...prev, cardTest])
  }
  
  return (
    <div className="flex-1 h-full flex flex-col overflow-hidden min-h-0">
                                                    {/* O min-w-0 permite que um item (flex-1) encolha para caber no layout, mesmo que o conteúdo dentro dele seja muito mais largo. */}
      <div className="flex-1 w-full bg-gray-200 min-w-0 flex flex-col min-h-0">  {/* transformar num componente futuramente*/}
        <header className="h-[10%] w-[100%] flex flex-row items-center px-4 justify-between">
          <h2 className="text-3xl font-bold text-zinc-800">Estudos</h2>
          <button className='w-[110px] h-[40px] bg-zinc-800 rounded-md font-bold p-1 text-sm text-white/80 hover:bg-zinc-700 transition-colors cursor-pointer' 
          onClick={handleOpenNewCard}>novo assunto</button>
        </header>                      
         <div className="w-full flex-1 overflow-y-auto no-scrollbar">
            <CardArea title='Hoje' code={1} assuntos={assuntos}/>
            <CardArea title='Amanhã' code={2} assuntos={assuntos}/>
            <CardArea title='Depois de amanhã' code={3} assuntos={assuntos}/>
            <CardArea title='Próximos dias' code={4} assuntos={assuntos}/>
        </div>
      </div>
        {newCardVisible &&
        <FormCard
          handleCloseCard={handleCloseNewCard}
          handleSaveCard={(title: string, date: Date, category?: string, color?: string, quickNotes?: string, links?: string[], files?: File[]) =>
          handleSaveNewCard(title, date, category, color, quickNotes, links, files)
          }
        />}
      
    </div>
  );
}
