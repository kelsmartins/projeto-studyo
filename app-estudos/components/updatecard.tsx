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
        links?: string[],
        files?: File[]
    };
    handleCloseUpdateCard: () => void;
    getFields: (title: string, date: Date, links: string[], files: File[])=> void;
    handleUpdateCard: () => void;
}

export function UpdateCard({cardData,handleCloseUpdateCard, getFields, handleUpdateCard}: Props) {

    const [updateTitle, setUpdateTitle] = useState(cardData.title);
    const [updateDate, setUpdateDate] = useState(cardData.date)
    const [updateLinks, setUpdateLinks] = useState<string[]>(cardData.links ?? []);
    const [updateFiles, setUpdateFiles] = useState<File[]>(cardData.files ?? []);

    function handlePickNewDate(date: Date){
        setUpdateDate(date) // setar a data q pegou, antes eu tava setando a data como ela msm ou seja a antiga, nao a q quero como nova
    }

    function handleUpdateLinks(link: string){
        setUpdateLinks(prev => [...prev, link])
    }

    function getNewSelectedFiles(newUpdatedFile: File){
        setUpdateFiles(prevFiles => [...prevFiles, newUpdatedFile]) // "concatenar" com oq ja tem lá
    }

    function saveUpdateCard(){
        // fazer algo: mostrar div para atualizar
        getFields(updateTitle, updateDate, updateLinks || [], updateFiles || []) // vai executar a chamada da funcao, adicionando os parâmetros necessarios
        handleCloseUpdateCard()
        handleUpdateCard()
    }

    return (
        <div className="w-full h-full fixed inset-0 flex items-center justify-center z-50">
            <main className="w-[350px] h-[500px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}>

                <TopCategoryComponent />

                <section className="flex flex-col flex-1 p-4">
                
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
                    value={updateLinks}
                    onChange={e => handleUpdateLinks(e.target.value)}
                    />
                </section>
                <footer className="w-full h-[60px] flex flex-col justify-between px-4">
                    <span className="w-full h-[4px] bg-zinc-400"></span>
                    <div className="w-full h-50 flex justify-between items-center">
                            <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="editar" onClick={handleCloseUpdateCard} />
                            <Button style="bg-zinc-700 text-white font-bold hover:bg-zinc-600" title="concluir" onClick={saveUpdateCard}/>
                    </div>
                </footer>
            </main>
        </div>
    )
}

