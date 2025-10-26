import {Card} from '@/components/card'

export function CardArea(){
    return (
        <div className="min-h-[190px] w-[100%] mx-auto border b-1 flex flex-col">
            <div className='w-full h-[40px] flex items-center'>
                <h2 className='text-xl px-4'>Título</h2>
            </div>                           {/*padding para alinhar ponta do conteudo aos titulos e dar esço no fim, gap-x-4, espacamento entre elementos dentro da div*/}
            <div className='w-full h-[170px] p-4 gap-x-4 bg-green-200 flex flex-row justify-start items-center overflow-x-auto flex-nowrap no-scrollbar'> 
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>            
        </div>
    )
}