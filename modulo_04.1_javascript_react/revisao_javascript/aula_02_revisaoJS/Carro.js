class Carro {
    cor = "";
    modelo = "";
    placa = "";
    velocidade = 0;
    acelerar() {
            this.velocidade += 10;
    }

    freiar() {
            this.velocidade -= 10;
    }
}


//export default Carro();
module.exports = Carro