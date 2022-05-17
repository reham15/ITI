
import {Component} from "react";

class FirstComponent extends Component {
    constructor() {
        super();
        this.state={
            username:"" ,
        };
    }
    render(){
        return <div >

            <input  id={'inp'} type={"text"}
            onChange={this.update}

            />
            <div>
                {this.state.username}
            </div>
            <button  onClick={(e)=>{
                const input=  document.getElementById('inp');
                this.setState({
                    username:""});
                  input.value='';


            }}>
                reset
            </button>


        </div>;
    }
  update=(e)=>{
        this.setState({
            username:e.target.value});
  }
}

export default FirstComponent;
