
import {Component} from "react";
import './../App.css'
class SecondComponent extends Component {
    images=['./images/image1.jpg',
        './images/image3.jpeg',
        './images/image4.jpg',
        './images/image5.webp',

    ]
    index=0;
    timeInterval;
    constructor() {
        super();
        this.state={
            imageUrl:"./images/image1.jpg" ,
        };
    }
    render(){
        return <div >


            <div>
                <img src={this.state.imageUrl}/>
            </div>
            <div>

                <button onClick={this.next}> next</button>
                <button onClick={this.prev}> previous</button>
                <button onClick={this.slide}> slide </button>
                <button onClick={this.stop}> stop</button>

            </div>


        </div>;
    }
    next=(e)=>{

        if(this.index<this.images.length-1)
        {
            this.setState({
            imageUrl:this.images[this.index+1]});
            this.index++
    }}
    prev=(e)=>{

        if(this.index>0)
        {

            this.setState({
                imageUrl:this.images[this.index-1]});
            this.index--;
        }
        else
            this.index=0;
    }
   slide=(e)=>{
       this.timeInterval = setInterval(this.cycle, 1000);

   }



    stop=(e)=>{
        clearInterval(this.timeInterval);
    }

    cycle=()=>{

        if(this.index<this.images.length)
        {
            this.setState({
                imageUrl:this.images[this.index]});
            this.index++

        }
      else
        this.index=0;
       console.log(this.index);
    }
}

export default SecondComponent;
