import React from "react";
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
import axios from "axios";

const App = () => {

    async function fetchNote(slug) {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/v1/notes/${slug}`
            );
            console.log(response);

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage  />} />
                <Route path="/add-notes" element={<AddNotePage />} />
                <Route
                    path="/edit-note/:slug"
                    element={<EditNotePage fetchNote={fetchNote} />}
                />
                <Route
                    path="/notes/:slug"
                    element={<NotePage fetchNote={fetchNote} />}
                />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
