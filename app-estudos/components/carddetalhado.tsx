import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button";
import { useState } from "react";
import { UpdateCard } from './updatecard'

type Props = {
    assuntoData: AssuntoType;
    closeDetails: () => void;
}

export function CardDetalhado({assuntoData, closeDetails}: Props) {

    const [showUpdateCard, setShowUpdateCard] = useState(false);

    function handleShowUpdateCard(){
        setShowUpdateCard(true);
    }

    function handleCloseUpdateCard(){
        setShowUpdateCard(false);
    }

    function handleConclude(){
        closeDetails();
    }

    return (
        <div className="w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" onClick={closeDetails}>
            <div className="w-[350px] h-[500px] bg-white flex flex-col rounded-lg shadow-xl shadow-zinc-400" onClick={e => e.stopPropagation()}>

                <span className="bg-black h-[20px] w-full rounded-t-lg"></span> {/*  span do contexto/materia/categoria */} 
                <div className="flex-1 flex flex-col p-4"> {/*  div p restante dos elementos terem p-4  */} 
                    <div className="w-full h-[60px] flex flex-col items-center justify-center">
                        <h2 className="w-full h-[40px] text-base flex items-center justify-center font-bold text-zinc-600">{assuntoData.assunto}</h2> {/* 38 caracteres*/}
                        <h2 className="w-full h-[15px] text-base flex items-center justify-center font-bold text-zinc-500 mb-4">{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h2>
                    </div>
                    <div className="w-full h-[200px] flex flex-col bg-green-300">
                        <h3 className="mt-2 text-base font-bold text-zinc-600">Fontes digitais</h3>
                        <div className="flex-1 bg-red-500"></div>
                        
                        <div className="w-full h-[40px] bg-red-200 flex justify-between items-center">
                            <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="editar" onClick={handleShowUpdateCard} />
                            <Button style="bg-zinc-700 text-white font-bold hover:bg-zinc-600" title="concluir" onClick={handleConclude}/>
                        </div>
                    </div>
                </div>
                {
                    showUpdateCard && <UpdateCard asssuntoCard={assuntoData} closeUpdateCard={handleCloseUpdateCard}/>
                }

            </div>
        </div>
    )
}