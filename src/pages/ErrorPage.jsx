import { Link } from "react-router";

const ErrorPage = () => {
  return (

    <div className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-8xl font-bold text-red-500">

        404

      </h1>

      <p className="text-2xl mt-4">

        Oops! Page Not Found

      </p>

      <Link
        to="/"
        className="btn btn-success mt-8"
      >

        Go Home

      </Link>

    </div>

  );
};

export default ErrorPage;