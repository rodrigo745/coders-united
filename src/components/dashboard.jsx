import Link from "next/link"

export default function Dashboard(){
    return(
        <div className="p-10 cuadro w-fit rounded-3xl mt-10">
            <div className="flex flex-col space-y-10">
                <Link href="/pages/inicio">Inicio</Link>
                <Link href="/pages/proyectos">Proyectos</Link>
                <Link href="/pages/ideas">Ideas</Link>
                <Link href="/pages/desarrolladores">Desarrolladores</Link>
                <Link href="/pages/perfil">Perfil</Link>
                <Link href="/pages/ayuda">Ayuda</Link>
            </div>
        </div>
    )
}