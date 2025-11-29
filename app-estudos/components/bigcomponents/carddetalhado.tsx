import { Button } from "../button";
import { useState } from "react";
import { TopCategoryComponent } from "../pickers/categorycomponent";
import { FaLink , FaFilePdf, FaBucket } from 'react-icons/fa6'
import { FormCard } from "./formcard";
import { NothingToShow } from "../nothingtoshow";

type Props = {
    cardData: {
        title: string,
        date: Date,
        category?: string,
        color?: string,
        quickNotes?: string,
        links?: string[],
        files?: File[]
    };
    closeDetails: () => void;
    getFields: (updatedTitle: string, updatedDate: Date, updatedCategory: string, updatedColor: string, updatedQuickNotes: string, updatedLinks?: string[], updatedFiles?: File[]) => void;
    handleUpdateCard: () => void;
}

export function CardDetalhado({cardData, closeDetails, getFields, handleUpdateCard}: Props) {

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
            <main className="w-[600px] h-[600px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}>

                <TopCategoryComponent defColor={cardData.color || 'bg-white'}/> {/*  span do contexto/materia/categoria */}
                <header className="w-full h-[40px] flex flex-row items-center justify-between px-4 mb-4">
                        <h2 className="w-full h-full flex items-end font-bold text-zinc-400 text-sm border-b border-b-zinc-400">DETALHES</h2>
                        <h2 className="w-full h-full flex items-end font-bold text-zinc-400 text-sm  border-b border-b-zinc-400">FONTES DIGITAIS</h2>
                </header>

                <section className="flex flex-row flex-1 justify-between items-center">
                
                {/* DIV ESQUERDA */}
                    <div className="w-[300px] h-full flex flex-col px-4">

                         <header className="bg-green-400 p-1 min-h-[50px] max-h-[130px] flex  flex-col justify-between">
                            <h2 className="w-full flex items-end justify-start font-bold text-zinc-600 leading-tight text-xl mb-1 bg-purple-300">{cardData.title}</h2> {/* 38 caracteres*/}
                            <h2 className="w-full text-lg flex items-center justify-start font-bold text-zinc-500 bg-red-300">{cardData.date.toLocaleDateString()}</h2>    
                        </header>   
                        
                        <span className="w-full h-[200px] bg-yellow-500 mb-3"></span>

                        {
                            cardData.quickNotes && cardData.quickNotes != '' &&
                            <p className="h-[80px] w-full bg-zinc-100 rounded-md p-2 text-zinc-400 text-sm mb-3 italic overflow-y-auto no-scrollbar">
                                {cardData.quickNotes}
                            </p>
                        }
                        {
                            !cardData.quickNotes && cardData.quickNotes == '' &&
                            <button className="w-full h-[30px] bg-zinc-100 hover:bg-zinc-200 rounded-xl shadow-xs shadow-zinc-300 mb-3 text-zinc-400 font-bold text-xs uppercase" onClick={()=> setShowUpdateCard(true)}>Adicionar notas rápidas</button>
                        }
                        {
                            cardData.quickNotes && cardData.quickNotes != '' &&
                            <button className="w-full h-[30px] bg-zinc-100 hover:bg-zinc-200 rounded-xl shadow-xs shadow-zinc-300 mb-3 text-zinc-400 font-bold text-xs uppercase" onClick={()=> setShowUpdateCard(true)}>Editar notas rápidas</button>
                        }
                        
                    </div>
                
                {/* DIV DIREITA */}
                    <div className="w-[300px] h-full flex flex-col px-4">
                        {/* DIV LINKS */}
                        <h4 className="text-sm text-zinc-500 font-bold h-3 flex justify-start items-center">links</h4>

                        { cardData.links && cardData.links.length > 0 &&
                        <ul className="h-[200px] w-full mt-1 overflow-y-auto no-scrollbar">
                            {
                            cardData.links && cardData.links.length > 0 &&
                            cardData.links.map((link, index) => 
                                <li  key={index}> 
                                    <a href={link} 
                                        target="_blank" // para abrir em outra guia
                                        className="w-full h-10 bg-zinc-50 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-100">
                                            <FaLink  className="text-zinc-500 size-4 font-bold" />
                                            <p className="text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center">{link}</p>
                                            <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                    </a>
                                </li>)
                            }
                        </ul>
                        }
                        {
                            cardData.links?.length === 0 && 
                            <NothingToShow height="200px" label="nenhum link adicionado"/>
                        }

                        {/* DIV FILES*/}
                        <h4 className="text-sm text-zinc-500 font-bold h-3 flex justify-start items-center mt-3">arquivos</h4>
                        
                        { cardData.files && cardData.files.length > 0 &&
                        <ul className="h-[200px] w-full mt-1 overflow-y-auto no-scrollbar">
                            {
                            cardData.files && cardData.files.length > 0 &&
                            cardData.files.map((file, index) => 
                                <li className="w-full h-10 bg-zinc-50 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200" key={index}>
                                    <FaFilePdf  className="text-zinc-500 size-4 font-bold" />
                                    <p className="text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center">{file.name}</p>
                                    <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                </li>)
                            }
                        </ul>
                        }
                        {
                            cardData.files?.length === 0 && 
                            <NothingToShow height="200px" label="nenhum arquivo adicionado"/>
                        }

                    </div>

                 </section>
                <footer className="w-full h-[60px] flex flex-col justify-between px-4">
                    <span className="w-full h-[4px] bg-zinc-400"></span>
                    <div className="w-full h-50 flex justify-between items-center">
                            <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="editar" onClick={handleShowUpdateCard} />
                            <Button style="bg-zinc-700 text-white font-bold hover:bg-zinc-600" title="concluir" onClick={handleConclude}/>
                    </div>
                </footer>
                {
                    showUpdateCard && <FormCard initialData={cardData} 
                                            handleCloseCard={handleCloseUpdateCard} 
                                            getFields={getFields} // vai repassar a chamada de funcao getFields para updateCard
                                            handleSaveCard={handleUpdateCard} />
                }

            </main>
        </div>
    )
}