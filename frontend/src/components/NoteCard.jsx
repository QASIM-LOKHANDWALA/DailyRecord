import { FaNoteSticky } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";

import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/FormatDate";

const NoteCard = ({ note }) => {
    const color =
        note.category == "BUSINESS"
            ? "blue"
            : note.category == "PERSONAL"
            ? "green"
            : "purple";

    function formatBody() {
        const bodyLength = 100;
        const chars = note.body.split("");
        let body = "";
        if (chars.length < bodyLength) {
            while (chars.length != bodyLength) {
                chars.push(" ");
            }
            body = `${chars.join("")}`;
        } else {
            body = `${chars.slice(0, 100).join("")}...`;
        }
        console.log(body.length);
        return body;
    }

    return (
        <div className="col-md-4 single-note-item all-category">
            <div className="card card-body">
                <span
                    className="side-stick"
                    style={{ backgroundColor: "black" }}
                ></span>
                <FaNoteSticky style={{ marginLeft: "auto", color: color }} />
                <Link
                    to={`notes/${note.slug}`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <h5
                        className="note-title text-truncate w-75 mb-0"
                        data-noteheading={note.title}
                    >
                        {note.title}
                    </h5>
                </Link>
                <p className="note-date font-12 text-muted">
                    {formatDate(note.updated)}
                </p>
                <div className="note-content">
                    <p
                        className="note-inner-content text-muted"
                        data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
                    >
                        {formatBody()}
                    </p>
                </div>
                <div className="d-flex align-items-center">
                    <Link to={`notes/${note.slug}`}>
                        <span className="mr-1">
                            <MdMarkunread
                                style={{
                                    fontSize: "25px",
                                    cursor: "pointer",
                                    color: color,
                                }}
                            />
                        </span>
                        <small className="text-muted">{note.category}</small>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
