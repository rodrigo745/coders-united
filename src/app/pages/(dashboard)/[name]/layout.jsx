
// componentes
import Dashboard from "../../../../components/dashboard/dashboard";
import DashboardMovil from "../../../../components/dashboard/dashboardMovil";

export default async function RootLayout({ children, params}) {

    return (
        <div className="flex flex-col md:flex md:flex-row w-full h-full">
            <div className="hidden md:block fixed">
                <div className="relative">
                    <Dashboard ruta={params.name}/>

                </div>
            </div>
            <div className="block md:hidden">
                <DashboardMovil ruta={params.name}/>
            </div>
            <div className="md:p-10 md:py-20 mt-8 md:mt-0 md:ml-72">
                {children}
            </div>
        </div>
    );
}