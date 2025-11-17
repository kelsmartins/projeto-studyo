import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from 'react-datepicker';
import { ptBR } from 'date-fns/locale'

registerLocale('pt-BR', ptBR)

type Props = {
    onPick: (date: Date) => void; // pegar data e salvar no comp-pai (novocard)
}

export const DatePickerComponent = ({onPick}: Props) => {

    const [date, setDate] = useState(new Date());

    function handleSetDate(newDate: Date | null){
        if(newDate){
            setDate(newDate)
            onPick(newDate); // pegou a data da state e levou para a comp-pai(novocard)
        }
    }

    return (
        <DatePicker selected={date}
            onChange={handleSetDate}
            locale={`pt-BR`} // traduzir para portugues
            className={`w-full h-[40px] border border-zinc-700 rounded-md mb-3 text-zinc-600 text-md p-2`}
            dateFormat={`dd/MM/yyyy`} // padrozinar para formato brasileiro
            minDate={new Date()}
        />
    )

}




// npm install react-dactepicker --save +  npm install date-fns + npm install @types/react-datepicker --save-dev