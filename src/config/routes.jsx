import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const Properties = lazy(() => import("../pages/Properties"));
const PropertyDetails = lazy(() => import("../pages/PropertyDetails"));
const Login = lazy(() => import("../pages/Login"));
const Contact = lazy(() => import("../pages/Contact"));
const Agents = lazy(() => import("../pages/Agents"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Register = lazy(() => import("../pages/Register"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = ({ isAuthenticated }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agents" element={<Agents />} />
        </Route>

        {/* Auth routes with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected routes with DashboardLayout */}
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
