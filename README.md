## Calling this.setState inside of a parent then passing that state as a prop to a child component leaves the child component 1 state behind. The parent state will update AFTER the child state is updated. 

### ComponentDidMount for APP

function componentDidMount(props) {

      this.setState({ parentState: 1 }, function () {
        return console.log('setState for App actually finished. This was called inside of setState', _this2.state.parentState);
      });

      console.log('This is state after setState was called in App. It\'s still 0. It should be 1', this.state.parentState);
    }

### ComponentDidMount for Child

function componentDidMount(props) {
    

            this.setState({ parentState: this.props.parentState }, function () {
                return console.log("setState for Child actually finished. Because App never setState yet, Child is still 0. This was called inside of the setState", _this2.state.parentState);
            });

            console.log("setState for Child just was called in Component Did Mount. It\`s still null", this.state.parentState);
        }