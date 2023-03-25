import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  /* Here we are transforming a dataPoint obj to a number stored in dataPoint values */ 
  /* dataPointValues are a new array of the those values */ 
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)  
  /* Below is all 12 values */
  const totalMaximum = Math.max(...dataPointValues)  
  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => 
            <ChartBar 
                key={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}
            />
        )}
    </div>
  )
}

export default Chart