import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'; 

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state= {
            //our chart data
            chartData: {
                //our chart labels
                labels: ['Egy','USA'],
                //our chart data sets
                datasets: [
                    {
                        label: 'sports',
                        data: [ 80, 160, 19 ],
                        backgroundColor: [ '#4286F5', '#4286F5' ],
                    },
                    {
                        label: 'technology',
                        data: [ 80,80 ],
                        backgroundColor: [ '#DC4437','#DC4437' ]
                    }, 
                ]
            }
            
        };
    }
    render() {
        return(
        <div className="chart">
            <Bar data= {this.state.chartData}
            
            options= {{
                maintainAspectRatio: false
                }}
            />
        </div>
        )
    }
}

export default Chart;