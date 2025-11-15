import {Card} from '@/components/card'
import { useEffect, useState } from 'react';
import { AssuntoType } from '@/types/assuntotype';

type Props = {
    title: string;
    code: number;
    assuntos: AssuntoType[];
}

export function CardArea({title, code, assuntos}: Props){

    useEffect(() => {
    console.log("Assuntos recebidos:", assuntos);
    assuntos.forEach(a => {
      console.log("DataAgendada original:", a.dataAgendada);
      console.log("Convertido para Date:", new Date(a.dataAgendada));
    });
  }, [assuntos]);

    const [ today, setToday ] = useState<AssuntoType[]>([]);
    const [ tomorrow, setTomorrow ] = useState<AssuntoType[]>([]);
    const [ afterTomorrow, setAfterTomorrow ] = useState<AssuntoType[]>([]);
    const [ nextDays, setNextDays ] = useState<AssuntoType[]>([]);
  
    const hoje = new Date();
    hoje.setHours(0,0,0,0); // setar default meia noite

    const amanha = new Date();
    amanha.setDate(hoje.getDate() + 1);
    amanha.setHours(0,0,0,0); // setar default meia noite

    const depoisAmanha = new Date();
    depoisAmanha.setDate(hoje.getDate() + 2);
    depoisAmanha.setHours(0,0,0,0); // setar default meia noite

    useEffect(() => {

        setToday([]); // para nao ter objetos duplicados
        setTomorrow([]);
        setAfterTomorrow([]);
        setNextDays([]);

        assuntos.forEach((assunto) => {
            
            const dataAssunto = new Date(assunto.dataAgendada); // precisa criar nova data e atribuir a atual a ela
            dataAssunto.setHours(0,0,0,0) // depois setar default meia noite

            // assim, comparação fica mais simples
            if(dataAssunto.getTime() === hoje.getTime()){
                setToday(today => [...today, assunto]);
            } else if(dataAssunto.getTime() === amanha.getTime()){
                 setTomorrow(tomorrow => [...tomorrow, assunto]);
            } else if(dataAssunto.getTime() === depoisAmanha.getTime()){
                 setAfterTomorrow(afterTomorrow => [...afterTomorrow, assunto]);
            } else if(dataAssunto.getTime() > depoisAmanha.getTime()){  // se data for maior que hoje + 3
                 setNextDays(nextDays => [...nextDays, assunto]);
            }

        });
    }, [assuntos]);
    
    return (
        <div className="min-h-[200px] w-[100%] mx-auto flex flex-col">
            <div className='w-full h-[40px] flex items-center'>
                <h2 className='text-2xl px-4 font-bold text-zinc-800'>{title}</h2>
            </div>                           {/*padding para alinhar ponta do conteudo aos titulos e dar esço no fim, gap-x-4, espacamento entre elementos dentro da div*/}
            <div className='w-full h-full p-4 gap-x-4 flex flex-row justify-start items-center overflow-x-auto flex-nowrap no-scrollbar'> 
                {
                    code === 1 ? today.map(card => (
                        <Card key={card.id} assuntoData={card} />
                    )) : code === 2 ? tomorrow.map(card => (
                        <Card key={card.id} assuntoData={card} />
                    )) : code === 3 ? afterTomorrow.map(card => ( 
                       <Card key={card.id} assuntoData={card} />
                    )) : code === 4 ? nextDays.map(card => (
                       <Card key={card.id} assuntoData={card} />
                    )) : ''
                }
                { (code === 1 && today.length === 0) &&
                    <p className='text-black/40 text-md italic'>Nada para estudar hoje :D</p>
                }
                { (code === 2 && tomorrow.length === 0) &&
                    <p className='text-black/40 text-md italic'>Nada para estudar amanhã :D</p>
                }
                { (code === 3 && afterTomorrow.length === 0) &&
                    <p className='text-black/40 text-md italic'>Nada para estudar depois de amanhã :D</p>
                }
                { (code === 4 && nextDays.length === 0) &&
                    <p className='text-black/40 text-md italic'>Nada para estudar nos próximos dias :D</p>
                }
            </div>            
        </div>
    )
}
