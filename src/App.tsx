import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import { Field } from './pages/Field.tsx';
import { Crop } from './pages/Crop.tsx';
import { Staff } from './pages/Staff.tsx';
import {Log} from "@/pages/Log.tsx";
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