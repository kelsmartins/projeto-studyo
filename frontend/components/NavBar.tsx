import Image from "next/image";

const viewRoutes = [
    { name: 'Simples', href: '#', current: true },
    { name: 'Datas', href: '#', current: false },   
    { name: 'Calendário', href: '#', current: false },
    { name: 'Kanban', href: '#', current: false },
  ]

export function NavBar() {
    return(
        <nav className="h-screen w-[250px] bg-zinc-900 flex flex-col">
                  <header className="w-full h-[73px] flex justify-start items-center  shadow-xs shadow-zinc-600 px-4 mb-2">
                      <Image src="/studyo_logo.png" alt="studyo logo" width={160} height={160}/>
                  </header>
                  <section className="w-full h-[200px] px-4 flex flex-col text-zinc-400 font-bold">
                      <h2 className="h-[40px] uppercase text-sm flex justify-start items-center text-zinc-300">Visualização (não funcional)</h2>
                      <ul className="h-full w-full flex flex-col px-4 text-sm">
                          {viewRoutes.map((route) => (
                              <li key={route.name} className="w-full h-[35px] flex justify-start items-center hover:text-zinc-300 hover:text-base">
                                  <a href={route.href}>{route.name} (em construção)</a>
                              </li>
                          ))}
                      </ul>
                  </section>
        
              </nav> 
    )
}