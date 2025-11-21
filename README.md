<div style={display: 'flex'}>
  <img src="/app-estudos/public/studyorob.png" alt="Logo do projeto" width="100" height="100" />
  <img src="/app-estudos/public/studyo_letra.png" alt="Logo do projeto" width="150" height="150" />
</div>

## Studyo
   Plataforma de estudos online onde o usuário cadastra assuntos a serem estudados em cartões que os auxilia com informações como: o título, a data em que o assunto será estudado e as fontes de estudo (que podem ser tanto links de sites ou videos no YouTube, quanto arquivos pdf).  
   
  🚨 Nota do autor: Projeto em estado inicial, atualmente trabalhando no frontend
<div>
  Link do Protótipo:
  https://projeto-studyo.vercel.app/
</div>

## Pré-requisitos para rodar localmente

 ### FRONTEND
- #### nodejs
- #### Instalação de dependências

  - #### DatePicker
    ```
      npm install react-dactepicker --save
      npm install date-fns
    npm install @types/react-datepicker --save-dev
    ```

    - ##### No componente DatePicker, ideal importar:
      ```
          import { useState } from 'react'
          import DatePicker from 'react-datepicker'
          import "react-datepicker/dist/react-datepicker.css";
          import { registerLocale } from 'react-datepicker';
          import { ptBR } from 'date-fns/locale'

          registerLocale('pt-BR', ptBR)
      ```

    - #### Dropzone
      ```
        npm install react-dropzone
      ```
        - ##### No componente Dropzone, importar:
          ```
            import  {useDropzone} from 'react-dropzone'
          ```
        - ##### Usar propriedades para manipular os arquivos de Dropzone:
          ```
            export const DropzoneComponent = ({getSelectedFiles}: Props) => {
            const {getRootProps, getInputProps, acceptedFiles} = useDropzone();

            useEffect(() => {
                acceptedFiles.forEach(file => {
        
            });
            }, [acceptedFiles]);
          ```

  - #### Axios
    ```
      npm install axios
    ```

  - #### React-icons
    ```
      npm install react-icons
    ```
#### Me encontre nas redes sociais:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kelso-martins-74621b128/)
