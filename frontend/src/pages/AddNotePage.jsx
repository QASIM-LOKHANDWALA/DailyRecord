import React, { useState } from "react";
import "./AddNotePage.css";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNotePage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const note = {
        title,
        body,
        category,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body && category) {
            try {
                axios.post("http://127.0.0.1:8000/api/v1/notes/", note);
                setBody("");
                setTitle("");
                setCategory("");
                toast.success('New Note Added!')
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("all fields are required");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5>Add New Note</h5>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                >
                    Title
                </label>
                <input
                    required
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter note's title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                >
                    Content
                </label>
                <textarea
                    required
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={4}
                    placeholder="Enter note's content"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>

            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                >
                    Note's category
                </label>
                <select
                    required
                    className="form-select"
                    aria-label="Default select example"
                    style={{ height: "40px" }}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option selected disabled hidden>
                        Pick a category
                    </option>
                    <option value="BUSINESS">Business</option>
                    <option value="PERSONAL">Personal</option>
                    <option value="IMPORTANT">Important</option>
                </select>
            </div>

            <button
                className="btn btn-primary d-flex justify-content-center"
                style={{ width: "100%" }}
            >
                Add Note
            </button>
        </form>
    );
};

export default AddNotePage;
