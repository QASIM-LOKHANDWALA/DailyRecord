import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AddNotePage from "./pages/AddNotePage";
import NotePage from "./pages/NotePage";
import EditNotePage from "./pages/EditNotePage";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/add-notes" element={<AddNotePage />} />
                <Route path="/edit-note" element={<EditNotePage />} />
                <Route path="/notes-detail" element={<NotePage />} />
            </Route>
        )
    );

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
