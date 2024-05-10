import Link from "next/link";

export default function IdProyecto({params}){

    return(
        <div>
            <p>Proyecto individual</p><br />
            <Link href={`./${params.id}/tareas`}>Crear tareas</Link>
        </div>
    )
}