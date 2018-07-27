import React, { Component } from 'react';
import './query.css';
import QueryForm from '../../collection/query-form/query-form';
import { connect } from 'react-redux';
import { 
    getPlaces,
    calcDistance, 
} from './query-helpers';
import ResultCard from '../../collection/result-card/result-card';
import { withRouter } from 'react-router-dom';

class Query extends Component {
    constructor(props) {
        super(props)
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
        this.setState({ results: results.results });
    }

    handleResultNav = (name) => () => {
        this.props.history.push('/result/' + name)
    }

    render() {
        return (
        <div className="query">
        {
            this.props.currentLocation &&
            <QueryForm value={ this.state.query }
                onChange={ this.handleQuery }
                onClick={ this.sendQuery }
            />
        }
        {
            this.state.results.map((result, i) => 
                <ResultCard key={ i }
                    name={ result.name } 
                    distance={ calcDistance(this.props.currentLocation, 
                        result.geometry.location ) }
                    onClick={ this.handleResultNav(result.name) }
                />
            )
        }
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

export default withRouter(enhance(Query));