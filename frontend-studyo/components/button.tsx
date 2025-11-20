type Props = {
    style: string;
    title: string;
    onClick?: () => void;
}

export function Button({style, title, onClick}: Props){

    
    return (
        <button className={`w-[100px] h-[30px] ${style} rounded-md cursor-pointer text-sm`} onClick={onClick}>{title}</button>
    )
}