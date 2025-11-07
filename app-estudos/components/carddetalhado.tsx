import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button";
import { useState } from "react";

type Props = {
    assuntoData: AssuntoType;
    onClose: () => void;
}

export function CardDetalhado({assuntoData, onClose}: Props) {

    return (
        <div className="w-full h-full bg-black/60 fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
            <div className="w-[350px] h-[400px] bg-zinc-800 flex flex-col p-4 rounded-lg">
                <div className="w-full h-[70px] flex flex-col items-center justify-center">
                    <h2 className="w-full h-[40px] text-base flex items-center justify-center font-bold text-center">{assuntoData.assunto}</h2> {/* 38 caracteres*/}
                    <h2 className="w-full h-[15px] text-base flex items-center justify-center font-bold text-white/60 mb-4">{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h2>
                </div>
                <div className="w-full h-[200px] flex flex-col">
                    <h3 className="mt-2 text-base font-bold">Fontes digitais</h3>
                    <div className="flex-1 bg-red-500"></div>
                    <Button style="bg-red-400 mt-4" title="concluir" onClick={onClose}/>
                </div>
            </div>
        </div>
    )
}