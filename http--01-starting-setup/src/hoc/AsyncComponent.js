import React, {Component} from 'react';
// import classes from "./AsyncComponent.css";

const AsyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then((cpm) => {
                    this.setState({component: cpm.default})
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
};

export default AsyncComponent;