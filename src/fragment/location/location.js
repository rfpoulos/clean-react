import { Fragment, Component } from 'react';
import { updateCurrentLocation } from '../../redux/actions';
import { connect } from 'react-redux';
import { success } from './location-helpers';

let mapStateToProps = (state) => 
    ({

    });

let mapDispatchToProps = (dispatch) =>
    ({
        updateCurrentLocation: (res) => dispatch(updateCurrentLocation(res)),
    });

let enhance = connect(
        mapStateToProps,
        mapDispatchToProps
    );

class Location extends Component {
    componentDidMount() {
        window.navigator.geolocation.watchPosition((pos) => 
                success(pos, this.props.updateCurrentLocation));
    }

    render() {
        return Fragment
    }
}

export default enhance(Location);
