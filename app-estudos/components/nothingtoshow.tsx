import { PiSmileySadThin } from "react-icons/pi";

type Props = {
    height: string;
}

export function NothingToShow({height}: Props){
    return (
        <div className="h-[${height}] w-full mt-1 flex flex-col justify-center items-center rounded-md border border-zinc-300 text-zinc-300 mb-3" style={{height: height}}>
            <PiSmileySadThin  className="size-8"/>
            <p>Nada para mostrar</p>
        </div>
    )
}