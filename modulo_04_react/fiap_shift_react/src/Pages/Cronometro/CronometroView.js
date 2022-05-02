import { Button, Container, Typography } from '@mui/material';
import React from 'react'

export default function CronometroView({count, iniciar, pausar, parar, statusContador}) {

    let botaoIniciar = null;
    let botaoPausar = null;
    let botaoParar = null;

    if(statusContador === "Parado"){
        botaoIniciar = <Button onClick={iniciar}>Iniciar</Button>
    } else if(statusContador === "Pausado"){
        botaoIniciar = <Button onClick={iniciar}>Iniciar</Button>
        botaoParar = <Button onClick={parar}>Parar</Button>    } 
        else { //rodando
        botaoPausar = <Button onClick={pausar}>Pausar</Button>
        botaoParar = <Button onClick={parar}>Parar</Button>
    }
    
    return (
        <Container maxWidth="xl">
            <Typography variant="h3">Cronometro - {count}</Typography>
            {botaoIniciar}
            {botaoPausar}
            {botaoParar}
        </Container>
    )
}
