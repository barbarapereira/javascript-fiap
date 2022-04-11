import React from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends React.Component {

    constructor() {
        super();
        this.homeModel = new HomeModel();//inicializando o view    
        this.homeModel.getSomeInfo();
        this.state = {
            count: 0
        };

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }



    render() {
        return (
            <HomeView count={this.state.count}/> //Chamando o View
        )
    }
}
export default HomeController;