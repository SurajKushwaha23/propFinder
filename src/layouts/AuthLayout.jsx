import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo"; // You'll need to create this component

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Logo className="h-16 w-auto" />
        </div>
        <Outlet />{" "}
        {/* This is where auth routes (login/register) will render */}
      </div>
    </div>
  );
};

export default AuthLayout;
