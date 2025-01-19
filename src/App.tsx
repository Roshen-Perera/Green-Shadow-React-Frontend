import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import { Field } from './pages/Field.tsx';
import { Crop } from './pages/Crop.tsx';
import { Staff } from './pages/Staff.tsx';
import {Log} from "@/pages/Log.tsx";
import {Equipment} from "@/pages/Equipment.tsx";
import {Vehicle} from "@/pages/Vehicle.tsx";
import Login from "@/pages/Login.tsx";
import Register from './pages/Register.tsx';
function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/field', element : <Field/>},
                { path : '/crop', element : <Crop/>},
                { path : '/staff', element : <Staff/>},
                { path : '/log', element : <Log/>},
                { path : '/vehicle', element : <Vehicle/>},
                { path : '/equipment', element : <Equipment/>},
                { path : '/login', element : <Login/>},
                { path : '/signup', element : <Register/>},
            ]
        },
    ])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App