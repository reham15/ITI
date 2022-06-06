import {Component} from "react";


export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            age:0,

        };
    }
    addStudent=(e)=> {
        this.props.addStudent(this.state);
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name</label>
                        <input type="text"
                               value={this.state.name}
                               onChange={(e) => {
                                   this.setState({name: e.target.value})
                               }
                               }
                               className="form-control"
                               id="exampleInputName"
                               placeholder="Enter Your name"
                            />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputAge">Age</label>
                        <input type="number"
                               value={this.state.age}
                               onChange={(e) => {
                                   this.setState({age: e.target.value})
                               }
                               }
                               className="form-control"

                               id="exampleInputAge"
                               placeholder="Age"
                        />
                    </div>
                    <input
                        type="button"
                        value="Add"
                        onClick={this.addStudent}
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}


