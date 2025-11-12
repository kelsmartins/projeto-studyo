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
        <div className="h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-white flex shadow-md shadow-zinc-400">
            <span className="bg-white w-[20px] h-full rounded-l-lg"></span>
            <div className="w-full rounded-r-lg flex flex-col p-3">
                <h3 className="w-full h-[25px] flex items-center text-sm font-bold text-zinc-500">{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h3>
                <h2 className="w-full h-[80px] flex items-center text-sm font-bold text-zinc-600">{assuntoData.assunto}</h2>
                <div className="w-full h-[60px]"></div>
                <div className="w-full h-[60px] flex justify-between items-center">
                    <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="ver tudo" onClick={handleShowDetails} />
                    <Button style="bg-zinc-700 font-bold hover:bg-zinc-600 transition-colors" title="concluir"/>
                </div>
                {show &&
                    <CardDetalhado assuntoData={assuntoData} closeDetails={handleCloseDetails}/>
                }
            </div>
        </div>
    )
}