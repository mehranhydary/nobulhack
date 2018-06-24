import React, { Component } from "react";

class Survey extends Component {
  render() {
    return (
      <div class="container">
        <h3>Mehran Hydary: 0x79b596cFad2D3c79A8752B3a2A1F644a690A0104</h3>

        <div class="row">
          <div class="col-6">
            <h3>Available Questions</h3>
            <div id="accordion" role="tablist">
              <div class="card card-collapse">
                <div class="card-header" role="tab" id="headingOne">
                  <h5 class="mb-0">
                    <a
                      data-toggle="collapse"
                      href="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <p style={{color: "#01BCD4"}}> Question #1: What do you think is the average price of a 1
                      bedroom apartment located in central Toronto in July 2018? <i class="material-icons">keyboard_arrow_down</i></p>
                      
                    </a>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label for="inputAddress">
                          Please Input Your Answer
                        </label>
                        <textarea
                          rows="4"
                          cols="50"
                          class="form-control"
                          id="inputAddress"
                          placeholder=""
                        />
                      </div>
                      <button type="submit" class="btn btn-info float-right">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="card card-collapse">
                <div class="card-header" role="tab" id="headingTwo">
                  <h5 class="mb-0">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <p style={{color: "#01BCD4"}}>Question #2: Do you think the price will be above $700,000
                      for a medium sized townhouse in Markham in July 2018?{" "}
                      <i class="material-icons">keyboard_arrow_down</i></p>
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="form-check form-check-radio">
                      <form>
                        <label class="form-check-label">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                          />
                          True
                          <span class="circle">
                            <span class="check" />
                          </span>
                        </label>

                        <div class="form-check form-check-radio">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="option2"
                            />
                            False
                            <span class="circle">
                              <span class="check" />
                            </span>
                          </label>
                        </div>
                        <button type="submit" class="btn btn-info float-right">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-collapse">
                <div class="card-header" role="tab" id="headingThree">
                  <h5 class="mb-0">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                    <p style={{color: "#01BCD4"}}>Question #3: How much do you think the tax on foreign
                      buyers will affect the housing market in Toronto?{" "}
                      <i class="material-icons">keyboard_arrow_down</i></p>
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="form-check form-check-radio">
                      <form>
                        <div class="form-group">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                            />
                            Prices Rise Significantly
                            <span class="circle">
                              <span class="check" />
                            </span>
                          </label>

                          <div class="form-check form-check-radio">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="option2"
                              />
                              Prices Rise Slightly
                              <span class="circle">
                                <span class="check" />
                              </span>
                            </label>
                          </div>
                          <div class="form-check form-check-radio">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="option2"
                              />
                              No Change
                              <span class="circle">
                                <span class="check" />
                              </span>
                            </label>
                          </div>
                          <div class="form-check form-check-radio">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="option2"
                              />
                              Prices Lower Slightly
                              <span class="circle">
                                <span class="check" />
                              </span>
                            </label>
                          </div>
                          <div class="form-check form-check-radio">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="option2"
                              />
                              Prices Lower Significantly
                              <span class="circle">
                                <span class="check" />
                              </span>
                            </label>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-info float-right">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <h3 style={{ "padding-bottom": "20px" }}>Balance</h3>
            <div class="ml-auto mr-auto">
              <div
                class="card-info card-pricing"
                style={{
                  background: "linear-gradient(60deg, #26c6da, #00acc1)",
                  "border-radius": "6px"
                }}
              >
                <div class="card-body">
                  <div class="card-icon">
                    <i class="material-icons" style={{color: "white"}}>money</i>
                  </div>
                  <h1 class="card-title " style={{ "text-align": "center", color: "white"}}>
                    1.02 ETH
                  </h1>
                  <p
                    class="card-description"
                    style={{ "text-align": "center", color: "white" }}
                  >
                    This is the amount of money you have accumulated!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h3>Questions Answered</h3>
            <table class="table">
              <thead class="table-info">
                <tr
                  style={{
                    background: "linear-gradient(60deg, #26c6da, #00acc1)",
                    "border-radius": "6px"
                  }}
                >
                  <th style={{color: "white"}}>Question</th>
                  <th class="text-right" style={{color: "white"}}>Variance</th>
                  <th class="text-right" style={{color: "white"}}>Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "white" }}>
                  <td>
                    What do you think is the average price of a 1 bedroom
                    apartment located in central Toronto in June 2018?
                  </td>
                  <td class="text-right">
                    {" "}
                    <b> > </b> $50,000
                  </td>
                  <td class="text-right">1.02 ETH</td>
                </tr>
                {/* <tr style={{background: "white"}}>
                                    <td>Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike</td>
                                    <td class="text-right">99,225</td>
                                    <td class="text-right">99,225</td>
                                </tr>
                                <tr style={{background: "white"}}>
                                    <td>Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike Andrew Mike</td>
                                    <td class="text-right">99,225</td>
                                    <td class="text-right">99,225</td>
                                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        <h3>News Articles</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="card" style={{ height: 450 + "px" }}>
              <img
                class="card-img-top"
                src="https://media.coindesk.com/uploads/2018/06/Duck.jpg"
                width="290px"
                height="210px"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Blockchain In The Real Estate Market</h4>
                <p class="card-text">
                  Property is the largest asset class in the world, clocking in
                  at $162 trillion in residential real estate and...
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style={{ height: 450 + "px" }}>
              <img
                class="card-img-top"
                src="https://media.coindesk.com/uploads/2018/06/shutterstock_1073702060.jpg"
                width="290px"
                height="210px"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  Bitcoin Price Falls Below $6,000 to Hit New Low for 2018
                </h4>
                <p class="card-text">
                  CoinDesk's Bitcoin Price Index fell to $5,938.18, surpassing
                  the prior low of $5,947.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 2 days ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style={{ height: 450 + "px" }}>
              <img
                class="card-img-top"
                src="https://cdn-images-1.medium.com/max/2000/1*q8HNVIql60d46VWjI5i2CQ.gif"
                width="290px"
                height="210px"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  Particles - Why Does Everyone At Deloitte Use It?
                </h4>
                <p class="card-text">
                  A lightweight, dependency-free and responsive javascript
                  plugin for particle backgrounds.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 1 week ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
