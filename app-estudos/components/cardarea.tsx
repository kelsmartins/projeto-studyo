import {Card} from '@/components/card'
import { useEffect, useState } from 'react';
import { AssuntoType } from '@/types/assuntotype';
import { Assuntos } from '@/data/assuntos';

type Props = {
    title: string;
    code: number
}

export function CardArea({title, code}: Props){

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

        Assuntos.forEach((assunto) => {
            
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
    }, []);
    
    return (
        <div className="min-h-[190px] w-[100%] mx-auto flex flex-col">
            <div className='w-full h-[40px] flex items-center'>
                <h2 className='text-xl px-4'>{title}</h2>
            </div>                           {/*padding para alinhar ponta do conteudo aos titulos e dar esço no fim, gap-x-4, espacamento entre elementos dentro da div*/}
            <div className='w-full h-[170px] p-4 gap-x-4 flex flex-row justify-start items-center overflow-x-auto flex-nowrap no-scrollbar'> 
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
            </div>            
        </div>
    )
}
