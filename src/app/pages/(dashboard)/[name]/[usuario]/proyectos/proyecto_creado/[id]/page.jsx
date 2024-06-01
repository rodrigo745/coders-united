import InfoGeneral from "../../../../../../../../components/proyectoGeneral/infoGeneral";
import CuadroVisual from "../../../../../../../../components/proyectoGeneral/cuadroVisual";
import SideBar from "../../../../../../../../components/proyectoGeneral/sideBar";
import EditarIntegrantes from "../../../../../../../../components/proyectoGeneral/cuadro/editarIntegrantes";

// para acceder a los datos de mongo
import proyecto from "../../../../../../../../models/proyecto";
import connectDB from "../../../../../../../../libs/mongoose";

async function LoadDatos(id){
    connectDB;
    const datos = await proyecto.findById(id);
    const res = await JSON.parse(JSON.stringify(datos));
    return res;
}

export default async function IdProyecto({params, Children}){

    
    const datosProyecto = await LoadDatos(params.id);

    function Contenido(color){
        const Ncolor = color;
        return Ncolor;
    }

    return(
        <div className="flex flex-col lg:flex lg:flex-row">
            <div className="flex flex-col  justify-center w-[100vw] lg:w-[60vw] items-center lg:block">
                {/* Main */}
                
                {/* Tablero info general */}
                <InfoGeneral datos={datosProyecto}/>
                
                {/* navegacion del proyecto */}
                <CuadroVisual editarIntegrantes={<EditarIntegrantes/>}/>
                
            </div>
            <div className="lg:w-[320px] mx-5 lg:mx-10 mt-10 lg:mt-0 mb-10">
                <SideBar datos={datosProyecto} enlace={params.id}/>
                <div className="cuadro pb-4 rounded-b-lg px-3">
                    <p  className="rounded-full text-center amarilloBack cursor-pointer p-2 text-black font-bold ">Editar integrantes</p>

                </div>

            </div>

        </div>
        
    )
}