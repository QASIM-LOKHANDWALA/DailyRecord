import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearch } from "../context/SearchContext";

const MainLayout = () => {
    const { searchText, setSearchText } = useSearch();

    return (
        <>
            <NavBar searchText={searchText} setSearchText={setSearchText} />
            <ToastContainer />
            <Outlet />
        </>
    );
};

export default MainLayout;
