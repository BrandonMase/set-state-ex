import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/Child';

class App extends Component {

  constructor(props) {
    super(props);
    // console.log("App constructor ran");

    this.state = {
      parentState: 0,
      userInput1: null,
      userInput2:null,
    }

    this.button1 = this.button1.bind(this)
  }

  componentDidMount(props) {


    this.setState({ parentState: 1 }, () => console.log('setState for App actually finished. This was called inside of setState',this.state.parentState));



    console.log('This is state after setState was called in App. It\'s still 0. It should be 1', this.state.parentState);
  }

  // componentDidUpdate(props) {
  //   console.log("component Did Update Ran in App")
  // }

  // userInput(e) {
  //   this.setState({ userInput2: e });
  // }

  button1() {
    this.setState({ parentState: this.state.parentState + 1 });
  }


  render() {
    let things = '' + this.componentDidMount;
    // console.log("App Render Happened");
    return (
      
      <div className="App">
        <h1>Calling this.setState inside of a parent then passing that state as a prop to a child component leaves the child
          component 1 state behind. The parent state will update AFTER the child state is updated. </h1>
        <h2>ComponentDidMount for APP</h2>
        <pre><h3>
        {things}
        </h3>
     
        </pre>
        <Child parentState={this.state.parentState} />
        <h3>this.state for parent {this.state.parentState}</h3>
        <p>These should be the same.</p>

        <button onClick={this.button1} > Click me to see child always 1 state behind.</button>
      </div>
    );
  }
}

export default App;
