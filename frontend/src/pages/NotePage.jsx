import React, { useEffect } from "react";
import "./NotePage.css";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Modal from "../components/Modal";
import "./NotePage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { formatDate } from "../utils/FormatDate";
import { toast } from "react-toastify";

const NotePage = ({ fetchNote }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [note, setNote] = useState({});
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const data = await fetchNote(slug);
            console.log(data);
            setNote(data);
        }
        getData();
    }, [slug]);

    const deleteNote = async () => {
        try {
            const response = await axios.delete(
                `http://127.0.0.1:8000/api/v1/notes/${slug}/`
            );
            toast.success("Note Deleted!");
            setModalOpen(false);
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setModalOpen(false);
        }
    };

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
                    <Link
                        to={`/edit-note/${note.slug}`}
                        className="btn btn-primary"
                    >
                        <FiEdit />
                        <span>Edit</span>
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={(e) => setModalOpen(true)}
                    >
                        <BiSolidTrashAlt />
                        <span>Delete</span>
                    </button>
                </span>
                <p className="description">{note.body}</p>
            </div>
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} deleteNote={deleteNote} />
            )}
        </>
    );
};

export default NotePage;
