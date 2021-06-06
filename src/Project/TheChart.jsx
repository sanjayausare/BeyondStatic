import { Line } from "react-chartjs-2";
import axios from 'axios'
import {getToken, getUsername, getURL} from '../utils/index'
import React, { useState, useEffect } from "react";

export default function TheChart(props) {

    const url = getURL();
    const username = getUsername();
    const token = getToken();

    const [xAxis, setXAxis] = useState();
    const [yAxis, setYAxis] = useState();

    useEffect(
        ()=>{
            axios({
                method: "GET",
                url:
                  url + "/api/projectchartdata/" + username + "/" + props.id,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `${token}`,
                },
              }).then((response) => {
                  const dat = response.data;
                  setXAxis(dat.xAxis)
                  setYAxis(dat.yAxis)
                }).catch((err) => {
                  console.log(err)
                });
        }, []
    )
    

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "# of Messages in Project in the last 6 Months",
        data: yAxis,
        fill: false,
        backgroundColor: "#fff",
        borderColor: "#fff",
        color: '#fff',
        fontColor: '#fff',
        tension: 0.5,
      },
    ],
  };

  const options = {
      plugins: {
        legend: {
            display: true,
            labels:{
                color: '#fff',
                font: {
                    size: 15,
                }
            }
        }
      },
    scales: {
        x: {
            grid: {
                display:false
            },
            ticks: {
                fontColor: '#fff',
                color: '#fff',
              },
        },
        y: {
            grid: {
                display:false,
            },
            ticks: {
                beginAtZero: true,
                fontColor: '#fff',
                color: '#fff',
              },
        }
    }
  };

  return <div style={{backgroundColor: '#FF007C', borderRadius: '22px', margin: '3%', padding: '3%', color:"#fff", boxShadow: '0px 3px 6px #00000029'}}>
    <Line data={data} options={options} />
  </div>;
}
