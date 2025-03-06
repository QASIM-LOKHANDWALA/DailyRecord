import React from "react";
import axios from "axios";
import Filter from "../components/Filter";
import CardContainer from "../components/CardContainer";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterText, setFilterText] = useState("");

    const handelFilterText = (val) => {
        setFilterText(val);
    };

    const filteredNotes =
        filterText == "BUSINESS"
            ? notes.filter((note) => note.category == "BUSINESS")
            : filterText == "PERSONAL"
            ? notes.filter((note) => note.category == "PERSONAL")
            : filterText == "IMPORTANT"
            ? notes.filter((note) => note.category == "IMPORTANT")
            : notes;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/v1/notes/"
                );
                console.log("Fetched Data:", response.data);
                setNotes(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Filter handelFilterText={handelFilterText} />
            {isLoading ? (
                <div className="text-center">
                    <div
                        className="spinner-border text-info"
                        style={{
                            height: "50px",
                            width: "50px",
                            margin: "10px",
                        }}
                    ></div>
                </div>
            ) : filteredNotes.length > 0 ? (
                <CardContainer notes={filteredNotes} />
            ) : (
                <h2 className="container text-center mt-4">No notes found</h2>
            )}
        </>
    );
};

export default HomePage;
