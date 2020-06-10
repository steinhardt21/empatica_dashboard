/****
 * Component in charge of retrieving the data from the database and in showing the interactive map with the tags
 * refering to the geographical position where the download was registered
 */
import React, { Component, Fragment} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'; // the map
import Nation from './Nation';
import gpl from 'graphql-tag';
import {Query} from 'react-apollo';
import DownloadTime from './DownloadTime';

//The query for the GraphQL server
const DOWNLOADS_QUERY = gpl`
  query DownloadsQuery {
    downloads
    {
        app_id
        longitude
        latitude
        downloaded_at
    }
  }
`;

export class Downloads extends Component {

    // Initial state fo the interactive map
    state = {
            viewport: {
            width: '30vw',
            height: '90vh',
            latitude: 45.464203,
            longitude: 9.189982,
            zoom: 5
        }

    };

    render() {

        return (
            <Fragment>
                <Query query= {DOWNLOADS_QUERY}>
                    {
                        ({loading, error, data}) => {
                            
                            // If data are still loading
                            if(loading) return (
                                    <p>Loading ....</p>);

                            // In the case of error ind querying the database 
                            if(error) console.log(error);
                            
                            if(data!=null && data.downloads != null)
                            {
                            return (<div className="row">
                                        <div className="col-6">
                                        
                                            <ReactMapGL
                                                mapStyle="mapbox://styles/mapbox/streets-v9"
                                                mapboxApiAccessToken="pk.eyJ1IjoiYWxleGVuYXgiLCJhIjoiY2tiMmVmZ2I4MDZ6dTJ1czBwYnpqOGtxcCJ9.IBNl_OPjhbhwcMbTycNL3w"
                                                mapStyle="mapbox://styles/alexenax/ckb2fqmm606pj1ir103dxqxdc"
                                                onViewportChange={(viewport) => this.setState({ viewport })}
                                                {...this.state.viewport}
                                            >
                                            {
                                                data.downloads.map(download => (
                                                    
                                                                        <Marker key={download.app_id} 
                                                                                latitude={download.latitude}
                                                                                longitude={download.longitude}
                                                                        >
                                                                            <img src="https://www.empatica.com/assets/images/homepage/empatica_red_heart-icn.svg" alt="Home Icon"></img>
                                                                        </Marker>
                                                                    ))
                                            }
                                    
                                        </ReactMapGL>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12">
                                                <Nation data = {data}/> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                 <DownloadTime data = {data}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            );
                            }
                            else
                            {
                                return(
                                    <div>No data found!</div>
                                 )
                            }
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Downloads
