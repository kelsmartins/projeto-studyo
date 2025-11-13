'use client'
import { useEffect } from 'react';
import  {useDropzone} from 'react-dropzone'

type Props = {
    getSelectedFile: (newFile: File) => void;
}

export const DropzoneComponent = ({getSelectedFile}: Props) => {
    const {getRootProps, getInputProps, acceptedFiles} = useDropzone();

    useEffect(()=>{
        if(acceptedFiles.length > 0){ // se lista de arquivos nao estiver vazia...
            getSelectedFile(acceptedFiles[0])
            // for(let files in acceptedFiles){
            //     getSelectedFile(acceptedFiles[files])
            // }
        }

    }, [acceptedFiles])
    

    return (
        <div className='w-full h-[70px] border border-dashed rounded-md border-zinc-700 mb-3 flex justify-center items-center' {...getRootProps()}>
            <input {...getInputProps()}/>
            <p className='text-zinc-600 text-sm'>Arraste um arquivo ou clique aqui</p>
        </div>
    )
}

// npm install react-dropzone