import React, { useEffect } from "react";
import "./NotePage.css";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Modal from "../components/Modal";
import "./NotePage.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { formatDate } from "../utils/FormatDate";

const NotePage = () => {
    const [note, setNote] = useState({});
    const { slug } = useParams();
    useEffect(() => {
        async function fetchNote() {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/v1/notes/${slug}`
                );
                setNote(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNote();
    }, [slug]);

    return (
        <>
            <div className="note-container">
                <h3 className="title">{note.title}</h3>
                <span className="d-flex justify-content-center">
                    <p className="note-date font-12 text-muted me-5">
                        created: {formatDate(note.created)}
                    </p>
                    <p className="note-date font-12 text-muted me-5">
                        updated: {formatDate(note.updated)}
                    </p>
                </span>
                <span className="button-group">
                    <Link to="/edit-note" className="btn btn-primary">
                        <FiEdit />
                        <span>Edit</span>
                    </Link>
                    <button className="btn btn-danger">
                        <BiSolidTrashAlt />
                        <span>Delete</span>
                    </button>
                </span>
                <p className="description">
                    {note.body}
                </p>
            </div>
            <Modal />
        </>
    );
};

export default NotePage;
