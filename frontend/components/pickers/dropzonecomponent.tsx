'use client'
import { useEffect } from 'react';
import  {useDropzone} from 'react-dropzone'
import { FiUpload } from "react-icons/fi";

type Props = {
    getSelectedFiles: (newFile: File) => void;
}

export const DropzoneComponent = ({getSelectedFiles}: Props) => {
    const {getRootProps, getInputProps, acceptedFiles} = useDropzone();

    useEffect(() => {
        acceptedFiles.forEach(file => { // para cada arquivo, adicionar ao arraay
        getSelectedFiles(file);
        });
    }, [acceptedFiles]);

    

    return (
        <div className='w-full h-[80px] border border-dashed rounded-md border-zinc-700 mb-3 flex flex-col justify-center items-center' {...getRootProps()}>
            <input {...getInputProps()}/>
            <FiUpload className='text-zinc-600 size-5 my-1'/>
            <p className='text-zinc-600 text-sm'>Arraste um arquivo ou clique aqui</p>
        </div>
    )
}

// npm install react-dropzone