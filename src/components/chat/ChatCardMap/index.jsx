import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

import './styles.scss'

const AsyncGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={props.zoom}
                defaultCenter={props.center}
                onClick={props.onMapClick}
                options={{ scrollwheel: false }}
            >
                {
                    props.markers.map(marker => (
                        <Marker
                            {...marker}
                            onRightClick={() => props.onMarkerRightClick(marker)}
                        />
                    ))
                }
            </GoogleMap >
        )
    )
);

export class ChatCardMap extends React.Component {

    render() {

        return (
            <div {...this.props}>
                <div className="card" >
                    <AsyncGoogleMap
                        markers={this.props.markers}
                        center={this.props.center}
                        zoom={this.props.zoom}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${this.props.apiKey}`}
                        loadingElement={
                            <div style={{ height: `250px` }}>
                            </div>
                        }
                        containerElement={
                            <div style={{ height: `250px` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                    />
                    <h5 className="title">{this.props.title}</h5>
                    <p className="description">{this.props.description}</p>
                </div>
            </div>)
    }
}


ChatCardMap.propTypes = {
    markers: React.PropTypes.array.isRequired,
    apiKey: React.PropTypes.string.isRequired
}