export function Card() {
    return (
        <div className="h-[170px] w-[366px] rounded-lg flex-shrink-0 bg-zinc-800 flex">
            <span className="bg-red-500 w-[20px] h-full rounded-l-lg"></span>
            <div className="w-full rounded-r-lg flex flex-col p-4">
                <h3>21/10/2025</h3>
                <h2>Matemática: Funções</h2>
            </div>
        </div>
    )
}