import {Link, useLocation, useNavigate} from "react-router-dom";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "@/reducers/UserSlice";
import { useEffect } from "react";


export function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Redirect to login when logged out
    }
  }, [isAuthenticated, navigate]); // Trigger when authentication changes

  // Hide navigation on specific routes
  const hideNavbarRoutes = ["/", "/signup"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  // Only render the navigation bar if `shouldShowNavbar` is true
  if (!shouldShowNavbar) return null;

  return (
    <header className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-between items-center">
          <div className="flex space-x-4">
            <li>
              <Link
                to="/dashboard"
                className="text-gray-300 font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/field"
                className="text-gray-300 font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Field
              </Link>
            </li>
            <li>
              <Link
                to="/crop"
                className="text-gray-300 font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Crop
              </Link>
            </li>
            <li>
              <Link
                to="/staff"
                className="text-gray-300 font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                to="/log"
                className="text-gray-300 font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Log
              </Link>
            </li>
          </div>
          <li>
            <Button
              onClick={() => {
                dispatch(logOutUser()); // Update authentication state first
                localStorage.removeItem("jwt_token"); // Remove token

                setTimeout(() => {
                  navigate("/"); // Navigate after state updates
                }, 100); // Small delay to ensure Redux updates before navigation
              }}
              className="text-gray-300 font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
