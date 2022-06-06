import React from "react";
import { useParams } from "react-router-dom"

const ShowStudent = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Hello your id is: {id}</h1>
        </div>
    );
}
export default ShowStudent;