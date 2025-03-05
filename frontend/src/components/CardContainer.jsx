import React from "react";
import NoteCard from "./NoteCard";

const CardContainer = ({ notes }) => {
    return (
        <div className="container">
            <div className="note-has-grid row">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
