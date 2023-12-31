const FooterComponent = () => {
   return (
      <footer className="bg-body-tertiary text-center">
         <div className="container p-1 pb-0">
            {/* Section: Social media */}
            <section className="mb-1">
               {/* Facebook  */}
               <a
                  data-mdb-ripple-init
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/aulioalejandro.roveroparedes"
                  role="button"
                  target="_blank"
               >
                  <i className="bi bi-facebook"></i>
               </a>

               {/* Twitter */}
               <a
                  data-mdb-ripple-init
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="https://twitter.com/RoveroAulio"
                  role="button"
                  target="_blank"
               >
                  <i className="bi bi-twitter"></i>
               </a>

               {/* Instagram  */}
               <a
                  data-mdb-ripple-init
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/aulioroverop/"
                  role="button"
                  target="_blank"
               >
                  <i className="bi bi-instagram"></i>
               </a>

               {/* Linkedin */}
               <a
                  data-mdb-ripple-init
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com/in/auliorovero/"
                  role="button"
                  target="_blank"
               >
                  <i className="bi bi-linkedin"></i>
               </a>
               {/* Github */}
               <a
                  data-mdb-ripple-init
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="https://github.com/Auliorp"
                  role="button"
                  target="_blank"
               >
                  <i className="bi bi-github"></i>
               </a>
            </section>
         </div>
         {/* Copyright */}
         <div
            className="text-center p-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
         >
            © 2023 Copyright:
            <a className="text-body" href="https://github.com/Auliorp">
               {` Aulio Rovero`}
            </a>
         </div>
      </footer>
   );
};

export default FooterComponent;
