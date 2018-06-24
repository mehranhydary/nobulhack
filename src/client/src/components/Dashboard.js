import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const mainContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};

const paperStyle = {
  width: "95%",
  padding: "0 1em",
  margin: "1em 0"
};

const PerceivedValueData = [
  { name: "Jan", Actual: 700000, Estimated: 700000},
  { name: "Feb", Actual: 702000, Estimated: 701000 },
  { name: "Mar", Actual: 705000, Estimated: 703000 },
  { name: "Apr", Actual: 705000, Estimated: 706000 },
  { name: "May", Actual: 705000, Estimated: 704000 },
  { name: "Jun", Actual: 710000, Estimated: 709000 },
  { name: "Jul", Actual: 707000, Estimated: 707000 },
  { name: "Aug", Actual: 720000, Estimated: 710000 },
  { name: "Sept",Actual: 705000, Estimated: 705000},
  { name: "Oct", Actual: 705000, Estimated: 703000},
  { name: "Nov", Actual: 703000, Estimated: 704000},
  { name: "Dec", Actual: 706000, Estimated: 707000 }
];

const ProjectedValueData = [
    { name: "Jan", 'Projected Value': 700000, Estimated: 700000},
    { name: "Feb", 'Projected Value': 702000, Estimated: 701000 },
    { name: "Mar", 'Projected Value': 705000, Estimated: 703000 },
    { name: "Apr", 'Projected Value': 705000, Estimated: 706000 },
    { name: "May", 'Projected Value': 705000, Estimated: 704000 },
    { name: "Jun", 'Projected Value': 710000, Estimated: 709000 },
    { name: "Jul", 'Projected Value': 707000, Estimated: 707000 },
    { name: "Aug", 'Projected Value': 720000, Estimated: 710000 },
    { name: "Sept",'Projected Value': 705000, Estimated: 705000},
    { name: "Oct", 'Projected Value': 705000, Estimated: 703000},
    { name: "Nov", 'Projected Value': 703000, Estimated: 704000},
    { name: "Dec", 'Projected Value': 706000, Estimated: 707000 }
  ];

const PerceivedValueChart = (
  <LineChart
    width={600}
    height={300}
    data={PerceivedValueData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <YAxis type="number" domain={['dataMin', 'dataMax']} />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Actual" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="Estimated" stroke="#82ca9d" strokeDasharray="5 5" />
  </LineChart>
);

const ProjectedValueChart = (
    <LineChart
      width={600}
      height={300}
      data={ProjectedValueData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis type="number" domain={['dataMin', 'dataMax']} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Projected Value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );

export default function Dashboard() {
  return (
    <div style={mainContainerStyle}>
      <Paper style={paperStyle}>
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">attach_money</i>
                </div>
                <p class="card-title">Target Price</p>
                <h3 class="card-title">$750,000</h3>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="card card-stats">
              <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">store</i>
                </div>
                <p class="card-title">Current Pricing</p>
                <h3 class="card-title">$725,000</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">scatter_plot</i>
                </div>
                <p class="card-title">Probability %</p>
                <h3 class="card-title">75%</h3>
              </div>
            </div>
          </div>
        </div>
      </Paper>

      <Paper style={paperStyle}>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header card-chart card-header-warning">
                {PerceivedValueChart}
              </div>
              <div class="card-body">
                <h4 class="card-title">Perceived Value</h4>
                <p class="card-category">
                  <span class="text-success">
                    <i class="fa fa-long-arrow-up" /> 2%{" "}
                  </span>{" "}
                  estimated increase.
                </p>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">access_time</i> updated 4 minutes
                  ago
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header card-chart card-header-success">
              {ProjectedValueChart}
              </div>
              <div class="card-body">
                <h4 class="card-title">Projected Value</h4>
                <p class="card-category">Last Campaign Performance</p>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">access_time</i> updated 2 minutes
                  ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
