import Link from "next/link";
import InfoGeneral from "../../../../../../../components/proyectoGeneral/infoGeneral";
import CuadroVisual from "../../../../../../../components/proyectoGeneral/cuadroVisual";
import SideBar from "../../../../../../../components/proyectoGeneral/sideBar";

export default function IdProyecto({params}){

    return(
        <div className="flex flex-col lg:flex lg:flex-row">
            <div className="flex flex-col  justify-center w-[100vw] lg:w-[60vw] items-center lg:block">
                {/* Main */}
                
                {/* Tablero info general */}
                <InfoGeneral/>
                
                {/* navegacion del proyecto */}
                <CuadroVisual/>
                
            </div>
            <SideBar enlace={params.id}/>

        </div>
        
    )
}