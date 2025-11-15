import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button"
import { CardDetalhado } from "./carddetalhado";
import { useState } from "react";
import { LeftCategoryComponent } from "./categorycomponent";

type Props = {
    assuntoData: AssuntoType;
}

export function Card({assuntoData}: Props) {

    const [show, setShow] = useState(false);

    const [updateCardTitle, setUpdatedCard] = useState(assuntoData.assunto);
    const [updateCardDate, setUpdateCarDate] = useState(assuntoData.dataAgendada);
    const [updateCardLink, setUpdateCardLink] = useState(assuntoData.linkFonteDigital);
    const [updateCardFiles, setUpdateCardFiles] = useState<File[]>([]);

    function getUpdateCardFields(updatedTitle: string, updatedDate: Date, updatedLink?: string, updatedFiles?: File[]){
        setUpdatedCard(updateCardTitle)
        setUpdateCarDate(updateCardDate)
        setUpdateCardLink(updateCardLink || assuntoData.linkFonteDigital)
        setUpdateCardFiles(updateCardFiles || [])
    }

    function handleShowDetails(){
        setShow(!show);
    }

    function handleCloseDetails(){
        setShow(false);
    }

    return (
        <div className="h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-white flex shadow-md shadow-zinc-400">
            <LeftCategoryComponent/>
            <div className="w-full rounded-r-lg flex flex-col p-3">
                <h3 className="w-full h-[25px] flex items-center text-sm font-bold text-zinc-500">{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h3>
                <h2 className="w-full h-[80px] flex items-center text-sm font-bold text-zinc-600">{assuntoData.assunto}</h2>
                <div className="w-full h-[60px]"></div>
                <div className="w-full h-[60px] flex justify-between items-center">
                    <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="ver tudo" onClick={handleShowDetails} />
                    <Button style="bg-zinc-700 font-bold hover:bg-zinc-600 transition-colors" title="concluir"/>
                </div>
                {show &&
                    <CardDetalhado assuntoData={assuntoData} closeDetails={handleCloseDetails} getUpdateCardFields={(title, date, link, files)=> getUpdateCardFields(title, date, link, files)}/>
                }
            </div>
        </div>
    )
}