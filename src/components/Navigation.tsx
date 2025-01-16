import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <header className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-10">
            <nav className="container mx-auto p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/field"
                              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md">Field</Link>
                    </li>
                    <li>
                        <Link to="/crop"
                              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md">Crop</Link>
                    </li>
                    <li>
                        <Link to="/staff"
                              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md">Staff</Link>
                    </li>
                    <li>
                        <Link to="/vehicle"
                              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md">Vehicle</Link>
                    </li>
                    <li>
                        <Link to="/equipment"
                              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md">Equipments</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
