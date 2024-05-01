// componentes
import Dashboard from "@/components/dashboard";

export default function RootLayout({ children }) {
    return (
        <div>
            <Dashboard/>
            {children}
        </div>
    );
  }
  