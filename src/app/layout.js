import { Provider } from "./Providers";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"],
                        weight: [ "100", "300", "400","600" ] });

export const metadata = {
  title: "Coders United",
  description: "Web de desarrollo para el grupo de coders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`w-screen h-screen ${poppins.className}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
