//sin esta importacion no funciona bootstrap con CSS
import "bootstrap/dist/css/bootstrap.css";

//sin esta importacion no funciona bootstrap con iconos
import "bootstrap-icons/font/bootstrap-icons.css";

//sin esta importacion no funciona bootstrap con JS
import BootstrapClient from "./components/BootstrapClient.js";
//Componentes visuales.
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import BootstrapIcons from "./components/BootstrapIcons.js";

export const metadata = {
   title: "Bootstrap/Nextjs",
   description:
      "Esta pagina es una practica de practica donde se utiliza Javascript con React, Next13 y Bootstrap",
};

const RootLayout = ({ children }) => {
   return (
      <html lang="en">
         <body>
            <BootstrapIcons />
            <NavbarComponent />
            {children}
            <BootstrapClient />
            <FooterComponent />
         </body>
      </html>
   );
};
export default RootLayout;
