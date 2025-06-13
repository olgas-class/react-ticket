import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main>
      <div className="container">
        <h1 className="text-center my-5">404 NOT FOUND</h1>
        <Link to="/">Torna alla home</Link>
      </div>
    </main>
  );
};

export default Page404;
