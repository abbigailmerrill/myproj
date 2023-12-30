import {Component} from "react";

class ClassEvent extends Component{

    handleClick(){
        console.log("Class based component handling");
    }
// must use this.function, cannot handle like function event structures

    render(){
        return <div>
            This is a class based component
            <button onClick={this.handleClick}>Click</button>
        </div>
    }
}

export default ClassEvent;