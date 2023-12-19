import Image from "next/image";
//aca traemos la informacion de la api
const fetchUsers = async () => {
   try {
      const res = await fetch("https://reqres.in/api/users");
      //aca transformamos la data a formato json
      const data = await res.json();
      //aca retornamos la data para ser usada mas abajo
      return data.data;
   } catch (error) {
      console.error("Este es el error:", error);
   }
};

const CardComponentUser = async () => {
   //aca llamamos la funcion con la data.
   const user = await fetchUsers();

   return (
      <div className="container mt-2">
         <div className="row justify-content-center">
            {user.map((user) => (
               <div
                  className="card m-2"
                  style={{ width: "18rem" }}
                  key={user.id}
               >
                  <Image
                     src={user.avatar}
                     className="card-img-top "
                     alt="Foto de perfil usuario"
                     width={100}
                     height={100}
                     priority={true}
                     style={{ width: "100%", height: "auto" }}
                  />
                  <div className="card-body">
                     <h2 className="card-title">{`${user.first_name} ${user.last_name}`}</h2>
                     <h6 className="card-title">{user.email}</h6>
                     <p className="card-text">
                        {`Some quick example text to build on the card title and make up
               the bulk of the card's content.`}
                     </p>
                     <a href="#" className="btn btn-primary">
                        Go somewhere
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CardComponentUser;
