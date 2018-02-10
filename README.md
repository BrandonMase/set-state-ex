## Calling this.setState inside of a parent then passing that state as a prop to a child component leaves the child component 1 state behind. The parent state will update AFTER the child state is updated. Looking at the console logs inside the browser tells you when each console log actually ran.

#### This is what the console log looks like:
setState for Child just was called in Component Did Mount. It`s still null null

This is state after setState was called in App. It's still 0. It should be 1 0

setState for Child actually finished. Because App never setState yet, Child is still 0. This was called inside of the setState 0

this.setState in components will recieve props in child actually finished. Because App never setState yet, Child is still 0. this was called inside of setState 0

setState for App actually finished. This was called inside of setState

#### This is what is actually sent inside of both ComponentDidMount:

### ComponentDidMount for APP
```
function componentDidMount(props) {

this.setState({ parentState: 1 }, function () {

return console.log('setState for App actually finished. This was called inside of setState', _this2.state.parentState);});

console.log('This is state after setState was called in App. It\'s still 0. It should be 1', this.state.parentState);
}
```
### ComponentDidMount for Child
```
function componentDidMount(props) {
    this.setState({ parentState: this.props.parentState }, function () {
    return console.log("setState for Child actually finished. Because App never setState yet, Child is still 0. This was called inside of the setState", _this2.state.parentState);});
      console.log("setState for Child just was called in Component Did Mount. It\`s still null", this.state.parentState);
}
```
