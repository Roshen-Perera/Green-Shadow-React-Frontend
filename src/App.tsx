import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import { Field } from './pages/Field.tsx';
import { Crop } from './pages/Crop.tsx';
import { Staff } from './pages/Staff.tsx';
import Login from "@/pages/Login.tsx";
import Register from './pages/Register.tsx';
import {Dashboard} from "@/pages/Dashboard.tsx";
import { Provider, useSelector } from 'react-redux';
import {store} from "@/store/Store.ts";
function App() {

      const isAuthenticated = useSelector(
        (state) => state.user.isAuthenticated
      );


    const routes = createBrowserRouter([
      {
        path: "",
        element: <RootLayout />,
        children: [
          { path: "", element: <Login /> },
          { path: "/signup", element: <Register /> },
          {
            path: "/dashboard",
            element: isAuthenticated ? <Dashboard /> : <Navigate to="" />},
          { path: "/field", element: <Field /> },
          { path: "/crop", element: <Crop /> },
          { path: "/staff", element: <Staff /> },
        ],
      },
    ]);

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={routes} />
            </Provider>
        </>
    )
}

export default App