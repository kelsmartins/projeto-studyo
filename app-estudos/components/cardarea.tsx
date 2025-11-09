import {Card} from '@/components/card'
import { useEffect, useState } from 'react';
import { AssuntoType } from '@/types/assuntotype';

type Props = {
    title: string;
    code: number;
    assuntos: AssuntoType[];
}

export function CardArea({title, code, assuntos}: Props){

    const [ today, setToday ] = useState<AssuntoType[]>([]);
    const [ tomorrow, setTomorrow ] = useState<AssuntoType[]>([]);
    const [ afterTomorrow, setAfterTomorrow ] = useState<AssuntoType[]>([]);
    const [ nextDays, setNextDays ] = useState<AssuntoType[]>([]);
  
    const hoje = new Date();
    hoje.setHours(0,0,0,0);

    const amanha = new Date();
    amanha.setDate(hoje.getDate() + 1);

    const depoisAmanha = new Date();
    depoisAmanha.setDate(hoje.getDate() + 2);

    const proximosDias = new Date();
    proximosDias.setDate(hoje.getDate() + 3);
    proximosDias.setHours(0,0,0,0);
  
    useEffect(() => {

        setToday([]); // para nao ter objetos duplicados
        setTomorrow([]);
        setAfterTomorrow([]);
        setNextDays([]);

        assuntos.forEach((assunto) => {
            
            const dataAssunto = assunto.dataAgendada; 

            if (
                dataAssunto.getFullYear() === hoje.getFullYear() &&
                dataAssunto.getMonth() === hoje.getMonth() &&
                dataAssunto.getDate() === hoje.getDate()
            ) {
                setToday(today => [...today, assunto]);

            } else if (
                dataAssunto.getFullYear() === amanha.getFullYear() &&
                dataAssunto.getMonth() === amanha.getMonth() &&
                dataAssunto.getDate() === amanha.getDate()
            ) {
                setTomorrow(tomorrow => [...tomorrow, assunto]);
            } else if (
                dataAssunto.getFullYear() === depoisAmanha.getFullYear() &&
                dataAssunto.getMonth() === depoisAmanha.getMonth() &&
                dataAssunto.getDate() === depoisAmanha.getDate()
            ) {
               setAfterTomorrow(afterTomorrow => [...afterTomorrow, assunto])

            } else {
                const dataAssuntoNormalizada = new Date(dataAssunto);
                dataAssuntoNormalizada.setHours(0, 0, 0, 0);
                
                if (dataAssuntoNormalizada.getTime() >= proximosDias.getTime()) {
                    setNextDays(nextDays => [...nextDays, assunto])

                }
            }
        });
    }, [assuntos]);
    
    return (
        <div className="min-h-[200px] w-[100%] mx-auto flex flex-col">
            <div className='w-full h-[40px] flex items-center'>
                <h2 className='text-2xl px-4 font-bold text-white'>{title}</h2>
            </div>                           {/*padding para alinhar ponta do conteudo aos titulos e dar esço no fim, gap-x-4, espacamento entre elementos dentro da div*/}
            <div className='w-full h-full p-4 gap-x-4 flex flex-row justify-start items-center overflow-x-auto flex-nowrap no-scrollbar'> 
                {
                    code === 1 ? today.map(card => (
                        <Card key={card.id} assuntoData={card} />
                    )) : code === 2 ? tomorrow.map(card => (
                        <Card key={card.id} assuntoData={card} />
                    )) : code === 3 ? afterTomorrow.map(card => ( 
                       <Card key={card.id} assuntoData={card} />
                    )) : nextDays.map(card => (
                       <Card key={card.id} assuntoData={card} />
                    ))
                }
                { (code === 1 && today.length === 0) &&
                    <p className='text-white/40 text-lg italic'>Nada para estudar hoje :D</p>
                }
                { (code === 2 && tomorrow.length === 0) &&
                    <p className='text-white/40 italic'>Nada para estudar amanhã :D</p>
                }
                { (code === 3 && afterTomorrow.length === 0) &&
                    <p className='text-white/40 italic'>Nada para estudar depois de amanhã :D</p>
                }
                { (code === 4 && nextDays.length === 0) &&
                    <p className='text-white/40 italic'>Nada para estudar nos próximos dias :D</p>
                }
            </div>            
        </div>
    )
}
