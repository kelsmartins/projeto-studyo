import { Button } from "./button";
import { useState } from "react";
import { UpdateCard } from './updatecard'
import { TopCategoryComponent } from "./categorycomponent";
import { FaLink , FaFilePdf, FaBucket } from 'react-icons/fa6'

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

                <TopCategoryComponent defColor={cardData.color || 'text-white'}/> {/*  span do contexto/materia/categoria */}
                <header className="w-full h-[80px] flex flex-col items-center justify-center">
                    <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-zinc-600 text-center leading-tight">{cardData.title}</h2> {/* 38 caracteres*/}
                    <h2 className="w-full h-[20px] text-base flex items-center justify-center font-bold text-zinc-500 mb-4">{cardData.date.toLocaleDateString()}</h2>
                </header>
                <section className="flex flex-row flex-1 justify-between items-center">
                
                    <div className="w-[300px] h-full flex flex-col px-4">

                    </div>
                
                    <div className="w-[300px] h-full flex flex-col px-4">
                        <h3 className="text-sm uppercase text-zinc-600 font-bold h-3 flex justify-start items-center">FONTES DIGITAIS</h3> 
                        
                        {/* DIV TITULO LINKS */}
                        {
                            cardData.links && cardData.links.length > 0 &&
                            <h4 className="text-sm text-zinc-500 font-bold h-3 flex justify-start items-center mt-3">links</h4>
                        }
                        {/* DIV LINKS */}
                        <ul className="min-h-0 max-h-[185px] w-full mt-1 overflow-y-auto no-scrollbar">
                            {
                            cardData.links && cardData.links.length > 0 &&
                            cardData.links.map((link, index) => 
                                <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200" key={index}>
                                    <FaLink  className="text-zinc-500 size-4 font-bold" />
                                    <p className="text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center">{link}</p>
                                    <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                </li>)
                            }
                        </ul>

                        {/* DIV TITULO FILES*/}
                        {
                            cardData.files && cardData.files.length > 0 &&
                            <h4 className="text-sm text-zinc-500 font-bold h-3 flex justify-start items-center mt-3">arquivos</h4>
                        }
                        {/* DIV FILES */}
                        <ul className="min-h-0 max-h-[185px] w-full mt-1 overflow-y-auto no-scrollbar">
                            {
                            cardData.files && cardData.files.length > 0 &&
                            cardData.files.map((file, index) => 
                                <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200" key={index}>
                                    <FaFilePdf  className="text-zinc-500 size-4 font-bold" />
                                    <p className="text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center">{file.name}</p>
                                    <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                </li>)
                            }
                        </ul>
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
                    showUpdateCard && <UpdateCard cardData={cardData} 
                                            handleCloseUpdateCard={handleCloseUpdateCard} 
                                            getFields={getFields} // vai repassar a chamada de funcao getFields para updateCard
                                            handleUpdateCard={handleUpdateCard} />
                }

            </main>
        </div>
    )
}