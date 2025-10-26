'use client'
import {CardArea} from '@/components/cardarea'

export default function Home() {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen w-[300px] bg-zinc-800">

      </div>                                               {/* O min-w-0 permite que um item (flex-1) encolha para caber no layout, mesmo que o conteúdo dentro dele seja muito mais largo. */}
      <div className="h-screen w-[100%] flex-1 bg-zinc-900 min-w-0">
        <div className="h-[10%] flex items-center px-4">
          <h2 className="text-3xl">Estudos</h2>
        </div>                      
         <div className=" w-full h-[90%] overflow-y-auto no-scrollbar">
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
        </div>
      </div>
    </div>
  );
}
