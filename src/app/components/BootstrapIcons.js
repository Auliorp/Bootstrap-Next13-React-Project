"use client";

import { useEffect } from "react";

const BootstrapIcons = () => {
   useEffect(() => {
      // Importar dinámicamente la hoja de estilos de los iconos de Bootstrap
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
         "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css";
      document.head.appendChild(link);
   }, []);

   return null; // Este componente no renderiza nada visual, solo agrega las fuentes de Google
};

export default BootstrapIcons;
