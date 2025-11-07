'use client'
import {CardArea} from '@/components/cardarea';
import { CardDetalhado } from '@/components/carddetalhado';

export default function Home() {
  
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen w-[300px] bg-zinc-800">
        
      </div>                                               {/* O min-w-0 permite que um item (flex-1) encolha para caber no layout, mesmo que o conteúdo dentro dele seja muito mais largo. */}
      <div className="h-screen w-[100%] flex-1 bg-zinc-900 min-w-0">
        <div className="h-[10%] w-[100%] flex flex-row items-center px-4 justify-between">
          <h2 className="text-3xl font-bold">Estudos</h2>
          <button className="w-[50px] h-[50px] bg-red-200">oi</button>
        </div>                      
         <div className=" w-full h-[90%] overflow-y-auto no-scrollbar">
            <CardArea title='Hoje'code={1}/>
            <CardArea title='Amanhã' code={2}/>
            <CardArea title='Depois de amanhã' code={3}/>
            <CardArea title='Próximos dias' code={4}/>
        </div>
      </div>
    </div>
  );
}
