import { useState } from "react"
import { Button } from "./button"
import { DatePickerComponent } from "./datepicker"
import { TopCategoryComponent } from "./categorycomponent"
import { DropzoneComponent } from "./dropzonecomponent"
import { FaLink, FaFilePdf, FaBucket } from 'react-icons/fa6'

type Props = {
    handleCloseNewCard: () => void;
    handleSaveNewCard: (title: string, date: Date, files?: File[], links?: string[]) => void;
}

export function NovoCard({handleCloseNewCard, handleSaveNewCard}: Props) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [selectedLinks, setSelectedLinks] = useState<string[]>([]);

    const [category, setCategory] = useState('');
    const [color, setColor] = useState('')
    const [quickNotes, setQuickNotes] = useState('');

    const [inputLink, setInputLink] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);


    function handlePickDate(newDate: Date){ // atribuir valor de pickdate do componente filho
        setDate(newDate);
    }

    function atLeastTwoFilledFields(){
        if(title != '' && selectedLinks && selectedFiles){
            return true;
        } else if(title != '' && selectedLinks && !selectedFiles){
            return true;   
        } else if(title != '' && selectedLinks && selectedFiles){
            return true;   
        } else {
            return false;
        }
    }

    function isFieldsEmpty(){
        
        if(title =='' && selectedLinks && !selectedFiles){
            alert('titulo e uma fonte digital obrigatorios')
        } else if(selectedLinks && !selectedFiles){
            alert('adicione ao menos uma fonte digital')
        } else if(title == '' && (selectedLinks || selectedFiles)){
            alert('tem fonte digital mas nao tem titulo')
        }

    }

    function handleClick(){
        if(atLeastTwoFilledFields()){
                handleSaveNewCard(title, date, selectedFiles, selectedLinks ); // enviar esses parametros para o componente pai
                handleCloseNewCard();
        } else {
            isFieldsEmpty();
        }
    }

    function getSelectedFiles(newFile: File){
       setSelectedFiles(prev => [...prev, newFile]) // adicionar à lista existente
    }

    function handleGetLinks(){
        if(inputLink != ''){    
            setSelectedLinks(prev => [...prev, inputLink])
            setInputLink('')
        } else {
            alert('link não pode ser vazio')
        }
    }

   

    return (
        <div className="w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" onClick={handleCloseNewCard}>
            <main className="w-[600px] h-[600px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}> {/* explicacao linha 52 */}

                <header className="flex flex-col justify-between h-[50px] w-full items-center"> 
                    <TopCategoryComponent />
                     <h2 className="w-full h-[35px] text-base flex items-center justify-center font-bold text-center text-zinc-900">Novo Assunto</h2> {/* 38 caracteres*/}
                </header>
                <section className="flex flex-row flex-1 justify-between items-center">

                    <div className="w-[300px] h-full flex flex-col p-4">

                        {/* TITULO */}
                        <h3 className="mb-1 text-sm text-zinc-600 font-bold">Título</h3>        
                        <input type="text"
                            className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600"
                            placeholder="ex: Lógica de Programação"
                            value={title}
                            onChange={text => setTitle(text.target.value)}
                        />

                        {/* DATA */}
                        <h3 className="mb-1 text-sm text-zinc-600 font-bold">Data Agendada</h3>
                        <DatePickerComponent onPick={handlePickDate} />

                        {/* CATEGORIA */}
                        <h3 className="mb-1 text-sm text-zinc-500 font-bold">Categoria (Opcional)</h3>           
                        <input type="text"
                            className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                            placeholder="ex: Curso Informática Básica"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />

                        {/* COR */}
                        <h3 className="mb-1 text-sm text-zinc-500 font-bold">Cor (Opcional)</h3>
                        <ul className="h-[40px] w-full rounded-md mb-3 flex justify-between items-center gap-1">
                            <li className="rounded-md size-8 bg-white border-2 border-zinc-600"></li>
                            <li className="rounded-md size-8 bg-red-400 border-2 border-zinc-600"></li>
                            <li className="rounded-md size-8 bg-orange-400 border-2 border-zinc-600"></li>
                            <li className="rounded-md size-8 bg-yellow-400 border-2 border-zinc-600"></li>
                            <li className="rounded-md size-8 bg-green-400 border-2 border-zinc-600"></li>
                            <li className="rounded-md size-8 bg-blue-400 border-2 border-zinc-600"></li>
                            <li className="rounded-md size-8 bg-purple-400 border-2 border-zinc-600"></li>
                        </ul>


                        {/* NOTAS RÁPIDAS */}
                        <h3 className="mb-1 text-sm text-zinc-500 font-bold">Anotações rápidas (Opcional)</h3>           
                        <input type="text"
                            className="h-[80px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                            placeholder="ex: Curso Informática Básica"
                            value={quickNotes}
                            onChange={e => setQuickNotes(e.target.value)}
                        />

                    </div>

                    <div className="w-[300px] h-full flex flex-col p-4">

                        {/* LINK */}
                        <h3 className="mb-1 text-sm text-zinc-600 font-bold">Links (Site ou YouTube)</h3>           
                        <input type="text"
                            className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3"
                            placeholder="Pressione Enter para adicionar"
                            value={inputLink}
                            onChange={e => setInputLink(e.target.value)}
                            onKeyDown={e => {
                                if(e.key === 'Enter'){ // so executar se tecla enter foi pressionada
                                    handleGetLinks()
                                }
                            }}
                        />
                        <ul className="w-full h-[120px] mb-3 rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2">
                            {
                                selectedLinks && selectedLinks.length > 0 &&
                                selectedLinks.map(link => 
                                    <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200">
                                        <FaLink  className="text-zinc-500 size-4 font-bold" />
                                        <p className="text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center">{link}</p>
                                        <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                    </li>)
                            }
                        </ul>

                        {/* ARQUIVO */}
                        <h3 className="mb-1 text-sm text-zinc-600 font-bold">Arquivo</h3>
                        <DropzoneComponent getSelectedFiles={getSelectedFiles}/>
                        <ul className="w-full h-[120px] mb-3 rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2">
                            {
                                selectedFiles && selectedFiles.length > 0 &&
                                selectedFiles.map(file => 
                                    <li className="w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200">
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
                    <div className="w-full h-50 flex justify-end items-center">
                            <Button style="bg-zinc-900 text-white font-bold hover:bg-zinc-600" title="salvar" onClick={handleClick}/>
                    </div>
                </footer>
            </main>
        </div>
    )
}

/*  
    STOPPROPAGATION É TIPO:

        "Ei, o clique aconteceu aqui neste card. Execute esta função (stopPropagation) e pare aqui.
        Não 'borbulhe' este evento de clique para nenhum componente pai."
*/  