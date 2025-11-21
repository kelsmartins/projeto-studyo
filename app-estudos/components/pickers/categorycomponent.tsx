'use client'

type Props = {
    defColor: string;
}

export function TopCategoryComponent({defColor}: Props){
    return (
        <span className={`${defColor} h-[15px] w-full rounded-t-lg`}></span>
    )
}

export function LeftCategoryComponent({defColor}: Props){
    return (
        <span className={`${defColor} w-[15px] h-full rounded-l-lg`}></span>
    )
}







