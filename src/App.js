import React, { Component } from 'react'
import NobulCoin from '../build/contracts/NobulCoin.json'
import NobulCoinSale from '../build/contracts/NobulCoinSale.json'
import getWeb3 from './utils/getWeb3'

import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Survey from './components/Survey'
import PlatformAccess from './components/PlatformAccess'

const flowPrice = 1000000000000000;

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      storageValue: 0,
      web3: null,
      account: ''
    }
    this.buyFlow = this.buyFlow.bind(this)
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3,
        account: results.web3.eth.accounts[0]
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch((err) => {
      console.log('Error finding web3.', err)
    })
  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const nobulCoin = contract(NobulCoin)
    const nobulCoinSale = contract(NobulCoinSale)
    nobulCoin.setProvider(this.state.web3.currentProvider)
    nobulCoinSale.setProvider(this.state.web3.currentProvider)
    nobulCoin.deployed().then(nobulCoin => { console.log(nobulCoin.address) })
    nobulCoinSale.deployed().then(nobulCoinSale => { console.log(nobulCoinSale.address) })

    // Declaring this for later so we can chain functions on SimpleStorage.
    var nobulCoinInstance
    var nobulCoinSaleInstance

    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   nobulCoin.deployed().then((instance) => {
    //     nobulCoinInstance = instance
    //     // Stores a given value, 5 by default.
    //     return nobulCoinInstance.set(5, {from: accounts[0]})
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     return nobulCoinInstance.get.call(accounts[0])
    //   })
    // })
    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   nobulCoinSale.deployed().then((instance) => {
    //     nobulCoinSaleInstance = instance
    //     // Stores a given value, 5 by default.
    //     return nobulCoinSaleInstance.set(5, {from: accounts[0]})
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     return nobulCoinSaleInstance.get.call(accounts[0])
    //   })
    // })
  }
  listenForEvents() {
    // const contract = require('truffle-contract')
    // const nobulCoin = contract(NobulCoin)
    // const nobulCoinSale = contract(NobulCoinSale)
  }
  buyFlow(value) {
    const contract = require('truffle-contract')
    const nobulCoinSale = contract(NobulCoinSale)
    nobulCoinSale.setProvider(this.state.web3.currentProvider)
    nobulCoinSale.deployed().then(nobulCoinSale => { 
      return nobulCoinSale.buyCoins(value, {
        // need to get the actual account...
        from: this.state.account,
        value: value * flowPrice,
        gas: 500000
      })
    }).then(result => { console.log('Flow is purchased...') })
  }
  render() {
    return (
      <Router>
      <div style={{zIndex: -2}}>
      <div className="card card-nav-tabs card-plain" style={{marginBottom: 0}}>
        <div className="card-header card-header-info">
          <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <ul className="nav justify-content-end nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="material-icons">home</i>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/survey">
                      <i className="material-icons">insert_emoticon</i>
                      Agent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                      <i className="material-icons">dashboard</i>
                      Dashboard
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="/sale">
                      <i className="material-icons">favorite_border</i>
                      Direct
                    </a>
                  </li>                  
                </ul>

              </div>
            </div>
          </div>
        </div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/survey" component={Survey} />
        <Route 
          path="/sale"           
          render={(props) => <PlatformAccess {...props} buyFlow={this.buyFlow} />}
        />
      </div>
    </Router>
    );
  }
}

export default App