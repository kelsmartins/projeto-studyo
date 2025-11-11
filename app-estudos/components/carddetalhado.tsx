import { AssuntoType } from "@/types/assuntotype"
import { Button } from "./button";

type Props = {
    assuntoData: AssuntoType;
    handleCloseDetails: () => void;
}

export function CardDetalhado({assuntoData, handleCloseDetails}: Props) {

    function handleConclude(){
        // fazer algo: excluir ou add à pasta 'concluídos'
        handleCloseDetails();
    }

    function handleChange(){
        // fazer algo: atualizar campos
    }

    return (
        <div className="w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" onClick={handleCloseDetails}>
            <div className="w-[350px] h-[400px] bg-white flex flex-col rounded-lg shadow-xl shadow-zinc-400" onClick={e => e.stopPropagation()}>

                <span className="bg-black h-[20px] w-full rounded-t-lg"></span> {/*  span do contexto/materia/categoria */} 
                <div className="flex-1 flex flex-col p-4"> {/*  div p restante dos elementos terem p-4  */} 
                    <div className="w-full h-[70px] flex flex-col items-center justify-center">
                        <h2 className="w-full h-[40px] text-base flex items-center justify-center font-bold text-zinc-600">{assuntoData.assunto}</h2> {/* 38 caracteres*/}
                        <h2 className="w-full h-[15px] text-base flex items-center justify-center font-bold text-zinc-500 mb-4">{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h2>
                    </div>
                    <div className="w-full h-[200px] flex flex-col">
                        <h3 className="mt-2 text-base font-bold text-zinc-600">Fontes digitais</h3>
                        <div className="flex-1 bg-red-500"></div>
                        <Button style="text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold" title="salvar" onClick={handleChange} />
                        <Button style="bg-zinc-700 mt-4 text-white font-bold hover:bg-zinc-600" title="concluir" onClick={handleConclude}/>
                    </div>
                </div>

            </div>
        </div>
    )
}