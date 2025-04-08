import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { TopNav } from "../components/TopNav";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle would go here */}

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="md:pl-64">
        <TopNav />
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <Outlet /> {/* This is where dashboard routes will render */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
