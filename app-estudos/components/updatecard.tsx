import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button";
import { DatePickerComponent } from "./datepicker";
import { useState } from "react";
import { DropzoneComponent } from "./dropzonecomponent";
import { TopCategoryComponent } from "./categorycomponent";
import { FaLink, FaFilePdf, FaBucket } from 'react-icons/fa6'

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
    const [updateDate, setUpdateDate] = useState(cardData.date);
    const [updateLinks, setUpdateLinks] = useState<string[]>(cardData.links ?? []);

    const [category, setCategory] = useState('');
    const [color, setColor] = useState('')
    const [quickNotes, setQuickNotes] = useState('');

    const [inputLink, setInputLink] = useState('');
    const [updateFiles, setUpdateFiles] = useState<File[]>(cardData.files ?? []);

    function handlePickNewDate(date: Date){
        setUpdateDate(date) // setar a data q pegou, antes eu tava setando a data como ela msm ou seja a antiga, nao a q quero como nova
    }

    function getNewSelectedFiles(newUpdatedFile: File){
        setUpdateFiles(prevFiles => [...prevFiles, newUpdatedFile]) // "concatenar" com oq ja tem lá
    }

    function handleGeNewtLinks(){
        if(inputLink != ''){    
            setUpdateLinks(prev => [...prev, inputLink])
            setInputLink('')
        } else {
            alert('link não pode ser vazio')
        }
    }

    function saveUpdateCard(){
        // fazer algo: mostrar div para atualizar
        getFields(updateTitle, updateDate, updateLinks || [], updateFiles || []) // vai executar a chamada da funcao, adicionando os parâmetros necessarios
        handleCloseUpdateCard()
        handleUpdateCard()
    }

    return (
        <div className="w-full h-full fixed inset-0 flex items-center justify-center z-50">
            <main className="w-[600px] h-[600px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}> {/* explicacao linha 52 */}

                <header className="flex flex-col justify-between h-[50px] w-full">
                    <TopCategoryComponent />
                     <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase text-zinc-900">Atualizar assunto</h2> {/* 38 caracteres*/}

                </header>
                <section className="flex flex-row flex-1 justify-between items-center">

                    <div className="w-[300px] h-full flex flex-col px-4">

                        {/* TITULO */}
                        <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">título</h3>        
                        <input type="text"
                            className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600"
                            placeholder="ex: Lógica de Programação"
                            value={updateTitle}
                            onChange={text => setUpdateTitle(text.target.value)}
                        />

                        {/* DATA */}
                        <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">data agendada</h3>
                        <DatePickerComponent onPick={handlePickNewDate} />

                        {/* CATEGORIA */}
                        <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">categoria (Opcional)</h3>           
                        <input type="text"
                            className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                            placeholder="ex: Curso Informática Básica"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />

                    </div>

                    <div className="w-[300px] h-full flex flex-col px-4">

                        {/* LINKS */}
                        <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">link (Site ou YouTube)</h3>           
                        <input type="text"
                            className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                            placeholder="Pressione Enter para adicionar"
                            value={inputLink}
                            onChange={e => setInputLink(e.target.value)}
                            onKeyDown={e => {
                                if(e.key === 'Enter'){ // so executar se tecla enter foi pressionada
                                    handleGeNewtLinks()
                                }
                            }}
                        />
                        <ul className="w-full h-[140px] rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2">
                            {
                                updateLinks && updateLinks.length > 0 &&
                                updateLinks.map((link, index) => 
                                    <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200" key={index}>
                                        <FaLink  className="text-zinc-500 size-4 font-bold" />
                                        <p className="text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center">{link}</p>
                                        <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                    </li>)
                            }
                        </ul>

                        {/* ARQUIVOS */}
                        <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold mt-3">Arquivo</h3>
                        <DropzoneComponent getSelectedFiles={getNewSelectedFiles}/>
                        <ul className="w-full h-[140px] rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2">
                            {
                                updateFiles && updateFiles.length > 0 &&
                                updateFiles.map((file, index) => 
                                    <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200" key={index}>
                                        <FaFilePdf  className="text-zinc-500 size-4 font-bold" />
                                        <p className="text-xs text-zinc-600 h-full w-[90%] flex justify-start items-center truncate">{file.name}</p>
                                        <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                    </li>)
                            }
                        </ul>

                    </div>
                </section>
                 <footer className="w-full h-[60px] flex flex-col justify-between px-4">
                    <span className="w-full h-[4px] bg-zinc-400"></span>
                    <div className="w-full h-50 flex justify-between items-center">
                            <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="voltar" onClick={handleCloseUpdateCard} />
                            <Button style="bg-zinc-700 text-white font-bold hover:bg-zinc-600" title="concluir" onClick={saveUpdateCard}/>
                    </div>
                </footer>
            </main>
        </div>
    )
}

