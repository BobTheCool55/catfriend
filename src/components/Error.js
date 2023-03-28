import React from 'react';

class Error extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>L bozo</h1>
        }
        return this.props.children
    }
}

export default Error;