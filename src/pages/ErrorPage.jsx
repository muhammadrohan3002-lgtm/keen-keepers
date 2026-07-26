import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="my-6">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-green-900 text-white px-5 py-3 rounded"
      >
        Go Home
      </Link>

    </div>
  );
};

export default ErrorPage;