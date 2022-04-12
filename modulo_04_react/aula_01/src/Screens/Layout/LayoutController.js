import React from 'react';
import LayoutView from './LayoutView'
import LayoutModel from './LayoutModel'

class LayoutController extends React.Component {
     
    
    constructor() {
        super();
        this.LayoutModel = new LayoutModel();//inicializando o view    
        this.LayoutModel.getSomeInfo();
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
            <LayoutView count={this.state.count} clickButton={this.clickButton} /> //Chamando o View
        )
    }
}
export default LayoutController;