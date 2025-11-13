import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button";
import { DatePickerComponent } from "./datepicker";
import { useState } from "react";

type Props = {
    handleCloseUpdateCard: () => void;
}

export function UpdateCard({handleCloseUpdateCard}: Props) {

    const [updateTitle, setUpdateTitle] = useState('');
    const [updateDate, setUpdateDate] = useState(new Date())
    const [updateLink, setUpdateLink] = useState('');

    const [updateCardVisible, setUpdateCardVisible] = useState(false)
    

    function handlePickNewDate(date: Date){
        setUpdateDate(updateDate)
    }

    // function handleConclude(){
    //     // fazer algo: excluir ou add à pasta 'concluídos'
    //     handleCloseDetails();
    // }

    function handleChange(){
        // fazer algo: mostrar div para atualizar
        setUpdateCardVisible(true)
    }

    return (
        <div className="w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="w-[350px] h-[400px] bg-white flex flex-col rounded-lg shadow-xl shadow-zinc-400" onClick={e => e.stopPropagation()}>

                <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase text-zinc-900">novo assunto</h2> {/* 38 caracteres*/}

                <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">título</h3>        
                <input type="text"
                className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-sm mb-3 placeholder-italic text-zinc-600"
                value={updateTitle}
                onChange={text => setUpdateTitle(text.target.value)}
                />

                <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">data agendada</h3>
                <DatePickerComponent onPick={handlePickNewDate} height="40px"/>

                <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">Arquivos</h3>
                <div className="w-full h-[100px] border border-dashed rounded-md border-zinc-700 mb-3"></div>
                {/* <div className="h-[60px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3"></div> */}

                 <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">link (Site ou YouTube)</h3>           
                <input type="text"
                 className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                 value={updateLink}
                onChange={text => setUpdateLink(text.target.value)}
                />


            </div>
        </div>
    )
}

