import React, { Component } from 'react';
import axios from 'axios';

class GoogleDoc extends Component {
    // @todo: set your inital state
    state = {
        content: ''
    }


    /**
     * ==================================================
     * Main lifecycle functions
     * ==================================================
     */


    componentDidMount() {
        //var editor = window.open("https://docs.google.com/document/create?usp=drive_web&folder=0ByKkLqyN2n_sUzFLdmdCMWNSTm8&authuser=0");
        /**
         * Your component is out there, mounted and ready to be used
         * This function is useful to:
         * * Fetch data from a web API
         */
        axios.get(`/api/docs/${this.props.docId}`)
            .then(response => this.setState({ content: response.data.content }));
    }

    /**
     * Other lifecycle events
     * * componentWillReceiveProps
     * * shouldComponentUpdate
     * * componentWillUpdate
     * * componentDidUpdate
     * * componentWillUnmount
     */


    /**
     * ==================================================
     * ==================================================
     * ==================================================
     */

    /**
     * ==================================================
     * Custom functions
     * ==================================================
     */


    /**
     * ==================================================
     * ==================================================
     * ==================================================
     */


    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        );
    }
}

const styles = {
    // STYLE RULES GO HERE e.g.
    successText: {
        fontSize: 25,
        color: 'green'
    }
}

export default GoogleDoc;