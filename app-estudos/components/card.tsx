import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button"
import { CardDetalhado } from "./carddetalhado";
import { useState } from "react";

type Props = {
    assuntoData: AssuntoType;
}

export function Card({assuntoData}: Props) {

    const [show, setShow] = useState(false);

    function handleShowDetails(id: number){
        if(id === assuntoData.id){
            setShow(!show);
        }
    }

    function handleCloseDetails(){
        setShow(false);
    }

    return (
        <div className="h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-zinc-800 flex">
            <span className="bg-red-500 w-[20px] h-full rounded-l-lg"></span>
            <div className="w-full rounded-r-lg flex flex-col p-3">
                <h3 className="w-full h-[25px] flex items-center text-sm font-bold text-white/50">{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h3>
                <h2 className="w-full h-[80px] flex items-center text-sm font-bold">{assuntoData.assunto}</h2>
                <div className="w-full h-[60px]"></div>
                <div className="w-full h-[60px] flex justify-between items-center">
                    <Button style="border-1 border-white/10 text-white/40" title="ver tudo" onClick={()=>handleShowDetails(assuntoData.id)} />
                    <Button style="bg-red-300" title="concluir"/>
                </div>
                {show &&
                    <CardDetalhado assuntoData={assuntoData} onClose={handleCloseDetails}/>
                }
            </div>
        </div>
    )
}