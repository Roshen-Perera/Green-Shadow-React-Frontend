import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import { Field } from './pages/Field.tsx';
import { Crop } from './pages/Crop.tsx';
function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/field', element : <Field/>},
                { path : '/crop', element : <Crop/>},
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