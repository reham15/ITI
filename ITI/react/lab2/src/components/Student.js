import React from 'react';
 import '../App.css';
import {NavLink} from "react-router-dom";

class Student extends React.Component {
    constructor(props) {
        super(props);
    }
    addStudent=(e)=> {
        this.props.allStudents();
    }
    render() {
        return (
            <div className="row">
                <table className=" table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th className="align-center" scope="col">Name</th>
                        <th className="align-center" scope="col">Age</th>
                        <th  scope="col">Operations</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.allStudents.map(student =>

                    <tr key={student.id}>
                            <td   className="align-center">{student.name} </td>
                            <td   className="align-center">{student.age}</td>
                            <td>
                                        <NavLink className="btn-primary align-center" type="button" to={`/students/${student.id}`} end>
                                        show
                                    </NavLink>

                            </td>
                        </tr>
                    )
                    }
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default Student;
