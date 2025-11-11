'use client'
import { Button } from '@/components/button';
import {CardArea} from '@/components/cardarea';
import { CardDetalhado } from '@/components/carddetalhado';
import { NovoCard } from '@/components/novocard';
import { AssuntoType } from '@/types/assuntotype';
import { useState } from 'react';
import { Assuntos} from '@/data/assuntos';

export default function Home() {

  const [newCardVisible, setNewCardVisible] = useState(false);
  const [assuntos, setAssuntos] = useState<AssuntoType[]>(Assuntos);

  function handleOpenNewCard(){
    setNewCardVisible(true);
  }

  function handleCloseNewCard(){
    setNewCardVisible(false);
  }

  function handleSaveNewCard(title: string, date: Date, link: string) {
  setAssuntos(current => [
    ...current,
    {
      id: current.length + 1,
      assunto: title,
      dataAgendada: date,
      linkRepositorio: link
    }
  ]);
}
  
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen w-[300px] bg-zinc-900">
        
      </div>                                               {/* O min-w-0 permite que um item (flex-1) encolha para caber no layout, mesmo que o conteúdo dentro dele seja muito mais largo. */}
      <div className="h-screen w-[100%] flex-1 bg-gray-200 min-w-0">
        <div className="h-[10%] w-[100%] flex flex-row items-center px-4 justify-between">
          <h2 className="text-3xl font-bold text-zinc-800">Estudos</h2>
          <button className='w-[110px] h-[40px] bg-zinc-800 rounded-md font-bold p-1 text-sm text-white/80 hover:bg-zinc-700 transition-colors cursor-pointer' 
          onClick={handleOpenNewCard}>novo assunto</button>
        </div>                      
         <div className=" w-full h-[90%] overflow-y-auto no-scrollbar">
            <CardArea title='Hoje'code={1}assuntos={assuntos}/>
            <CardArea title='Amanhã' code={2} assuntos={assuntos}/>
            <CardArea title='Depois de amanhã' code={3} assuntos={assuntos}/>
            <CardArea title='Próximos dias' code={4} assuntos={assuntos}/>
        </div>
      </div>
      {newCardVisible &&
        <NovoCard handleCloseNewCard={handleCloseNewCard} handleSaveNewCard={(title, date, link) => handleSaveNewCard(title, date, link)}/>}
    </div>
  );
}
