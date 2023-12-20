//en esta funcion traemos la informacion de la api
const fetchPosts = async () => {
   try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      //aca transformamos la data a formato json
      const data = await res.json();
      //aca retornamos la data para ser usada mas abajo
      return data;
   } catch (error) {
      console.log("Este es el mensaje de error:", error);
   }
};

const CardComponentPost = async () => {
   //aca llamamos la funcion con la data de la API
   const post = await fetchPosts();

   return (
      <div className="container mt-2">
         <div className="row justify-content-center">
            {post.map((post) => (
               <div
                  className="card m-2"
                  style={{ width: "18rem" }}
                  key={post.id}
               >
                  <div className="card-body d-flex flex-column">
                     <h5 className="card-title">{post.title}</h5>
                     <p className="card-text">{post.body}</p>
                     <a
                        href="#"
                        className="btn btn-primary btn-sm mt-auto mx-5"
                     >
                        Go somewhere
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CardComponentPost;
