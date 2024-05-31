import InfoGeneral from "../../../../../../../components/proyectoGeneral/infoGeneral";
import CuadroVisual from "../../../../../../../components/proyectoGeneral/cuadroVisual";
import SideBar from "../../../../../../../components/proyectoGeneral/sideBar";
// para acceder a los datos de mongo
import proyecto from "../../../../../../../models/proyecto";
import connectDB from "../../../../../../../libs/mongoose";

async function LoadDatos(id){
    connectDB;
    const datos = await proyecto.findById(id);
    const res = await JSON.parse(JSON.stringify(datos));
    return res;
}

export default async function IdProyecto({params}){

    
    const datosProyecto = await LoadDatos(params.id);


    return(
        <div className="flex flex-col lg:flex lg:flex-row">
            <div className="flex flex-col  justify-center w-[100vw] lg:w-[60vw] items-center lg:block">
                {/* Main */}
                
                {/* Tablero info general */}
                <InfoGeneral datos={datosProyecto}/>
                
                {/* navegacion del proyecto */}
                <CuadroVisual/>
                
            </div>
            <SideBar datos={datosProyecto} enlace={params.id}/>

        </div>
        
    )
}