'use client'
import {CardArea} from '@/components/cardarea'

export default function Home() {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen w-[300px] bg-zinc-800">

      </div>                                               {/* O min-w-0 permite que um item (flex-1) encolha para caber no layout, mesmo que o conteúdo dentro dele seja muito mais largo. */}
      <div className="h-screen w-[100%] flex-1 bg-zinc-900 min-w-0">
          <h2 className=" h-[10%] flex justify-center items-center text-3xl">Estudos</h2>                   
         <div className=" w-[95%] h-[90%] mx-auto">
            <CardArea/>
        </div>
      </div>
    </div>
  );
}
