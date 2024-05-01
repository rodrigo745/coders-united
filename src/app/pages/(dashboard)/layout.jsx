// componentes
import Dashboard from "@/components/dashboard";

export default function RootLayout({ children }) {
    return (
        <div className="flex">
            <Dashboard/>
            {children}
        </div>
    );
  }
  
//   En Whatsapp...