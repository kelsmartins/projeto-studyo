import { useState } from "react"
import { Button } from "./button"
import { DatePickerComponent } from "./datepicker"

type Props = {
    handleCloseNewCard: () => void;
    handleSaveNewCard: (title: string, date: Date, link: string) => void;
}

export function NovoCard({handleCloseNewCard, handleSaveNewCard}: Props) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date())
    const [link, setLink] = useState('');

    function handlePickDate(newDate: Date){ // atribuir valor de pickdate do componente filho
        setDate(newDate);
    }

    function isFieldsFilled(){
        if(title != '' && link != ''){
            return true;
        } else {
            return false;
        }
    }

    function isFieldsEmpty(){
        if(title == '' && link != ''){
            alert('titulo obrigatório')
        } else if(link == '' && title != ''){
            alert('link obrigatório')
        } else if(title == '' && link == ''){ 
            alert('título e link obrigatórios')
        }
    }

    function handleClick(){
        if(isFieldsFilled()){
            handleSaveNewCard(title, date, link); // enviar esses parametros para o componente pai
            handleCloseNewCard(); 
        } else {
            isFieldsEmpty();
        }
    }

    return (
        <div className="w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" onClick={handleCloseNewCard}>
            <div className="w-[350px] h-[500px] bg-white flex flex-col p-4 rounded-lg" onClick={e => e.stopPropagation()}> {/* explicacao linha 52 */}

                <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase text-zinc-900">novo assunto</h2> {/* 38 caracteres*/}

                <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">título</h3>        
                <input type="text"
                className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600"
                value={title}
                onChange={text => setTitle(text.target.value)}
                />

                <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">data agendada</h3>
                <DatePickerComponent onPick={handlePickDate} />

                <div className="w-full h-[100px] border border-dashed rounded-md border-zinc-700 mb-3"></div>
                {/* <div className="h-[60px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3"></div> */}

                 <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">link (Site ou YouTube)</h3>           
                <input type="text"
                 className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                 value={link}
                onChange={text => setLink(text.target.value)}
                />

                <Button style="bg-zinc-900 m-auto h-[40px] w-[150px] font-bold" title="concluir" onClick={handleClick}/>

            </div>
        </div>
    )
}

/*  
    STOPPROPAGATION É TIPO:

        "Ei, o clique aconteceu aqui neste card. Execute esta função (stopPropagation) e pare aqui.
        Não 'borbulhe' este evento de clique para nenhum componente pai."
*/  