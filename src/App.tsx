import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import { Field } from './pages/Field.tsx';
import { Crop } from './pages/Crop.tsx';
import { Staff } from './pages/Staff.tsx';
import {Log} from "@/pages/Log.tsx";
import Login from "@/pages/Login.tsx";
import Register from './pages/Register.tsx';
import {Dashboard} from "@/pages/Dashboard.tsx";
import { Provider } from 'react-redux';
import {store} from "@/store/Store.ts";
function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/dashboard', element : <Dashboard/>},
                { path : '/field', element : <Field/>},
                { path : '/crop', element : <Crop/>},
                { path : '/staff', element : <Staff/>},
                { path : '/log', element : <Log/>},
                { path : '/login', element : <Login/>},
                { path : '/signup', element : <Register/>},
            ]
        },
    ])

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={routes} />
            </Provider>
        </>
    )
}

export default App