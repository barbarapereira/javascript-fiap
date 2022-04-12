import React from 'react';
import ContadorView from './ContadorView'
import ContadorModel from './ContadorModel'

class ContadorController extends React.Component {
     
    
    constructor() {
        super();
        this.contadorModel = new ContadorModel();//inicializando o view    
        this.contadorModel.getSomeInfo();
        this.state = {
            count: 0
        };
    }

    clickButton = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <ContadorView count={this.state.count} clickButton={this.clickButton} /> //Chamando o View
        )
    }
}
export default ContadorController;