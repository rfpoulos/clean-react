import React, { Component } from 'react';
import './result.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../../component/button/button';
import ResultCard from '../../collection/result-card/result-card';

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null,
        }
    }

    onComponentDidMount() {

    }

    handleResultNav = () => {
        this.props.history.push('/');
    }

    render() {
        return (
        <div className="result">
            <Button text="Go Back" 
                onClick={ this.handleResultNav }
            />
        </div>
    )}
}

let mapStateToProps = (state) => ({
    currentLocation: state.currentLocation,
});

let mapDispatchToProps = (dispatch) => ({

});

let enhance = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withRouter(enhance(Result));