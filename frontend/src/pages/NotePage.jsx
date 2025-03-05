import React from "react";
import "./NotePage.css";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Modal from "../components/Modal";
import "./NotePage.css";
import { Link } from "react-router-dom";

const NotePage = () => {
    return (
        <>
            <div className="note-container">
                <h3 className="title">REACT PROJECT FOR BEGINNERS</h3>
                <span className="d-flex justify-content-center">
                    <p className="note-date font-12 text-muted me-5">
                        {" "}
                        created: 5 March 2025
                    </p>
                    <p className="note-date font-12 text-muted me-5">
                        last updated: 5 March 2025
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    neque natus voluptatem dolor et quas ab unde. Labore
                    exercitationem aspernatur voluptatum. Quibusdam, nesciunt
                    aperiam? Exercitationem ipsam nulla consequuntur molestias
                    pariatur quasi necessitatibus dicta esse facilis temporibus
                    animi, reprehenderit eius laudantium impedit vero sunt. Illo
                    vero ratione omnis laborum quis voluptatum!
                </p>
            </div>
            <Modal />
        </>
    );
};

export default NotePage;
