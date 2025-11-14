import { useState } from "react"
import { Button } from "./button"
import { DatePickerComponent } from "./datepicker"
import { TopCategoryComponent } from "./categorycomponent"
import { DropzoneComponent } from "./dropzonecomponent"

type Props = {
    handleCloseNewCard: () => void;
    handleSaveNewCard: (title: string, date: Date, files?: File[], link?: string) => void;
}

export function NovoCard({handleCloseNewCard, handleSaveNewCard}: Props) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date())
    const [link, setLink] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);


    function handlePickDate(newDate: Date){ // atribuir valor de pickdate do componente filho
        setDate(newDate);
    }

    function atLeastTwoFilledFields(){
        if(title != '' && link != '' && selectedFiles){
            return true;
        } else if(title != '' && link != '' && !selectedFiles){
            return true;   
        } else if(title != '' && link == '' && selectedFiles){
            return true;   
        } else {
            return false;
        }
    }

    function isFieldsEmpty(){
        
        if(title =='' && link == '' && !selectedFiles){
            alert('titulo e uma fonte digital obrigatorios')
        } else if(link == '' && !selectedFiles){
            alert('adicione ao menos uma fonte digital')
        } else if(title == '' && (link != '' || selectedFiles)){
            alert('tem fonte digital mas nao tem titulo')
        }

    }

    function handleClick(){
        if(atLeastTwoFilledFields()){
                handleSaveNewCard(title, date, selectedFiles, link ); // enviar esses parametros para o componente pai
                handleCloseNewCard();
        } else {
            isFieldsEmpty();
        }
    }

    function getSelectedFiles(newFile: File){
       setSelectedFiles(prev => [...prev, newFile]) // adicionar à lista existente
    }

    return (
        <div className="w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" onClick={handleCloseNewCard}>
            <div className="w-[350px] h-[500px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}> {/* explicacao linha 52 */}

                <TopCategoryComponent />

                <div className="flex flex-col flex-1 p-4">

                    <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase text-zinc-900">novo assunto</h2> {/* 38 caracteres*/}

                    <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">título</h3>        
                    <input type="text"
                        className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600"
                        value={title}
                        onChange={text => setTitle(text.target.value)}
                    />

                    <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">data agendada</h3>
                    <DatePickerComponent onPick={handlePickDate} />

                    <h3 className="mb-1 text-sm uppercase text-zinc-600 font-bold">Arquivo</h3>
                    <DropzoneComponent getSelectedFiles={getSelectedFiles}/>
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
        </div>
    )
}

/*  
    STOPPROPAGATION É TIPO:

        "Ei, o clique aconteceu aqui neste card. Execute esta função (stopPropagation) e pare aqui.
        Não 'borbulhe' este evento de clique para nenhum componente pai."
*/  