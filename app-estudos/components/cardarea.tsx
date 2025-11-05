import {Card} from '@/components/card'

// export function CardArea(){
//     return (
//         <div className="min-h-[190px] w-[100%] mx-auto flex flex-col">
//                              {/*padding para alinhar ponta do conteudo aos titulos e dar esço no fim, gap-x-4, espacamento entre elementos dentro da div*/}
//             <div className='w-full h-full p-4 gap-x-4 gap-y-4 flex flex-row justify-start items-center'> 
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
                
//             </div>            
//         </div>
//     )
// }

export function CardArea(){
    return (
                            
            <div className='w-full h-full p-4 gap-x-4 gap-y-4 flex flex-row justify-start items-center bg-red-300 flex-wrap overflow-y-auto no-scrollbar'> 
                <Card />         {/*padding para alinhar ponta do conteudo aos titulos e dar esço no fim, gap-x-4, espacamento entre elementos dentro da div*/}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>           
    )
}