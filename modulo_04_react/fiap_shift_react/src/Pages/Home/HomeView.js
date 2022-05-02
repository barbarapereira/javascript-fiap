import React from 'react';
import './Home.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function HomeView({iniciaLogin, estaCarregando}) {

    let botao = null
    if(!estaCarregando){
        botao = <Button variant="contained" onClick={iniciaLogin}>Enviar</Button>

    } else {
        botao = <CircularProgress  onClick={iniciaLogin}/>
    }

    return (
        <Container maxWidth="xl">
             <Grid container spacing={2}>
                 <Grid item md={6}></Grid>
                
             </Grid>

             <Grid container spacing={2}>
                <Grid item xs={12} lg={12} xl={12}>
                    <Typography variant="h3" >Bem Vindo!</Typography>
                </Grid>

                <Grid item xs={12} lg={12} xl={12}>
                    <TextField id="outlined-basic" label="Digite seu e-mail" variant="outlined" />
                </Grid>

                <Grid item xs={12} lg={12} xl={12}>
                    <TextField id="outlined-basic" label="Digite sua senha" type="password" variant="outlined" />
                </Grid>

                <Grid>
                    {botao}
                </Grid>
             </Grid>
        </Container>
    );
};

export default HomeView;