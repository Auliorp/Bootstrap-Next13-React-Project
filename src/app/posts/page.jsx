import CardComponentPost from "../components/CardPost";
export const metadata = {
   title: "Posts-Bootstrap/Nextjs",
};
const PostPage = () => {
   return (
      <div className="text-center ">
         <h1 className="display-2">Posts</h1>
         <hr />
         <CardComponentPost />
      </div>
   );
};

export default PostPage;
