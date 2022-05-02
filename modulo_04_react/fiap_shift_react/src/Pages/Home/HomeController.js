import React, { Component } from 'react';
import HomeView from './HomeView';

export default class HomeController extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      count1: 0,
      estaCarregando: false
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

  iniciaLogin = () => {
    this.setState({
      estaCarregando: !this.state.estaCarregando
    })
  }

  render() {
    return(
      <HomeView
        estaCarregando={this.state.estaCarregando} 
        iniciaLogin={this.iniciaLogin} 
      />
    )
  }
} 
