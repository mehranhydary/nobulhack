import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const mainContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};
// to-do added percentage to news articles
const paperStyle = {
  width: "95%",
  padding: "0 1em",
  margin: "1em 0"
};

const PerceivedValueData = [
  { name: "Jan", Actual: 700000, Estimated: 700000 },
  { name: "Feb", Actual: 702000, Estimated: 701000 },
  { name: "Mar", Actual: 705000, Estimated: 703000 },
  { name: "Apr", Actual: 705000, Estimated: 706000 },
  { name: "May", Actual: 705000, Estimated: 704000 },
  { name: "Jun", Actual: 710000, Estimated: 709000 },
  { name: "Jul", Actual: 707000, Estimated: 707000 },
  { name: "Aug", Actual: 720000, Estimated: 710000 },
  { name: "Sept", Actual: 705000, Estimated: 705000 },
  { name: "Oct", Actual: 705000, Estimated: 703000 },
  { name: "Nov", Actual: 703000, Estimated: 704000 },
  { name: "Dec", Actual: 706000, Estimated: 707000 }
];

const ProjectedValueData = [
  { name: "Jan", "Projected Value": 700000 },
  { name: "Feb", "Projected Value": 702000 },
  { name: "Mar", "Projected Value": 705000 },
  { name: "Apr", "Projected Value": 705000 },
  { name: "May", "Projected Value": 705000 },
  { name: "Jun", "Projected Value": 710000 },
  { name: "Jul", "Projected Value": 707000 },
  { name: "Aug", "Projected Value": 720000 },
  { name: "Sep", "Projected Value": 705000 },
  { name: "Oct", "Projected Value": 705000 },
  { name: "Nov", "Projected Value": 703000 },
  { name: "Dec", "Projected Value": 706000 }
];

const PerceivedValueChart = (
  <LineChart
    width={600}
    height={300}
    data={PerceivedValueData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <YAxis type="number" domain={["dataMin", "dataMax"]} />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="Actual"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
    <Line
      type="monotone"
      dataKey="Estimated"
      stroke="#82ca9d"
      strokeDasharray="5 5"
    />
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
    <YAxis type="number" domain={["dataMin", "dataMax"]} />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="Projected Value"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
  </LineChart>
);

export default function Dashboard() {
  return (
    <div style={mainContainerStyle}>
      <Paper
        style={{
          ...paperStyle,
          padding: "0.5em 1em",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <FormControl>
          <NativeSelect value={1} helperText="Housing Type">
            <option value={1}>Apartment</option>
            <option value={2}>TownHouse</option>
            <option value={3}>One Story</option>
            <option value={4}>Two Story</option>
          </NativeSelect>
          <FormHelperText>Housing Type</FormHelperText>
        </FormControl>
        <TextField
          style={{ margin: "0 5px" }}
          helperText="Current Postal Code"
          value="M5V 1R2"
        />
        <TextField placeholder="Search" helperText="Enter Postal Code" />
      </Paper>

      <Paper style={paperStyle}>
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">attach_money</i>
                </div>
                <p className="card-title">Target Price</p>
                <h3 className="card-title">$750,000</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="card card-stats">
              <div className="card-header card-header-success card-header-icon">
                <div style={{ background: "#24B5C9" }} className="card-icon">
                  <i className="material-icons">store</i>
                </div>
                <p className="card-title">Current Pricing</p>
                <h3 className="card-title">$725,000</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">scatter_plot</i>
                </div>
                <p className="card-title">Probability %</p>
                <h3 className="card-title">75%</h3>
              </div>
            </div>
          </div>
        </div>
      </Paper>

      <Paper style={paperStyle}>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header card-chart card-header-warning">
                {PerceivedValueChart}
              </div>
              <div className="card-body">
                <h4 className="card-title">Perceived Value</h4>
                <p className="card-category">
                  <span className="text-success">
                    <i className="fa fa-long-arrow-up" /> 2%{" "}
                  </span>{" "}
                  estimated increase.
                </p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 4
                  minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div
                style={{ background: "#24B5C9" }}
                className="card-header card-chart card-header-success"
              >
                {ProjectedValueChart}
              </div>
              <div className="card-body">
                <h4 className="card-title">Projected Value</h4>
                <p className="card-category">Last Campaign Performance</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 2
                  minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
      <Paper style={paperStyle}>
        <h2>News Articles</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/425?image=887"
                alt="Card"
                width="290px"
                height="210px"
              />
              <div class="card-body">
                <h4 class="card-title">News Article</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/425?image=1048"
                alt="Card"
                width="290px"
                height="210px"
              />
              <div class="card-body">
                <h4 class="card-title">News Article</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/425?image=864"
                alt="Card"
                width="290px"
                height="210px"
              />
              <div class="card-body">
                <h4 class="card-title">News Article</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
