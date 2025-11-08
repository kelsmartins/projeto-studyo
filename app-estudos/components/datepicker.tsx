import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from 'react-datepicker';
// import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

registerLocale('pt-BR', ptBR)

export const DatePickerComponent = () => {

    const [date, setDate] = useState(new Date())

    function handleSetDate(date: Date | null){
        if(date){
            setDate(date)
        }
    }

    return (
        <DatePicker selected={date}
            onChange={handleSetDate}
            locale={`pt-BR`}
            className='w-full h-[40px] border-1 border-zinc-700 rounded-md mb-3'
        />
    )

}




// npm install react-dactepicker --save +  npm install date-fns + npm install @types/react-datepicker --save-dev