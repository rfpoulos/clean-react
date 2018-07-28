import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './result.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../../component/button/button';
import ResultCard from '../../collection/result-card/result-card';
import { calcDistance } from '../query/query-helpers';
import { getPlaceById } from './result-helpers';

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null,
        }
    }

    async componentDidMount() {
        let result = await getPlaceById(this.props.match.params.id);
        this.setState({ result: result.result })
    }

    handleResultNav = () => {
        this.props.history.push('/');
    }

    render() {
        return (
        <div className="result">
            {
                this.state.result && this.props.currentLocation &&
                <ResultCard name={ this.state.result.name }
                    distance={ calcDistance(this.props.currentLocation,
                        this.state.result.geometry.location) }
                />
            }
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