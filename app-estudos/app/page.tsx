'use client'
import {CardArea} from '@/components/cardarea'

export default function Home() {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen w-[300px] bg-zinc-800">

      </div>
      <div className="h-screen w-[100%] flex-1 bg-zinc-900">
        <div className="h-[80px] flex items-center px-4">
          <h2 className="text-3xl">Estudos</h2>
        </div>
         <div className="flex-1 w-[100%] h-[90%] overflow-y-auto no-scrollbar"> {/* py-4 px-4 space-y-4 */}
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
