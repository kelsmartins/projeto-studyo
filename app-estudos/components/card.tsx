import { AssuntoType } from "@/types/assuntotype"

type Props = {
    assuntoData: AssuntoType;
}

export function Card({assuntoData}: Props) {
    return (
        <div className="h-[150px] w-[300px] rounded-lg flex-shrink-0 bg-zinc-800 flex">
            <span className="bg-red-500 w-[20px] h-full rounded-l-lg"></span>
            <div className="w-full rounded-r-lg flex flex-col p-4">
                <h3>{new Date(assuntoData.dataAgendada).toLocaleDateString()}</h3>
                <h2>{assuntoData.assunto}</h2>
            </div>
        </div>
    )
}