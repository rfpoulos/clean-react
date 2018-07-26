import React, { Component } from 'react';
import './query.css';
import QueryForm from '../../collection/query-form/query-form';
import { connect } from 'react-redux';
import { getTrails } from './query-helpers';
import ResultCard from '../../collection/result-card/result-card';

let QueryDumb = ({
    query,
    handleQuery,
    currentLocation,
    sendQuery,
    walks,
}) =>
    <div className="query">
        <QueryForm value={ query }
            onChange={ handleQuery }
            onClick={ sendQuery }
        />
        {/* {
            walks.map((walk, i) => 
                <ResultCard title={ walk.result } 
                    distance={ calcDist(currentLocation) } 
                />
            )
        } */}
    </div>

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
    constructor() {
        super()
        this.state = {
            query: '',
            walks: [],
        }
    }

    handleQuery = (event) => {
        this.setState({ query: event.target.value });
    }

    sendQuery = async () => {
        let walks = await getTrails(this.state.query)
        this.setState({ walks })
        console.log(walks);
    }

    render() {
        return <QueryDumb 
            { ...this.props } 
            { ...this.state }
            handleQuery={ this.handleQuery } 
            sendQuery={ this.sendQuery }
            />
    }
}

export default enhance(Query);