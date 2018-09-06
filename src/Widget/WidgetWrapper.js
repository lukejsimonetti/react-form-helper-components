import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const colors = {
    brandPrimary: '#36a9e1',
    brandSuccess: '#4dbd74',
    brandInfo: '#67c2ef',
    brandWarning: '#f8cb00',
    brandDanger: '#f86c6b'
}

const WidgetWrapper = props => {
    const formatNumberWithCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const dataMax = Math.max(...props.data.datasets[0].data)
    const dataMin = Math.min(...props.data.datasets[0].data)
    const dataDiff = dataMax - dataMin

    const options = {
        maintainAspectRatio: false,
        legend: { display: false },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    min: Math.round(dataMin - (dataDiff * .25)),
                    max: Math.round(dataMax + (dataDiff * .25))
                }
            }]
        },
        elements: {
            line: { borderWidth: 1}
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
        }
    }

    return (
        <Card className={`text-white bg-${props.color}`}>
            <CardBody className="pb-0">
                <h4 className="mb-0">{formatNumberWithCommas(props.total)}</h4>
                <p>{props.title}</p>
            </CardBody>
            <div className="chart-wrapper px-3" style={{ height: '140px' }}>
                <Line data={props.data} options={options} />
            </div>
        </Card>
    )
}

export default WidgetWrapper
