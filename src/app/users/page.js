import CardComponentUser from "../components/CardUser";

export const metadata = {
   title: "User-Bootstrap/Nextjs",
};
const UsersPage = () => {
   return (
      <div class="text-center ">
         <h1 class="display-2">Usuarios</h1>
         <hr />
         <CardComponentUser />
      </div>
   );
};
export default UsersPage;
