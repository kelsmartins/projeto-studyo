import { useState } from "react"
import { Button } from "./button"
import { DatePickerComponent } from "./datepicker"

type Props = {
    onClick: () => void;
    onConcluir: (title: string, date: Date, link: string) => void;
}

export function NovoCard({onClick, onConcluir}: Props) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date())
    const [link, setLink] = useState('');

    function handlePickDate(newDate: Date){
        setDate(newDate);
    }

    function handleOnConcluir(){
        onConcluir(title, date, link);
        onClick();  
    }

    return (
        <div className="w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" onClick={onClick}>
            <div className="w-[350px] h-[500px] bg-zinc-800 flex flex-col p-4 rounded-lg" onClick={e => e.stopPropagation()}> {/* explicacao linha 52 */}

                <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase">novo assunto</h2> {/* 38 caracteres*/}

                <h3 className="mb-1 text-sm uppercase">título</h3>        
                <input type="text"
                className="h-[40px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3 placeholder-italic"
                value={title}
                onChange={text => setTitle(text.target.value)}
                />

                <h3 className="mb-1 text-sm uppercase">data agendada</h3>
                <DatePickerComponent onPick={handlePickDate} />

                <div className="w-full h-[100px] border-2 border-dashed rounded-md border-zinc-700 mb-3"></div>
                {/* <div className="h-[60px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3"></div> */}

                 <h3 className="mb-1 text-sm uppercase">link (Site ou YouTube)</h3>           
                <input type="text"
                 className="h-[40px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3"
                 value={link}
                onChange={text => setLink(text.target.value)}
                />

                <Button style="bg-red-400 m-auto h-[40px] w-[150px]" title="concluir" onClick={handleOnConcluir}/>

            </div>
        </div>
    )
}

/*  
    STOPPROPAGATION É TIPO:

        "Ei, o clique aconteceu aqui neste card. Execute esta função (stopPropagation) e pare aqui.
        Não 'borbulhe' este evento de clique para nenhum componente pai."
*/  