import CardComponentUser from "../components/CardUser";

export const metadata = {
   title: "Users-Bootstrap/Nextjs",
};
const UsersPage = () => {
   return (
      <div className="text-center ">
         <h1 className="display-2">Usuarios</h1>
         <hr />
         <CardComponentUser />
      </div>
   );
};
export default UsersPage;
