import { Button } from "./button";
import { useState } from "react";
import { UpdateCard } from './updatecard'
import { TopCategoryComponent } from "./categorycomponent";
import { FaLink , FaFilePdf  } from 'react-icons/fa6'

type Props = {
    cardData: {
        title: string,
        date: Date,
        link?: string[],
        files?: File[]
    };
    closeDetails: () => void;
    getFields: (updatedTitle: string, updatedDate: Date, updatedLink?: string[], updatedFiles?: File[]) => void;
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
            <main className="w-[600px] h-[500px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}>

                <TopCategoryComponent /> {/*  span do contexto/materia/categoria */} 
                <section className="flex-1 flex flex-col p-4"> {/*  div p restante dos elementos terem p-4  */} 
                    <header className="w-full h-[60px] flex flex-col items-center justify-center">
                        <h2 className="w-full h-[40px] text-base flex items-center justify-center font-bold text-zinc-600 text-center leading-tight">{cardData.title}</h2> {/* 38 caracteres*/}
                        <h2 className="w-full h-[20px] text-base flex items-center justify-center font-bold text-zinc-500 mb-4">{cardData.date.toLocaleDateString()}</h2>
                    </header>
                    <div className="w-full h-70 flex flex-col">
                        <h3 className="mt-2 text-lg font-bold text-zinc-600">Fontes digitais</h3>
                        { cardData.files && cardData.files.length > 0 && <h4 className="mt-2 text-sm font-bold text-zinc-500">arquivos</h4>}
                        <ul className="max-h-40 overflow-y-auto flex-nowrap no-scrollbar">
                            {
                                cardData.files && cardData.files.length > 0 &&  
                                cardData.files.map((file, index) =>
                                    <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 p-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200"  key={index}>
                                        <FaFilePdf className="text-zinc-600 size-6"/>
                                        <p className="text-sm text-zinc-600 truncate flex-1">{file.name}</p>
                                    </li>)
                            }
                        </ul>
                        {cardData.link && <h4 className="mt-2 text-sm font-bold text-zinc-500">links</h4>}
                        <ul className="min-h-0 max-h-40">
                            <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 p-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200">
                                        <FaLink className="text-zinc-600 size-6"/>
                                        <p className="text-sm text-zinc-600 truncate flex-1">{cardData.link}</p>
                                    </li>
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