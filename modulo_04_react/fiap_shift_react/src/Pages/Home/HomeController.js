import React, { Component } from 'react';
import HomeView from './HomeView';

export default class HomeController extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };

    setInterval(() => {
      this.setState({ //método
        count: this.state.count + 1 //passando objeto com a info alterada
      })
    }, 1000);

  }
  
  render() {
    return(
      <HomeView  count={this.state.count} />
    )
  }
} 
