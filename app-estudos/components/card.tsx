import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button"
import { CardDetalhado } from "./carddetalhado";
import { useState } from "react";

type Props = {
    assuntoData: AssuntoType;
}

export function Card({assuntoData}: Props) {

    const [show, setShow] = useState(false);

    function handleShowDetails(){
        setShow(!show);
    }

    function handleCloseDetails(){
        setShow(false);
    }

    return (
        <div className="h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-zinc-800 flex">
            <span className="bg-white w-[20px] h-full rounded-l-lg"></span>
            <div className="w-full rounded-r-lg flex flex-col p-3">
                <h3 className="w-full h-[25px] flex items-center text-sm font-bold text-white/50">{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h3>
                <h2 className="w-full h-[80px] flex items-center text-sm font-bold text-white">{assuntoData.assunto}</h2>
                <div className="w-full h-[60px]"></div>
                <div className="w-full h-[60px] flex justify-between items-center">
                    <Button style="w-[100px] h-[30px] text-zinc-500 border border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors font-bold" title="ver tudo" onClick={handleShowDetails} />
                    <Button style="w-[100px] h-[30px] bg-zinc-700 font-bold hover:bg-zinc-600 transition-colors" title="concluir"/>
                </div>
                {show &&
                    <CardDetalhado assuntoData={assuntoData} handleCloseDetails={handleCloseDetails}/>
                }
            </div>
        </div>
    )
}