import React, { Component } from 'react';
import HomeView from './HomeView';
import './Home.css';

export default class HomeController extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      count1: 0
    };

    setInterval(() => {
      this.setState({ //método
        count: this.state.count + 1 //passando objeto com a info alterada
      })
    }, 1000);

  }
  
  addCount = () => {
    this.setState({
      count1: this.state.count1 + 1
    })
  }

  render() {
    return(
      <HomeView  
        count={this.state.count}
        count1={this.state.count1}
        addCount={this.addCount} />
    )
  }
} 
