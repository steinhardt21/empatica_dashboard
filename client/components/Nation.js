/************************************
 * Component in charge of recovering from the longitude and latitude the country using
 * the GoogleMaps API. Subsequently these data are rendered via a table 
 */

import React from 'react'

const urls = []; //  variable used to load the urls to execute
const dt = []; // auxiliari variable

export default class Nation extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {         
                        loading: true,
                        data: []
                    };
    }

componentDidMount() 
{
    //Create the query for each pair of longitude&latitude
    this.props.data.downloads.map(download => (
        // Query too Goolgle Maps API in order to get the nation
        urls.push("https://maps.googleapis.com/maps/api/geocode/json?latlng="+ download.latitude + ","+ download.longitude + "&result_type=country&key=AIzaSyD8g2ang82_R7aQG8AdVAJg4jkQ52-cp4E")
    ))  

    //Send request to the API
    var promises = Promise.all(urls.map(url => (
        fetch(url)
    )));

    //Get results of the API and save the values
    promises
        .then((results) =>
            Promise.all(results.map(r => r.json()))
        )
        .then((res) =>
            res.map(t =>          
                {dt.push(t.results[0].address_components[0].long_name)}                
            ))
            .then(this.setState({loading: false, data: dt}))
}

    render()
    {       
        // If the data are still not fetched  
        if (this.state.loading) 
        {return <div>loading...</div>; }


        // Identification of the distinct nations related with the downloads //
        const result = [];
        const map = new Map();
        for (const item of this.state.data) {
            if(!map.has(item)){
                map.set(item, true);   
                result.push(
                    item
                );
            }
        }

        // Counting the number of downloads for each country //
        let count = 0;
        let countNation = 0;
        let dataNat = this.state.data;
        let nationDownload = result.map(function(item)
        {
            count = 0;
            for(const it in dataNat)
            {
                if(item == dataNat[it])
                {count = count + 1;}
            }
            countNation = countNation + 1;

        return (    // New row in the table that is rendered
                    <tr>
                        <th scope="row">{countNation}</th>
                        <td>{item}</td>
                        <td>{count}</td>
                    </tr>
                )    
        })

        return (
            
            // Render of the table with the nations involved and the downloads per each nation
            <table id="dtBasicExample" className="table table-striped table-bordered table-sm">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nation</th>
                <th scope="col">Downloads</th>
            </tr>
            </thead>
            <tbody>
                    {nationDownload}
            </tbody>
            </table>


        )
    }
}
