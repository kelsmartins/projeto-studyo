import { useState } from "react"
import { Button } from "../button"
import { DatePickerComponent } from "../pickers/datepicker"
import { TopCategoryComponent } from "../pickers/categorycomponent"
import { DropzoneComponent } from "../pickers/dropzonecomponent"
import { FaLink, FaFilePdf, FaBucket } from 'react-icons/fa6'
import { ColorComponent } from "../pickers/colorcomponent"
import { NothingToShow } from "../nothingtoshow"

type Props = {
    initialData?: {
        title: string,
        date: Date,
        category?: string,
        color?: string,
        quickNotes?: string,
        links?: string[],
        files?: File[]
    };
    handleCloseCard: () => void;
    handleSaveCard: (title: string, date: Date, category?: string, color?: string, quickNotes?: string, links?: string[], files?: File[]) => void;
    getFields?: (updatedTitle: string, updatedDate: Date, updatedCategory: string, updatedColor: string, updatedQuickNotes: string, updatedLinks?: string[], updatedFiles?: File[]) => void;
}

export function FormCard({initialData, handleCloseCard, handleSaveCard, getFields}: Props) {

    const [title, setTitle] = useState(initialData?.title ?? '');
    const [date, setDate] = useState(initialData?.date ?? new Date());

    const [category, setCategory] = useState(initialData?.category ?? '');
    const [color, setColor] = useState(initialData?.color ?? 'bg-zinc-700')
    const [quickNotes, setQuickNotes] = useState(initialData?.quickNotes ?? '');

    const [inputLink, setInputLink] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File[]>(initialData?.files ?? []);
    const [selectedLinks, setSelectedLinks] = useState<string[]>(initialData?.links ?? []);

    const [isEditing, setIsEditing] = useState(!!initialData); // explicacao linha 255

    // funcoes pick fields
    function handlePickDate(newDate: Date){ // atribuir valor de pickdate do componente filho
        setDate(newDate);
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

    function getColor(newColor: string){
        setColor(newColor)
    }

    // funcoes pick fields

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

    // se IsEditing = atualizar dados em card, se nao = salvar como novo card 
    function handleClick(){
        if(atLeastTwoFilledFields()){
            if(isEditing && getFields){
                getFields(title, date, category, color, quickNotes, selectedLinks, selectedFiles);
                handleCloseCard()
            } else {
                handleSaveCard(title, date, category, color, quickNotes, selectedLinks, selectedFiles); // enviar esses parametros para o componente pai
                handleCloseCard();
            }
        } else {
            isFieldsEmpty();
        }
    }

    return (
        <div className={`w-full h-full fixed inset-0 flex items-center justify-center z-50 ${isEditing ? '': 'bg-black/30 backdrop-blur-sm'}`}>
            <main className="w-[600px] h-[600px] bg-white flex flex-col rounded-lg" onClick={e => e.stopPropagation()}> {/* explicacao linha 52 */}

                <header className="flex flex-col justify-between h-[50px] w-full items-center"> 
                    <TopCategoryComponent defColor={color}/>
                     <h2 className="w-full h-[30px] text-base flex items-center justify-center font-bold text-center text-zinc-600">{initialData ? 'Atualizar Assunto' :  'Novo Assunto'}</h2> {/* 38 caracteres*/}
                </header>
                <section className="flex flex-row flex-1 justify-between items-center">

                    <div className="w-[300px] h-full flex flex-col p-4">

                        {/* TITULO */}
                        <h3 className="mb-1 text-sm text-zinc-600 font-bold">Título</h3>        
                        <input type="text"
                            className="h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder:italic text-zinc-600"
                            placeholder="ex: Lógica de Programação"
                            value={title}
                            onChange={text => setTitle(text.target.value)}
                            maxLength={62}
                        />

                        {/* DATA */}
                        <h3 className="mb-1 text-sm text-zinc-600 font-bold">Data Agendada</h3>
                        <DatePickerComponent onPick={handlePickDate} />

                        {/* CATEGORIA */}
                        <h3 className="mb-1 text-sm text-zinc-500 font-bold">Categoria (Opcional)</h3>           
                        <input type="text"
                            className="h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3 placeholder:italic"
                            placeholder="ex: Curso Informática Básica"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />

                        {/* COR */}
                        <h3 className="mb-1 text-sm text-zinc-500 font-bold">Cor (Opcional)</h3>
                        <ColorComponent getColor={getColor}/>


                        {/* NOTAS RÁPIDAS */}
                        <h3 className="mb-1 text-sm text-zinc-500 font-bold">Anotações rápidas (Opcional)</h3>           
                        <textarea
                            className="h-[80px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3 resize-none placeholder:italic"
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
                        {
                            selectedLinks && selectedLinks.length > 0 &&
                            <ul className="w-full h-[120px] mb-3 rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2">
                                {selectedLinks.map((link, index) => 
                                    <li  key={index}> 
                                        <a href={link} 
                                            target="_blank" // para abrir em outra guia
                                            className="w-full h-10 bg-zinc-50 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-100">
                                                <FaLink  className="text-zinc-500 size-4 font-bold" />
                                                <p className="text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center hover:text-zinc-800">{link}</p>
                                                <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                        </a>
                                    </li>)}
                            </ul>
                        }
                        {
                            selectedLinks.length == 0 &&
                            <NothingToShow height="120px" label="nenhum link adicionado"/>
                        }
                        
                        {/* ARQUIVO */}
                        <h3 className="mb-1 text-sm text-zinc-600 font-bold">Arquivos</h3>
                        <DropzoneComponent getSelectedFiles={getSelectedFiles}/>
                        {
                            selectedFiles && selectedFiles.length > 0 &&
                            <ul className="w-full h-[120px] mb-3 rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2">
                                {
                                    selectedFiles.map((file, index)  => 
                                        <li className="w-full h-10 bg-zinc-50 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200" key={index}>
                                            <FaFilePdf  className="text-zinc-500 size-4 font-bold" />
                                            <p className="text-xs text-zinc-600 h-full w-[90%] flex justify-start items-center truncate">{file.name}</p>
                                            <FaBucket className="text-zinc-500 size-4 font-bold hover:text-red-400"/>
                                        </li>)
                                }
                            </ul>
                        } 
                        {
                            selectedFiles.length == 0 && 
                             <NothingToShow height="120px" label="nenhum arquivo adicionado"/>
                        }

                    </div>
                </section>
                <footer className="w-full h-[60px] flex flex-col justify-between px-4">
                    <span className="w-full h-[4px] bg-zinc-400"></span>

                    <div className="w-full h-50 flex justify-between items-center">
                            <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="voltar" onClick={handleCloseCard} />
                            <Button style="bg-zinc-700 text-white font-bold hover:bg-zinc-600" title="concluir" onClick={handleClick}/>
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



//              const [isEditing, setIsEditing] = useState(!!initialData);
//
// O que acontece aqui
// useState(...) → inicializa um estado React.

// !!initialData → é um truque em JavaScript para converter qualquer valor em um booleano:

// Se initialData for undefined, null ou vazio → !!initialData vira false.

// Se initialData tiver algum valor (um objeto válido) → !!initialData vira true.

// Ou seja:

// Se o componente recebeu initialData, o estado inicial de isEditing será true.

// Se não recebeu, será false.