import React, { Component } from 'react';

class Survey extends Component {
    render() {
      return(
            <div class="container"> 
                <h1>Name/Address</h1>

                <div class="row"> 
                    <div class="col-6">
                        <h3>Available Questions</h3>
                        <div id="accordion" role="tablist">
                            <div class="card card-collapse">
                                <div class="card-header" role="tab" id="headingOne">
                                <h5 class="mb-0">
                                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Question #1: What is blah blah blah blah blah blah blah blah blah
                                    <i class="material-icons">keyboard_arrow_down</i>
                                    </a>
                                </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="inputAddress">Please Input Your Answer</label>
                                                <textarea rows="4" cols="50"  class="form-control" id="inputAddress" placeholder=""/>
                                            </div>
                                            <button type="submit" class="btn btn-info float-right">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-collapse">
                                <div class="card-header" role="tab" id="headingTwo">
                                <h5 class="mb-0">
                                    <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Question #2: What is blah blah blah blah blah blah blah blah blah                        <i class="material-icons">keyboard_arrow_down</i>
                                    </a>
                                </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="inputAddress">Please Input Your Answer</label>
                                                <textarea rows="4" cols="50"  class="form-control" id="inputAddress" placeholder=""/>
                                            </div>
                                            <button type="submit" class="btn btn-info float-right">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-collapse">
                                <div class="card-header" role="tab" id="headingThree">
                                <h5 class="mb-0">
                                    <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Question #3: What is blah blah blah blah blah blah blah blah blah                        <i class="material-icons">keyboard_arrow_down</i>
                                    </a>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="inputAddress">Please Input Your Answer</label>
                                                <textarea rows="4" cols="50"  class="form-control" id="inputAddress" placeholder=""/>
                                            </div>
                                            <button type="submit" class="btn btn-info float-right">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <h3 style={{"padding-bottom": "20px"}}>Balance</h3>
                        <div class="ml-auto mr-auto">
                            <div class="card-info card-pricing" style={{background: 'linear-gradient(60deg, #26c6da, #00acc1)', "border-radius": "6px"}}>
                            <div class="card-body">
                                <div class="card-icon">
                                    <i class="material-icons">money</i>
                                </div>
                                <h1 class="card-title " style={{"text-align": "center"}}>$69</h1>
                                <p class="card-description" style={{"text-align": "center", color: "black"}}>
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
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th class="text-right">Variance</th>
                                    <th class="text-right">Earned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Andrew Mike</td>
                                    <td class="text-right">&euro; 99,225</td>
                                    <td class="text-right">&euro; 99,225</td>
                                </tr>
                                <tr>
                                    <td>Andrew Mike</td>
                                    <td class="text-right">&euro; 99,225</td>
                                    <td class="text-right">&euro; 99,225</td>
                                </tr>
                                <tr>
                                    <td>Andrew Mike</td>
                                    <td class="text-right">&euro; 99,225</td>
                                    <td class="text-right">&euro; 99,225</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <h2>News Articles</h2>
                <div class="row">
                    <div class="col-md-4" >
                        <div class="card" >
                            <img class="card-img-top" src="https://picsum.photos/100/50" alt="Card image cap"/>
                            <div class="card-body">
                                <h4 class="card-title">News Article</h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4" >
                        <div class="card" >
                            <img class="card-img-top" src="https://picsum.photos/100/50" alt="Card image cap"/>
                            <div class="card-body">
                                <h4 class="card-title">News Article</h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4" >
                        <div class="card" >
                            <img class="card-img-top" src="https://picsum.photos/100/50" alt="Card image cap"/>
                            <div class="card-body">
                                <h4 class="card-title">News Article</h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ) 
    }
}

export default Survey