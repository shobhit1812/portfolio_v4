import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1641142058859-75ea93781f47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex flex-col items-center text-center text-slate-800 -mt-96 space-y-6 font-poppins">
        <h1 className="text-6xl md:text-6xl">
          {status} - {statusText}
        </h1>
        <h2 className="text-3xl md:text-4xl">
          Sorry, we couldn’t find the page you’re looking for.
        </h2>
        <Link to="/">
          <button className="text-xl md:text-2xl">&larr; Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
