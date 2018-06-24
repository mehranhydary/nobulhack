import React, { Component } from 'react';


class PlatformAccess extends Component {
constructor(props) {
  super(props)
  this.state = { 
    flowPurchased: ''

  }
  this.handleFormSubmit = this.handleFormSubmit.bind(this)
}
handleFormSubmit(e) {
  e.preventDefault();
  console.log('hello?')
  this.props.buyFlow(this.state.flowPurchased)
}
handleChange(e) {
  let change = {}
  change[e.target.name] = e.target.value;
  console.log(change)
  this.setState(change)
}
render(){
  return (
      <div className='container card'>
        <div id='section-1'>
            <h2>Flow</h2>
            <h5>Get access to the platform by contributing ether</h5>
        </div>
        <div id='section-2'>
            <h3>Contribute here!</h3>
            <p>Introducing "Flow" (F)!  Flow price is <span className="coin-price"></span> ether.  
            You currently have <span className="coin-balance"></span>&nbsp;Flow.</p>
            <form 
              onSubmit={this.handleFormSubmit} 
              role="form"
            >
                
              <div className="form-group">
                  <label htmlFor="exampleInput1" className="bmd-label-floating">How much Flow do you want to buy?</label>
                  <input 
                    name='flowPurchased' 
                    value = {this.state.flowPurchased} 
                    type="number" 
                    className="form-control" 
                    onChange = {this.handleChange.bind(this)}
                  />
                  <span className="bmd-help">We'll never share your email with anyone else.</span>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInput1" className="bmd-label-floating">Please enter your postal code</label>
                  <input type="text" className="form-control" id="exampleInput1"/>
                  <span className="bmd-help">We'll never share your email with anyone else.</span>
              </div>
              <button type="submit" className="btn btn-info right">Buy Flow</button>
            </form>
        </div>
        <div id='section-3'>
            <h3>Statistics</h3>
        </div>
        <div className="row">
        <div className="col-md-6 col-sm-6">
            <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                      <i className="material-icons">face</i>
                  </div>
                  <p className="card-category">Real Estate Experts</p>
                  <h3 className="card-title">500+ <small> active users</small></h3>
                </div>
                <div className="card-footer">
                    <div className="stats">
                        <i className="material-icons ">grade</i>
                        <a href="#pablo">Start earning ether now!</a>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="col-md-6 col-sm-6">
            <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Money Saved Per Average Consumer</p>
                  <h3 className="card-title">$12,030 / person</h3>
                </div>
                <div className="card-footer">
                    <div className="stats">
                        <i className="material-icons">date_range</i> Last 12 Months
                    </div>
                </div>
            </div>
        </div>      
        </div>
      </div>
    );
  }
}
export default PlatformAccess