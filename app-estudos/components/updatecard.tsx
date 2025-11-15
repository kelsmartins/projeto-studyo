import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button";
import { DatePickerComponent } from "./datepicker";
import { useState } from "react";
import { DropzoneComponent } from "./dropzonecomponent";
import { TopCategoryComponent } from "./categorycomponent";

type Props = {
    cardData: {
        title: string,
        date: Date,
        link?: string,
        files?: File[]
    };
    handleCloseUpdateCard: () => void;
    getFields: (title: string, date: Date, link: string, files: File[])=> void;
    handleUpdateCard: () => void;
}

export function UpdateCard({cardData,handleCloseUpdateCard, getFields, handleUpdateCard}: Props) {

    const [updateTitle, setUpdateTitle] = useState(cardData.title);
    const [updateDate, setUpdateDate] = useState(cardData.date)
    const [updateLink, setUpdateLink] = useState(cardData.link);
    const [updateFiles, setUpdateFiles] = useState<File[]>([]);

    function handlePickNewDate(date: Date){
        setUpdateDate(date) // setar a data q pegou, antes eu tava setando a data como ela msm ou seja a antiga, nao a q quero como nova
    }

    function getNewSelectedFiles(newUpdatedFile: File){
        setUpdateFiles(prevFiles => [...prevFiles, newUpdatedFile]) // "concatenar" com oq ja tem lá
    }

    function saveUpdateCard(){
        // fazer algo: mostrar div para atualizar
        getFields(updateTitle, updateDate, updateLink || '', updateFiles || []) // vai executar a chamada da funcao, adicionando os parâmetros necessarios
        handleCloseUpdateCard()
        handleUpdateCard()
    }

    return (
        <div className="w-full h-full fixed inset-0 flex items-center justify-center z-50">
            <div className="w-[350px] h-[500px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}>

                <TopCategoryComponent />

                <div className="flex flex-col flex-1 p-4">
                
                    <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase text-zinc-600">atualizar assunto</h2> {/* 38 caracteres*/}

                    <h3 className="mb-1 text-sm uppercase text-zinc-500 font-bold">título</h3>        
                    <input type="text"
                    className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-sm mb-3 placeholder-italic text-zinc-600"
                    value={updateTitle}
                    onChange={text => setUpdateTitle(text.target.value)}
                    />

                    <h3 className="mb-1 text-sm uppercase text-zinc-500 font-bold">data agendada</h3>
                    <DatePickerComponent onPick={handlePickNewDate}/>

                    <h3 className="mb-1 text-sm uppercase text-zinc-500 font-bold">Arquivos</h3>
                    <DropzoneComponent getSelectedFiles={getNewSelectedFiles}/>

                    <h3 className="mb-1 text-sm uppercase text-zinc-500 font-bold">link (Site ou YouTube)</h3>           
                    <input type="text"
                    className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                    value={updateLink}
                    onChange={text => setUpdateLink(text.target.value)}
                    />

                    <div className="w-full h-[40px] bg-red-200 flex justify-between items-center">
                        <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="voltar" onClick={handleCloseUpdateCard} />
                        <Button style="bg-zinc-700 text-white font-bold hover:bg-zinc-600" title="salvar" onClick={saveUpdateCard}/>
                    </div>
                
                </div>


            </div>
        </div>
    )
}

