import React from "react";
import PropTypes from "prop-types"

export class Home extends React.Component{

    constructor(props){
        super();
        this.state =  {
            age: props.initialAge,
            status:0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        },3000);
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
        
    }

    render(){
        return(
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <hr/>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick = {this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me older </button>
                <hr/>
                <button onClick = {this.props.greet} className = "btn btn-primary"> Greet </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
};