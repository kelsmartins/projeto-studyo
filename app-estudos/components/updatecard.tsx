import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button";
import { useState } from "react";
import { DatePickerComponent } from "./datepicker";

type Props = {

    asssuntoCard: AssuntoType;
    closeUpdateCard: () => void;
}

export function UpdateCard({asssuntoCard, closeUpdateCard}: Props) {

    const [title, setTitle] = useState(asssuntoCard.assunto);
    const [date, setDate] = useState(asssuntoCard.dataAgendada)
    const [link, setLink] = useState(asssuntoCard.linkRepositorio);

    function handlePickNewDate(newDate: Date){
        setDate(newDate);
    }


    function handleBack(){
        closeUpdateCard();
    }

    return (
        <div className="w-full h-full fixed inset-0 flex items-center justify-center z-50">
            <div className="w-[350px] h-[500px] bg-white flex flex-col rounded-md" onClick={e => e.stopPropagation()}>

                <span className="bg-black h-[20px] w-full rounded-t-md"></span> {/*  span do contexto/materia/categoria */} 
                <div className="flex-1 flex flex-col p-4"> {/*  div p restante dos elementos terem p-4  */} 
                    
                    <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center text-zinc-600">Atualizar assunto</h2> {/* 38 caracteres*/}
                   
                    <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">título</h3>        
                    <input type="text"
                        className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600"
                        value={title}
                        onChange={text => setTitle(text.target.value)}
                         />
                   
                    <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">data agendada</h3>
                    <DatePickerComponent onPick={handlePickNewDate} />
                   
                   <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">título</h3>   
                    <div className="w-full h-[50px] border border-dashed rounded-md border-zinc-700 mb-3"></div>
                        {/* <div className="h-[60px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3"></div> */}
                   
                    <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">link (Site ou YouTube)</h3>           
                    <input type="text"
                        className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                        value={link}
                        onChange={text => setLink(text.target.value)}
                    /> 
                    <div className="w-full h-[40px] bg-red-200 flex justify-between items-center">
                        <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="voltar" onClick={handleBack} />
                        <Button style="bg-zinc-700 text-white font-bold hover:bg-zinc-600" title="salvar" />
                    </div>
                </div>        
            </div>
                

        </div>
    )
}