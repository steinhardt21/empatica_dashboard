/****
 * The component is in charge of counting and show the number of views
 * clustered in four categories: MORNING, AFTERNOON, EVENING, NIGHT
 */

import React from 'react'

//auxiliary variables
let countMorn = 0;
let countEven = 0;
let countAfter = 0;
let countNi = 0;

// Function used to compare pair of hours
function dateCompare(time1,time2) {
    var t1 = new Date();
    var parts = time1.split(":");
    t1.setHours(parts[0],parts[1],parts[2],0);
    var t2 = new Date();
    parts = time2.split(":");
    t2.setHours(parts[0],parts[1],parts[2],0);
  
    // returns 1 if greater, -1 if less and 0 if the same
    if (t1.getTime()>t2.getTime()) return 1;
    if (t1.getTime()<t2.getTime()) return -1;
    return 0;
  }
  

export default class DownloadTime extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
           countMorning: 0,
           countAfternoon: 0,
           countEvening: 0,
           countNight: 0,
           loading: true
        };
    }
    
    componentDidMount()
    {//Computation of the clusters 

        this.props.data.downloads.map( d =>
            {
                if((dateCompare(d.downloaded_at, ('12:00:00')) == (-1 || 0) ) &&(dateCompare(d.downloaded_at, ('06:00:00')) == 1 ))
                {countMorn = countMorn +1;} // Downloads in the MORNING
                if((dateCompare(d.downloaded_at, ('12:00:00')) == 1) &&(dateCompare(d.downloaded_at, ('18:00:00')) == (-1 || 0)))
                {countAfter = countAfter + 1;}// Downloads in the AFTERNOON
                if((dateCompare(d.downloaded_at, ('18:00:00')) == 1 ) &&(dateCompare(d.downloaded_at, ('22:00:00')) == ( -1 || 0) ))
                {countEven = countEven + 1;} // Downloads in the EVENING
                if((dateCompare(d.downloaded_at, ('22:00:00')) == 1 ) && ((dateCompare(d.downloaded_at, ('06:00:00')) == ( -1 || 0) ) ||(dateCompare(d.downloaded_at, ('06:00:00')) == 1 ) ))
                {countNi = countNi + 1;} // Downloads at NIGHT
            })

        this.setState({countMorning: countMorn, countAfternoon: countAfter, countEvening: countEven, countNight: countNi, loading: false});
    }

    render()
    {
        
        if (this.state.loading) {
        return <div>loading...</div>;
        }

        
        return( 
            //Table to show the data
            <table  className="table table-striped table-bordered table-sm">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Morning</th>
                <th scope="col">Afternoon</th>
                <th scope="col">Evening</th>
                <th scope="col">Night</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Downloads</th>
                    <td>{this.state.countMorning}</td>
                    <td>{this.state.countAfternoon}</td>
                    <td>{this.state.countEvening}</td>
                    <td>{this.state.countNight}</td>
                </tr>
            </tbody>
            </table>
        )
    }
}


