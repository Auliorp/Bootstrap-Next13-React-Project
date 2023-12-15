"use client";

import { useEffect } from "react";
//este componente permite que se use codigo JS en Bootstrap
const BootstrapClient = () => {
   useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
   }, []);

   return null;
};

export default BootstrapClient;
