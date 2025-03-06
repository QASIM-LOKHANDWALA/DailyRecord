import React from "react";

const Filter = ({ handelFilterText }) => {
    return (
        <div
            className="container"
            style={{ width: "500px", margin: "20px auto" }}
        >
            <select
                className="form-select"
                style={{ height: "50px" }}
                onChange={(e) => handelFilterText(e.target.value)}
            >
                <option value="">All Notes</option>
                <option value="BUSINESS">Business</option>
                <option value="PERSONAL">Personal</option>
                <option value="IMPORTANT">Important</option>
            </select>
        </div>
    );
};

export default Filter;
