import React, { Component } from 'react';
import './query.css';
import QueryForm from '../../collection/query-form/query-form';
import { connect } from 'react-redux';
import { getPlaces } from './query-helpers';
import ResultCard from '../../collection/result-card/result-card';

let mapStateToProps = (state) => ({
    currentLocation: state.currentLocation,
});

let mapDispatchToProps = (dispatch) => ({

});

let enhance = connect(
    mapStateToProps,
    mapDispatchToProps
)

class Query extends Component {
    constructor(props) {
        super()
        this.state = {
            query: '',
            results: [],
        }
    }

    handleQuery = (event) => {
        this.setState({ query: event.target.value });
    }

    sendQuery = async () => {
        let results = await getPlaces({
            query: this.state.query,
            lat: this.props.currentLocation.lat,
            lng: this.props.currentLocation.lng,
        });
        this.setState({ results })
    }

    render() {
        return (
        <div className="query">
            <QueryForm value={ this.state.query }
                onChange={ this.handleQuery }
                onClick={ this.sendQuery }
            />
            {/* {
                walks.map((walk, i) => 
                    <ResultCard title={ walk.result } 
                        distance={ calcDist(currentLocation) } 
                    />
                )
            } */}
        </div>
    )}
}

export default enhance(Query);