import React, { Component } from 'react';
import CronometroView from "./CronometroView";

class CronometroController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            statusContador: "Parado"
        };
    }

    componentDidMount() {
        //vai sar usada para limpar o componente quando terminar de rodar
        this.gerenciarInterval = setInterval(() => { 
            if(this.state.statusContador === "Rodando") {
                this.setState({
                    count: this.state.count + 1
                });
            }

        }, 1000);
    }

    componentWillUnmount() {
        //limpa o contador, ao sair da tela
        clearInterval(this.gerenciarInterval);
    }

    iniciar = () => {
        this.setState({
            statusContador: "Rodando",
        })
    }

    pausar = () => {
        this.setState({
            statusContador: "Parado",
        })
    }

    parar = () => {
        this.setState({
            statusContador: "Parado",
            count: 0,
        })
    }

    render() {
        return (
            <CronometroView 
                count={this.state.count}
                iniciar={this.iniciar}
                pausar={this.pausar}
                parar={this.parar}
                statusContador={this.state.statusContador}/>
        )
    };
}
export default CronometroController;