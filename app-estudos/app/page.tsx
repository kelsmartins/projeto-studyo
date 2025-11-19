'use client'
import {CardArea} from '@/components/cardarea';
import { AssuntoType } from '@/types/assuntotype';
import { useState } from 'react';
import { Assuntos} from '@/data/assuntos';
import axios from 'axios';
import { FormCard } from '@/components/formcard';

export default function Home() {

  const [newCardVisible, setNewCardVisible] = useState(false);
  const [assuntos, setAssuntos] = useState<AssuntoType[]>(Assuntos);

  function handleOpenNewCard(){
    setNewCardVisible(true);
  }

  function handleCloseNewCard(){
    setNewCardVisible(false);
  }

  // hospedando imagens em servidor online (banco de dados nao guarda arquivos) - CLOUDINARY
  async function handleSaveNewCard(title: string, date: Date, category?: string, color?: string, quickNotes?: string, links?: string[], files?: File[]) {

    const cardTest: AssuntoType = {
      id: crypto.randomUUID.toString(),
      assunto: title,
      dataAgendada: date,
      categoria: category,
      cor: color,
      notasRapidas: quickNotes,
      linksFonteDigital: links,
      arquivosFonteDigital: files
    }

    setAssuntos(prev => [...prev, cardTest])

      // // se enviou arquivo  (INICIO)  
      // const uploadedUrls: string[] = []; // teste

      // if(files){ // se existir arquivo
      //   for (const file of files) { // PARA CADA FILE EM FILES, FACA REQUISICAO  CLOUDINARY SO ACEITA UM ARQUIVO POR REQUISIÇÃO 
      //     const formData = new FormData();
      //       formData.append('file', file);
      //       formData.append('upload_preset', 'primeiropreset');
      //                                                               // minha url no cloudinary dil7jwa49
      //     const fileRes = await axios.post('https://api.cloudinary.com/v1_1/dil7jwa49/image/upload', // enviar somente imagem e devolver url
      //     formData                                                                               // para salvar no banco de dados
      //     );
      //     // alert('url arquivo: '+ fileRes.data.secure_url); TEST TEST TEST TEST TEST
      //     uploadedUrls.push(fileRes.data.secure_url); // teste: adiciona urls em cada posicao do vetor se tiver
      //   }
      // }
      // // se EXISTIREM ARQUIVOS (FIM)

      // // REQUISICAO PRA API DO BACKEND

      // try {
        
      //   const newId = crypto.randomUUID().toString();

      //   const res = axios.post('', {
      //     id: newId,
      //     dataAgendada: date,
      //     assunto: title,
      //     categoria: category,
      //     cor: color,
      //     notasRapidas: quickNotes,
      //     linkFonteDigital: links,
      //     arquivosFonteDigital: uploadedUrls
      //   })
      // } catch (error) {
      //   console.log(error)
      // }
  }
  
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen w-[300px] bg-zinc-900">
        
      </div>                                               {/* O min-w-0 permite que um item (flex-1) encolha para caber no layout, mesmo que o conteúdo dentro dele seja muito mais largo. */}
      <div className="h-screen w-[100%] flex-1 bg-gray-200 min-w-0">  {/* transformar num componente futuramente*/}
        <div className="h-[10%] w-[100%] flex flex-row items-center px-4 justify-between">
          <h2 className="text-3xl font-bold text-zinc-800">Estudos</h2>
          <button className='w-[110px] h-[40px] bg-zinc-800 rounded-md font-bold p-1 text-sm text-white/80 hover:bg-zinc-700 transition-colors cursor-pointer' 
          onClick={handleOpenNewCard}>novo assunto</button>
        </div>                      
         <div className=" w-full h-[90%] overflow-y-auto no-scrollbar">
            <CardArea title='Hoje'code={1}assuntos={assuntos}/>
            <CardArea title='Amanhã' code={2} assuntos={assuntos}/>
            <CardArea title='Depois de amanhã' code={3} assuntos={assuntos}/>
            <CardArea title='Próximos dias' code={4} assuntos={assuntos}/>
        </div>
      </div>
        {newCardVisible &&
        <FormCard
          handleCloseCard={handleCloseNewCard}
          handleSaveCard={(title: string, date: Date, category?: string, color?: string, quickNotes?: string, links?: string[], files?: File[]) =>
          handleSaveNewCard(title, date, category, color, quickNotes, links, files)
          }
        />}
      
    </div>
  );
}
