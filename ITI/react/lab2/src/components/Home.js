import React from 'react';
import Registration from './Registration';
import Student from './Student';
import students from "./students.json";
import '../App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: students.students
        };
    }

    register = (e) => {

        let id = e.id;
        let name = e.name;
        let age = e.age;
        this.setState({
            allStudents: [...this.state.allStudents, {
                "id": 0,
                "name": name,
                "age": age,
                "email": "default@gmail.com"
            }]
        })
    }

    render() {

        return (
            <div className="ms-2">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header">Registration Form</div>
                            <div className="card-body">
                                <Registration addStudent={this.register}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 align-center mt-4 " >
                        <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-1a6eb5e8350bc146f093a8771ba2f077_screen.jpg?ts=1612430062"/>
                    </div>
                </div>
                <div className=" ms-4 me-4 ">
                <div className=" students-tag  mb-5 mx-auto ">
                    Students Table
                </div>
                    <div className="mt-5 col-6 mx-auto">
                        <Student allStudents={this.state.allStudents}/>
                    </div>
                </div>
            </div>
        );

    }
}

export default Home;
