//sin esta importacion no funciona bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Inter } from "next/font/google";
import BootstrapClient from "./components/BootstrapClient.js";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Bootstrap/Nextjs",
   description:
      "Esta pagina es una practica de practica donde se utiliza Javascript con React, Next13 y Bootstrap",
};

const RootLayout = ({ children }) => {
   return (
      <html lang="en">
         <body className={inter.className}>
            {children}
            <BootstrapClient />
         </body>
      </html>
   );
};
export default RootLayout;
