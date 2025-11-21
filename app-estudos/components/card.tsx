import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button"
import { CardDetalhado } from "./bigcomponents/carddetalhado";
import { useState } from "react";
import { LeftCategoryComponent } from "./pickers/categorycomponent";
import axios from "axios";
import { FaLink , FaFilePdf  } from 'react-icons/fa6'

type Props = {
    assuntoData: AssuntoType;
}

export function Card({assuntoData}: Props) {

    const [show, setShow] = useState(false);

    // valores salvos no componente updatecard
    const [cardId, setCardId] = useState(assuntoData.id);
    const [updateCardTitle, setUpdatedCard] = useState(assuntoData.assunto);
    const [updateCardDate, setUpdateCarDate] = useState(assuntoData.dataAgendada);

    const [UpdateCardCategory, setUpdateCardCategory] = useState(assuntoData.categoria ?? '');
    const [updateCardColor, setUpdateCardColor] = useState(assuntoData.cor ?? 'bg-zinc-700');
    const [updateCardQuickNotes, setUpdateCardQuickNotes] = useState(assuntoData.notasRapidas ?? '');

    const [updateCardLinks, setUpdateCardLinks] = useState<string[]>(assuntoData.linksFonteDigital ?? []);
    const [updateCardFiles, setUpdateCardFiles] = useState<File[]>(assuntoData.arquivosFonteDigital ?? []);
    // para caso nao venha dados, continuar com oq ja tem

    const cardData = {
        title: updateCardTitle,
        date: updateCardDate, 
        category: UpdateCardCategory,
        color: updateCardColor,
        quickNotes: updateCardQuickNotes,
        links: updateCardLinks,
        files: updateCardFiles
    }

    function handleShowDetails(){
        setShow(true);
    }

    function handleCloseDetails(){
        setShow(false);
    }

    // ataualizar states com novos valores
    function getUpdateCardFields(newUpdatedTitle: string, newUpdatedDate: Date, newUpdateCategory?: string, newUpdateColor?: string, newUpdateQuickNotes?: string, newUpdatedLinks?: string[], newUpdatedFiles?: File[]){
        setUpdatedCard(newUpdatedTitle)
        setUpdateCarDate(newUpdatedDate)
        setUpdateCardCategory(newUpdateCategory ?? UpdateCardCategory)
        setUpdateCardColor(newUpdateColor ?? updateCardColor)
        setUpdateCardQuickNotes(newUpdateQuickNotes ?? updateCardQuickNotes)
        setUpdateCardLinks(newUpdatedLinks ?? updateCardLinks)
        setUpdateCardFiles(newUpdatedFiles ?? updateCardFiles)
    }

    // requisicao atualizar dados de card
    async function handleUpdateCard(){
        alert('> ' + updateCardTitle + '> ' + updateCardDate + '> ' + updateCardFiles + '> ' + updateCardLinks)
        const res = await axios.put('', )

    }

    async function handleDeleteCard(){
        const res = await axios.delete('', )
        console.log(res)
    }

    return (
        <div className="h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-white flex shadow-md shadow-zinc-400">
            <LeftCategoryComponent defColor={updateCardColor} />
            <div className="w-full rounded-r-lg flex flex-col p-3">
                <h3 className="w-full h-[20px] flex items-center text-sm font-bold text-zinc-500">{updateCardDate.toLocaleDateString()}</h3>
                <h2 className="w-full min-h-[40px] max-h-[300px] flex items-center text-md font-bold text-zinc-600 mb-1">{updateCardTitle}</h2>

                <div className="w-full h-[60px] flex flex-row gap-1">
                    
                    {updateCardLinks.length > 0 &&  
                        <FaLink  className="text-zinc-600 size-6 my-1" />
                    }
                    {updateCardFiles.length > 0 &&
                        <FaFilePdf  className="text-zinc-600 size-6 my-1" />
                    }
                    
                </div>

                <div className="w-full h-[60px] flex justify-between items-center">
                    <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="ver tudo" onClick={handleShowDetails} />
                    <Button style="bg-zinc-700 font-bold hover:bg-zinc-600 transition-colors" title="concluir" onClick={handleDeleteCard}/>
                </div>
                {show &&
                    <CardDetalhado cardData={cardData} 
                    closeDetails={handleCloseDetails} 
                    getFields={(updateCardTitle, updateCardDate, UpdateCardCategory, updateCardColor, updateCardQuickNotes, updateCardLinks, updateCardFiles)=>getUpdateCardFields(updateCardTitle, updateCardDate, UpdateCardCategory, updateCardColor, updateCardQuickNotes, updateCardLinks, updateCardFiles)} 
                    handleUpdateCard={ handleUpdateCard}
                    // vai passar uma chamada de funcao com getUpdateCardFields para pegar os campos de updatecard dentro de carddetalhado
                    />
                }
            </div>
        </div>
    )
}