import { Cores } from "@/data/cores"
import { CorType } from "@/types/corType";
import { useState } from "react"

type Props = {
    getColor: (color: string) => void;
}

export const ColorComponent = ({getColor}: Props)=>{

    const [isSelected, setIsSelected] = useState<number | null>(null)

    function handleClick(cor: CorType){
        setIsSelected(cor.id)
        getColor(cor.hex)
    }

    return(
        <ul className="h-[40px] w-full rounded-md mb-3 flex justify-between items-center gap-1">
        {
            Cores.map(cor=>
                <li 
                    className={`rounded-md size-8 ${cor.hex} ${isSelected == cor.id ? 'border-4' : 'border-2'}  border-zinc-600`}
                    onClick={()=> handleClick(cor)}
                    key={cor.id}></li>
            )
        }
        </ul>
    )
}