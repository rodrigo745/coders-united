// componentes
import Dashboard from "@/components/dashboard/dashboard";

export default function RootLayout({ children, params}) {

    return (
        <div className="flex">
            <Dashboard ruta={params.name}/>
            <div className="p-10 py-20">
                {children}
            </div>
        </div>
    );
}