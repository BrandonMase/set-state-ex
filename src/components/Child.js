import React, { Component } from 'react';

class Child extends Component{
    constructor(props) {
        super(props);
        // console.log("Child contructor ran");

        this.state = {
            parentState:null
        }
    }
    
    componentDidMount(props) {

        
        this.setState({ parentState: this.props.parentState }, () => console.log("setState for Child actually finished. Because App never setState yet, Child is still 0. This was called inside of the setState",this.state.parentState));
        
        console.log("setState for Child just was called in Component Did Mount. It\`s still null", this.state.parentState);
    }

    componentWillReceiveProps(props) {
        this.setState({ parentState: this.props.parentState },() => console.log("this.setState in components will recieve props in child actually finished. Because App never setState yet, Child is still 0. this was called inside of setState",this.state.parentState));
    }

    // componentDidUpdate(props) {
    //     console.log("componentWillRecieveProps for Child running");
    //     this.setState({ parentState: this.props.parentState },() => console.log("this.setState in components will recieve props in child actually finished"));
    // }

    render() {
        let thing = '' + this.componentDidMount;
        let state = this.state.parentState;

    //    console.log("Render in child") 
        return (
            <div>
                <h2>ComponentDidMount for Child</h2>
                <pre>
                    <h3>
                        {thing}
                    </h3>    
                </pre> 

                <h3>this.state for Child {state}</h3>
            </div>
        )
    }
}

export default Child;