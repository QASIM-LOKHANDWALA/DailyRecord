import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./AddNotePage.css";
import axios from "axios";
import { toast } from "react-toastify";

const EditNotePage = ({ fetchNote }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        async function getData() {
            const data = await fetchNote(slug);
            setBody(data.body);
            setTitle(data.title);
            setCategory(data.category);
        }
        getData();
    }, []);

    const note = {
        title,
        body,
        category,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body && category) {
            try {
                axios.put(`http://127.0.0.1:8000/api/v1/notes/${slug}/`, note);
                toast.success("Note Updated!");
                navigate(`/notes/${slug}`);
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("all fields are required");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h5>Edit Note</h5>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                >
                    Title
                </label>
                <input
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
                    className="form-select"
                    aria-label="Default select example"
                    style={{ height: "40px" }}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option defaultValue>Pick a category</option>
                    <option value="BUSINESS">Business</option>
                    <option value="PERSONAL">Personal</option>
                    <option value="IMPORTANT">Important</option>
                </select>
            </div>

            <button
                className="btn btn-primary d-flex justify-content-center"
                style={{ width: "100%" }}
            >
                Submit
            </button>
        </form>
    );
};

export default EditNotePage;
